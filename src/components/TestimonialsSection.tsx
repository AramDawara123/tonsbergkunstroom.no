import React from 'react';
import { Star, Quote } from 'lucide-react';
const TestimonialsSection = () => {
  const testimonials = [{
    name: "Emma Larsson",
    role: "Kunstentusiast",
    content: "Astrids nordiske kunststil har helt forvandlet hvordan jeg ser på samtidskunst. Verkene hennes bringer slik ro og dybde til hjemmet mitt.",
    rating: 5,
    image: "/placeholder.svg"
  }, {
    name: "Marcus Nielsen",
    role: "Gallerieier",
    content: "Å jobbe med Astrid har vært eksepsjonelt. Hennes forståelse av nordisk estetikk og moderne teknikker skaper virkelig unike verk.",
    rating: 5,
    image: "/placeholder.svg"
  }, {
    name: "Sofia Andersson",
    role: "Kunststudent",
    content: "Kunstkursene her er utrolige. Astrids undervisningsmetode kombinerer tradisjonelle nordiske teknikker med samtidig innovasjon.",
    rating: 5,
    image: "/placeholder.svg"
  }];
  
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3 sm:mb-4">
            Hva våre kunder sier
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Oppdag hvorfor kunstelskere stoler på og verdsetter vårt arbeid
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="flex text-primary">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground/30 mb-2 sm:mb-4" />
              
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-sm sm:text-base text-foreground">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;