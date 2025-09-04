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
    title: "Beginner's Watercolor",
    duration: "2 hours",
    capacity: "8 students",
    price: "450 NOK",
    description: "Learn the fundamentals of watercolor painting with Nordic landscape themes.",
    schedule: "Saturdays 10:00-12:00"
  }, {
    id: 'advanced-oil-painting',
    title: "Advanced Oil Painting",
    duration: "3 hours",
    capacity: "6 students",
    price: "650 NOK",
    description: "Master advanced techniques in oil painting and color theory.",
    schedule: "Wednesdays 14:00-17:00"
  }, {
    id: 'abstract-expression',
    title: "Abstract Expression",
    duration: "2.5 hours",
    capacity: "10 students",
    price: "550 NOK",
    description: "Explore abstract art techniques and find your unique artistic voice.",
    schedule: "Sundays 13:00-15:30"
  }];
  const courseFeatures = [{
    icon: <BookOpen className="w-8 h-8" />,
    title: "Structured Learning",
    description: "Progressive curriculum designed to build your skills step by step from basics to advanced techniques."
  }, {
    icon: <Award className="w-8 h-8" />,
    title: "Expert Instruction",
    description: "Learn from professional artists with years of experience in teaching and creating Nordic-inspired art."
  }, {
    icon: <Target className="w-8 h-8" />,
    title: "Personal Growth",
    description: "Develop your unique artistic voice while building confidence in your creative abilities."
  }];
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <PageHero>
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full nordic-glass text-foreground text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Premium Art Education
          </div>
          
          <h1 className="nordic-heading mb-6">Nordic Art Classes</h1>
          <p className="nordic-subtitle max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Immerse yourself in the beauty of Nordic art traditions with expert guidance and inspiring studio atmosphere.
          </p>
          
          <div className="flex justify-center gap-8 mt-12 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Course Levels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </PageHero>

      {/* Art Classes */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 modern-grid opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Our Premium Classes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully crafted courses designed to elevate your artistic journey
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
                      <span className="text-sm font-medium text-primary uppercase tracking-wide">Premium Course</span>
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
                        <span className="font-medium">Max {classItem.capacity}</span>
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
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 nordic-texture opacity-20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-accent/15 to-primary/15 blur-2xl"></div>
        
        
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
              Questions & Answers
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Frequently Asked
              <span className="nordic-gradient-text"> Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our Nordic art classes and enrollment process
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="nordic-card border border-primary/10">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary">
                  What materials are included in the course fees?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  All basic art supplies are included in your course fee, including paints, brushes, canvases, and paper. 
                  You only need to bring your creativity and enthusiasm to learn! For advanced courses, we provide premium materials 
                  to help you achieve professional results.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="nordic-card border border-primary/10">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary">
                  Do I need prior art experience to join?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Not at all! Our beginner courses are designed for complete newcomers to art. We start with fundamental 
                  techniques and gradually build your skills. For advanced courses, we recommend some basic painting experience, 
                  but our instructors will assess and guide you accordingly.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="nordic-card border border-primary/10">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary">
                  What is your cancellation and refund policy?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  We offer full refunds for cancellations made 48 hours before the class start time. For cancellations 
                  within 48 hours, we provide a credit that can be used for future classes within 6 months. In case of 
                  emergencies, please contact us directly to discuss options.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="nordic-card border border-primary/10">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary">
                  How small are the class sizes?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  We maintain small class sizes to ensure personalized attention. Our beginner classes have a maximum of 8 students, 
                  advanced oil painting classes limit to 6 students, and abstract expression classes accommodate up to 10 students. 
                  This allows our instructors to provide individual guidance and feedback.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="nordic-card border border-primary/10">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary">
                  Can I book a trial class before committing to a full course?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Yes! We offer single-session trial classes for 300 NOK, which can be credited toward your full course fee 
                  if you decide to continue. This is a great way to experience our teaching style and studio atmosphere 
                  before making a commitment to the full program.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="nordic-card border border-primary/10">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary">
                  What safety measures do you have in place?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Our studio follows all health and safety guidelines. We provide proper ventilation, safety equipment for 
                  paint handling, and maintain clean, sanitized workspaces. All materials we use are non-toxic and safe for 
                  indoor use. We also have first aid supplies readily available.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="text-center mt-12 relative z-10">
              <p className="text-muted-foreground mb-6">Still have questions? We're here to help!</p>
              <Link to="/contact" className="nordic-button-primary inline-flex items-center justify-center gap-2 group/btn">
                <span>Contact Us</span>
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