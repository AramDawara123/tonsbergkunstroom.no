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
  return <section className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background Pattern */}
      
      
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="nordic-heading text-4xl md:text-5xl font-bold mb-6">
            Hva Folk Sier
          </h2>
          <p className="nordic-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Oppdag hvordan vår nordisk-inspirerte kunst og kurs har berørt hjertene og hjemmene til vårt fellesskap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => <div key={index} className="nordic-card p-8 text-center nordic-hover-lift" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-primary mx-auto opacity-60" />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
              </div>

              {/* Content */}
              <p className="nordic-body text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Profile */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4 flex items-center justify-center overflow-hidden">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="nordic-subtitle font-semibold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="nordic-body text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="nordic-card p-8 max-w-2xl mx-auto">
            <h3 className="nordic-heading text-2xl font-bold mb-4">
              Bli Med i Vårt Kunstfellesskap
            </h3>
            <p className="nordic-body text-muted-foreground mb-6">
              Opplev skjønnheten av nordisk-inspirert kunst og bli en del av vår kreative familie.
            </p>
            <button className="nordic-button-primary px-8 py-3">
              Start Din Reise
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;