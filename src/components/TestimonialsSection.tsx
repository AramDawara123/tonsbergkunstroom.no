import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Emma Larsson",
      role: "Kunstentusiast",
      content: "Astrids nordiske kunststil har helt forvandlet hvordan jeg ser på samtidskunst. Verkene hennes bringer slik ro og dybde til hjemmet mitt.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Marcus Nielsen",
      role: "Gallerieier",
      content: "Å jobbe med Astrid har vært eksepsjonelt. Hennes forståelse av nordisk estetikk og moderne teknikker skaper virkelig unike verk.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Sofia Andersson",
      role: "Kunststudent",
      content: "Kunstkursene her er utrolige. Astrids undervisningsmetode kombinerer tradisjonelle nordiske teknikker med samtidig innovasjon.",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 modern-grid opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Hva Våre <span className="nordic-gradient-text">Studenter</span> Sier
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oppdag hvorfor kunstelskere velger våre kurs og workshops
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="nordic-card p-8 relative group nordic-hover-lift"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
