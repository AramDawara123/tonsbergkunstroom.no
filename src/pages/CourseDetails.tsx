
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, Clock, Users, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { supabase } from '../integrations/supabase/client';

interface CourseData {
  id: string;
  title: string;
  duration: string;
  capacity: string;
  price: string;
  description: string;
  schedule: string;
  fullDescription: string;
  image: string;
  instructor: string;
  level: string;
  includes: string[];
  nextStartDate: string;
}

const coursesData: { [key: string]: CourseData } = {
  'beginners-watercolor': {
    id: 'beginners-watercolor',
    title: "Nybegynner Akvarell",
    duration: "2 timer",
    capacity: "8 studenter",
    price: "450 NOK",
    description: "Lær grunnleggende akvarellmaling med nordiske landskapstemaer.",
    schedule: "Lørdager 10:00-12:00",
    fullDescription: "Oppdag skjønnheten av akvarellmaling i vårt omfattende nybegynnerkurs. Perfekt for de som aldri har tatt opp en pensel eller ønsker å friske opp ferdighetene sine. Du lærer essensielle teknikker inkludert våt-på-våt, våt-på-tørr, fargeblanding og komposisjon mens du skaper fantastiske nordisk-inspirerte landskap.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    instructor: "Elena Nordström",
    level: "Nybegynner",
    includes: ["Alle malemateriell", "Lerret og papir", "Profesjonell veiledning", "Ta-med-hjem kunstverk", "Kaffe og bakverk"],
    nextStartDate: "2. mars 2024"
  },
  'advanced-oil-painting': {
    id: 'advanced-oil-painting',
    title: "Avansert Oljemaleri",
    duration: "3 timer",
    capacity: "6 studenter",
    price: "650 NOK",
    description: "Mestre avanserte teknikker innen oljemaleri og fargeteori.",
    schedule: "Onsdager 14:00-17:00",
    fullDescription: "Ta oljemalingsferdighetene dine til neste nivå med avanserte teknikker og profesjonelle metoder. Dette intensive kurset dekker avansert fargeteori, glasur-teknikker, teksturskaping og komposisjonsmestring. Perfekt for kunstnere klare til å skape gallerikvalitetsverk.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    instructor: "Magnus Larsson",
    level: "Avansert",
    includes: ["Premium oljefarger", "Lerretsbord", "Profesjonelle pensler", "Palettkniver", "Individuelle kritikksesjoner"],
    nextStartDate: "6. mars 2024"
  },
  'abstract-expression': {
    id: 'abstract-expression',
    title: "Abstrakt Uttrykk",
    duration: "2.5 timer",
    capacity: "10 studenter",
    price: "550 NOK",
    description: "Utforsk abstrakte kunstteknikker og finn din unike kunstneriske stemme.",
    schedule: "Søndager 13:00-15:30",
    fullDescription: "Slipp kreativiteten løs gjennom abstrakt uttrykk. Dette dynamiske kurset oppmuntrer til eksperimentering med form, farge og tekstur for å utvikle din personlige kunstneriske stil. Lær fra samtidige abstrakte teknikker mens du utforsker emosjonelt uttrykk gjennom kunst.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    instructor: "Astrid Bjørk",
    level: "Mellomliggende",
    includes: ["Blandede medier utstyr", "Storformat papir", "Akrylfarger", "Teksturmedier", "Porteføljeanmeldelse"],
    nextStartDate: "3. mars 2024"
  }
};

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      message: ''
    }
  });

  const course = courseId ? coursesData[courseId] : null;

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Kurs Ikke Funnet</h1>
          <Link to="/services" className="nordic-button-primary">
            Tilbake til Kurs
          </Link>
        </div>
      </div>
    );
  }

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    try {
      const registrationData = {
        ...data,
        courseId: course.id,
        courseTitle: course.title,
        coursePrice: course.price,
        nextStartDate: course.nextStartDate
      };

      const { data: result, error } = await supabase.functions.invoke('send-course-registration', {
        body: registrationData
      });

      if (error) throw error;

      toast.success("Påmelding sendt! Vi kontakter deg snart med kursdetaljer.");
      form.reset();
    } catch (error: any) {
      console.error('Error submitting course registration:', error);
      toast.error("Det oppstod en feil ved påmelding. Prøv igjen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Course Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Tilbake til Kurs
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {course.level} Nivå
              </div>
              
              <h1 className="nordic-heading mb-6">{course.title}</h1>
              <p className="nordic-body mb-8">{course.fullDescription}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">{course.duration}</div>
                    <div className="text-sm text-muted-foreground">Varighet</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Maks {course.capacity}</div>
                    <div className="text-sm text-muted-foreground">Klassestørrelse</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">{course.schedule}</div>
                    <div className="text-sm text-muted-foreground">Ukentlig Timeplan</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-semibold text-foreground">Studioplassering</div>
                    <div className="text-sm text-muted-foreground">Oslo, Norge</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-primary">{course.price}</div>
                <div className="text-muted-foreground">per klasse</div>
              </div>
            </div>
            
            <div className="relative">
              <div className="nordic-card overflow-hidden nordic-hover-lift">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-nordic-sky rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="nordic-heading mb-8">Hva som er Inkludert</h2>
              <div className="space-y-4">
                {course.includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="nordic-body">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 nordic-card">
                <h3 className="text-xl font-semibold text-foreground mb-2">Din Instruktør</h3>
                <p className="text-lg font-medium text-primary mb-2">{course.instructor}</p>
                <p className="nordic-body">Profesjonell kunstner med over 15 års erfaring innen nordisk-inspirert kunst og undervisning.</p>
              </div>
            </div>
            
            {/* Registration Form */}
            <div className="nordic-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-2">Meld Deg På Dette Kurset</h2>
              <p className="text-muted-foreground mb-6">Neste kurs starter: {course.nextStartDate}</p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fornavn</FormLabel>
                          <FormControl>
                            <Input placeholder="Skriv inn ditt fornavn" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Etternavn</FormLabel>
                          <FormControl>
                            <Input placeholder="Skriv inn ditt etternavn" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-post</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Skriv inn din e-post" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefonnummer</FormLabel>
                      <FormControl>
                        <Input placeholder="Skriv inn ditt telefonnummer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tidligere Kunsterfaring</FormLabel>
                      <FormControl>
                        <Input placeholder="Kort beskrivelse av din erfaring" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tilleggsmelding (Valgfritt)</FormLabel>
                      <FormControl>
                        <Input placeholder="Spørsmål eller spesielle krav?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full nordic-button-primary" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sender inn...' : 'Meld Deg På Nå'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;
