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