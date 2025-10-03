import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Palette, Users, Heart, Clock, ArrowRight, Award, BookOpen, Target, Sparkles, Star, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import PageHero from '../components/PageHero';
const Services = () => {
  const classes = [{
    id: 'beginners-watercolor',
    title: "Nybegynner Akvarell",
    duration: "2 timer",
    capacity: "8 studenter",
    price: "450 NOK",
    description: "Lær grunnleggende akvarellmaling med nordiske landskapstemaer.",
    schedule: "Lørdager 10:00-12:00"
  }, {
    id: 'advanced-oil-painting',
    title: "Avansert Oljemaleri",
    duration: "3 timer",
    capacity: "6 studenter",
    price: "650 NOK",
    description: "Mestre avanserte teknikker innen oljemaleri og fargeteori.",
    schedule: "Onsdager 14:00-17:00"
  }, {
    id: 'abstract-expression',
    title: "Abstrakt Uttrykk",
    duration: "2.5 timer",
    capacity: "10 studenter",
    price: "550 NOK",
    description: "Utforsk abstrakte kunstteknikker og finn din unike kunstneriske stemme.",
    schedule: "Søndager 13:00-15:30"
  }];
  const courseFeatures = [{
    icon: <BookOpen className="w-8 h-8" />,
    title: "Strukturert Læring",
    description: "Progressivt pensum designet for å bygge ferdighetene dine steg for steg fra grunnleggende til avanserte teknikker."
  }, {
    icon: <Award className="w-8 h-8" />,
    title: "Ekspert Instruksjon",
    description: "Lær av profesjonelle kunstnere med års erfaring innen undervisning og skaping av nordisk-inspirert kunst."
  }, {
    icon: <Target className="w-8 h-8" />,
    title: "Personlig Vekst",
    description: "Utvikle din unike kunstneriske stemme mens du bygger selvtillit i dine kreative evner."
  }];
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <PageHero>
        <div className="text-center">
          
          
          <h1 className="nordic-heading mb-6">Sammen utvikler vi kreativitet</h1>
          <p className="nordic-subtitle max-w-3xl mx-auto leading-relaxed animate-fade-in">Kunstrom Tønsberg er et sted som samler kunst og kreativitet. Vi har flere profesjonelle kunstnere som kan starte med deg helt fra begynnelsen og hjelpe deg å finne ditt eget kunstneriske uttrykk. I tillegg tilbyr vi faste kurs for barn og voksene, samt mulighet for egne timer for talentfulle barn eller voksen som ønsker å utvikle ferdighetene sine videre</p>
          
          
        </div>
      </PageHero>

      {/* Art Classes */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 modern-grid opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Våre Premium Kurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Velg fra våre nøye utformede kurs designet for å løfte din kunstneriske reise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => <div key={index} className="group relative nordic-card nordic-hover-lift overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                      <span className="text-sm font-medium text-primary uppercase tracking-wide">Premium Kurs</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />)}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {classItem.title}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-5 h-5 mr-3 text-primary" />
                        <span className="font-medium">{classItem.duration}</span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {classItem.schedule.split(' ')[0]}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-5 h-5 mr-3 text-primary" />
                        <span className="font-medium">Maks {classItem.capacity}</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {classItem.price}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{classItem.description}</p>
                  
                  <div className="mb-6 p-4 rounded-xl bg-muted/50 border border-primary/10">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-medium">{classItem.schedule}</span>
                    </div>
                  </div>

                  <Link to={`/course/${classItem.id}`} className="nordic-button-primary w-full text-center inline-flex items-center justify-center gap-2 group/btn">
                    <span>Meld Deg På Nå</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
        
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-accent/15 to-primary/15 blur-2xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Ekspert-ledet Utdanning
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                Hvorfor Velge Våre 
                <span className="nordic-gradient-text"> Kunstkurs?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Våre kunstkurs er designet for å fremme kreativitet samtidig som de gir solide tekniske grunnlag. 
                Enten du er en fullstendig nybegynner eller ønsker å foredle ferdighetene dine, vil vårt støttende miljø 
                og ekspertveiledning hjelpe deg med å oppnå dine kunstneriske mål.
              </p>

              <div className="space-y-8 mb-12">
                {courseFeatures.map((feature, index) => <div key={index} className="group flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-sm border border-white/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>)}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="nordic-button-primary group/btn">
                  <span>Kom I Gang I Dag</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link to="/gallery" className="nordic-button-secondary group/btn">
                  <Palette className="w-4 h-4 mr-2" />
                  <span>Se Studentarbeid</span>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
              <div className="relative nordic-card overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Art class in session showcasing students learning Nordic painting techniques" className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/20 transition-colors duration-500"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 modern-grid opacity-20"></div>
        <div className="absolute top-10 left-20 w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 blur-2xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Spørsmål & Svar
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Ofte Stilte
              <span className="nordic-gradient-text"> Spørsmål</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alt du trenger å vite om våre nordiske kunstkurs og påmeldingsprosess
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="nordic-card border border-primary/10">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary">
                  Hvilke materialer er inkludert i kursavgiften?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Alle grunnleggende kunstmateriell er inkludert i kursavgiften, inkludert maling, pensler, lerret og papir. 
                  Du trenger bare å ta med kreativiteten og entusiasmen din for å lære! For avanserte kurs tilbyr vi premiummaterialer 
                  for å hjelpe deg oppnå profesjonelle resultater.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="nordic-card border border-primary/10">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary">
                  Trenger jeg tidligere kunsterfaring for å være med?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Ikke i det hele tatt! Våre nybegynnerkurs er designet for fullstendige nybegynnere innen kunst. Vi starter med grunnleggende 
                  teknikker og bygger gradvis opp ferdighetene dine. For avanserte kurs anbefaler vi litt grunnleggende malererfaring, 
                  men våre instruktører vil vurdere og veilede deg deretter.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="nordic-card border border-primary/10">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary">
                  Hva er avbestillings- og refusjonspolitikken deres?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Vi tilbyr full refusjon for avbestillinger gjort 48 timer før kursstart. For avbestillinger 
                  innen 48 timer gir vi en kreditt som kan brukes til fremtidige kurs innen 6 måneder. I tilfelle 
                  nødsituasjoner, vennligst kontakt oss direkte for å diskutere alternativer.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="nordic-card border border-primary/10">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary">
                  Hvor små er klassestørrelsene?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Vi opprettholder små klassestørrelser for å sikre personlig oppmerksomhet. Våre nybegynnerklasser har maksimalt 8 studenter, 
                  avanserte oljemaleriklasser begrenser til 6 studenter, og abstrakte uttrykksklasser tar opptil 10 studenter. 
                  Dette lar våre instruktører gi individuell veiledning og tilbakemelding.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="nordic-card border border-primary/10">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary">
                  Kan jeg bestille en prøveklasse før jeg forplikter meg til et helt kurs?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Ja! Vi tilbyr enkeltøkt prøveklasser for 300 NOK, som kan krediteres mot din fulle kursavgift 
                  hvis du bestemmer deg for å fortsette. Dette er en flott måte å oppleve vår undervisningsstil og studioatmosfære 
                  før du forplikter deg til det fulle programmet.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="nordic-card border border-primary/10">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary">
                  Hvilke sikkerhetstiltak har dere på plass?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Vårt studio følger alle helse- og sikkerhetsretningslinjer. Vi sørger for riktig ventilasjon, sikkerhetsmateriell for 
                  malinghåndtering, og opprettholder rene, sanerte arbeidsområder. Alle materialene vi bruker er ikke-giftige og trygge for 
                  innendørs bruk. Vi har også førstehjelpsutstyr lett tilgjengelig.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="text-center mt-12 relative z-10">
              <p className="text-muted-foreground mb-6">Har du fortsatt spørsmål? Vi er her for å hjelpe!</p>
              <Link to="/contact" className="nordic-button-primary inline-flex items-center justify-center gap-2 group/btn">
                <span>Kontakt Oss</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Services;