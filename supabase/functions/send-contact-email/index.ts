import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { firstName, lastName, email, subject, message }: ContactRequest = await req.json();

    console.log("Processing contact form submission for:", email);

    // Save to database
    const { data: contactData, error: dbError } = await supabase
      .from('contact_messages')
      .insert({
        name: `${firstName} ${lastName}`,
        email: email,
        subject: subject || 'Kontaktskjema henvendelse',
        message: message,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Nordic Art Studio <onboarding@resend.dev>",
      to: [email],
      subject: "Takk for din henvendelse til Nordic Art Studio",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb; margin-bottom: 20px;">Takk for din henvendelse!</h1>
          <p>Hei ${firstName},</p>
          <p>Vi har mottatt din melding og vil kontakte deg så snart som mulig.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Din melding:</h3>
            <p><strong>Emne:</strong> ${subject || 'Kontaktskjema henvendelse'}</p>
            <p><strong>Melding:</strong> ${message}</p>
          </div>
          
          <p>Vi gleder oss til å høre fra deg!</p>
          <p>Med vennlig hilsen,<br>Nordic Art Studio Team</p>
          
          <div style="border-top: 1px solid #e5e7eb; margin-top: 30px; padding-top: 20px; color: #6b7280; font-size: 14px;">
            <p>Nordic Art Studio - Kunstnergata 15, 0150 Oslo, Norge</p>
            <p>E-post: hello@nordicart.no | Telefon: +47 123 45 678</p>
          </div>
        </div>
      `,
    });

    // Send notification to studio
    const studioEmailResponse = await resend.emails.send({
      from: "Nordic Art Studio <onboarding@resend.dev>",
      to: ["info@kunstromtonsberg.no"],
      subject: `Ny henvendelse fra ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb; margin-bottom: 20px;">Ny kontakthenvendelse</h1>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Kontaktinformasjon:</h3>
            <p><strong>Navn:</strong> ${firstName} ${lastName}</p>
            <p><strong>E-post:</strong> ${email}</p>
            <p><strong>Emne:</strong> ${subject || 'Kontaktskjema henvendelse'}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0;">Melding:</h3>
            <p>${message}</p>
          </div>
          
          <p style="margin-top: 20px;">Svar på denne henvendelsen direkte til: ${email}</p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { userEmailResponse, studioEmailResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Melding sendt! Vi kontakter deg snart.",
        id: contactData.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Det oppstod en feil ved sending av melding" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);