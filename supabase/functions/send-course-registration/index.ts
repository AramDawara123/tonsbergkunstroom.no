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

interface CourseRegistrationRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  experience: string;
  message?: string;
  courseId: string;
  courseTitle: string;
  coursePrice: string;
  nextStartDate: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      experience, 
      message, 
      courseId,
      courseTitle,
      coursePrice,
      nextStartDate
    }: CourseRegistrationRequest = await req.json();

    console.log("Processing course registration for:", email, "Course:", courseTitle);

    // First, get or create the course in the database
    let { data: courseData, error: courseError } = await supabase
      .from('courses')
      .select('id')
      .eq('title', courseTitle)
      .single();

    if (courseError || !courseData) {
      // Create the course if it doesn't exist
      const { data: newCourse, error: createError } = await supabase
        .from('courses')
        .insert({
          title: courseTitle,
          description: `Kursregistrering for ${courseTitle}`,
          price: parseFloat(coursePrice.replace(/[^\d.,]/g, '').replace(',', '.')),
          duration: '2-3 timer',
          level: 'Nybegynner',
        })
        .select()
        .single();

      if (createError) {
        console.error("Error creating course:", createError);
        throw new Error(`Database error: ${createError.message}`);
      }
      courseData = newCourse;
    }

    // Save registration to database
    const { data: registrationData, error: dbError } = await supabase
      .from('course_registrations')
      .insert({
        course_id: courseData.id,
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone || null,
        experience_level: experience,
        special_requests: message || null,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "kunstromtonsberg <onboarding@resend.dev>",
      to: [email],
      subject: `Påmelding bekreftet: ${courseTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb; margin-bottom: 20px;">Påmelding Bekreftet!</h1>
          <p>Hei ${firstName},</p>
          <p>Takk for din påmelding til <strong>${courseTitle}</strong>. Vi gleder oss til å se deg i kurset!</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Kursdetaljer:</h3>
            <p><strong>Kurs:</strong> ${courseTitle}</p>
            <p><strong>Pris:</strong> ${coursePrice}</p>
            <p><strong>Neste start:</strong> ${nextStartDate}</p>
            ${experience ? `<p><strong>Din erfaring:</strong> ${experience}</p>` : ''}
            ${message ? `<p><strong>Din melding:</strong> ${message}</p>` : ''}
          </div>
          
          <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1d4ed8;">Neste steg:</h3>
            <p>Vi sender deg mer informasjon om kurset, inkludert:</p>
            <ul>
              <li>Nøyaktig tid og sted</li>
              <li>Hva du skal ta med</li>
              <li>Betalingsinstruksjoner</li>
              <li>Kontaktinformasjon til din instruktør</li>
            </ul>
          </div>
          
          <p>Hvis du har spørsmål, ikke nøl med å kontakte oss på info@kunstromtonsberg.no eller +47 123 45 678.</p>
          <p>Vi gleder oss til å møte deg!</p>
          <p>Med vennlig hilsen,<br>kunstromtonsberg Team</p>
          
          <div style="border-top: 1px solid #e5e7eb; margin-top: 30px; padding-top: 20px; color: #6b7280; font-size: 14px;">
            <p>kunstromtonsberg - Tonsberg, Norway</p>
            <p>E-post: info@kunstromtonsberg.no | Telefon: +47 123 45 678</p>
          </div>
        </div>
      `,
    });

    // Send notification to studio
    const studioEmailResponse = await resend.emails.send({
      from: "kunstromtonsberg <onboarding@resend.dev>",
      to: ["info@kunstromtonsberg.no"],
      subject: `Ny kurspåmelding: ${courseTitle} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb; margin-bottom: 20px;">Ny Kurspåmelding</h1>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Deltakerinformasjon:</h3>
            <p><strong>Navn:</strong> ${firstName} ${lastName}</p>
            <p><strong>E-post:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
            <p><strong>Erfaring:</strong> ${experience}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Kursdetaljer:</h3>
            <p><strong>Kurs:</strong> ${courseTitle}</p>
            <p><strong>Pris:</strong> ${coursePrice}</p>
            <p><strong>Start:</strong> ${nextStartDate}</p>
          </div>
          
          ${message ? `
            <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3 style="margin-top: 0;">Tilleggsmelding:</h3>
              <p>${message}</p>
            </div>
          ` : ''}
          
          <p style="margin-top: 20px;">Svar på denne påmeldingen direkte til: ${email}</p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { userEmailResponse, studioEmailResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Påmelding sendt! Vi kontakter deg snart med kursdetaljer.",
        registrationId: registrationData.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-course-registration function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Det oppstod en feil ved registrering" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);