
import React from 'react';
import { Palette, Award, Users } from 'lucide-react';

const ArtistSection = () => {
  const achievements = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "20+ Years",
      description: "Of artistic experience"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "50+ Exhibitions",
      description: "Across Scandinavia"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "200+ Students",
      description: "Inspired and taught"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="nordic-card overflow-hidden nordic-hover-lift">
              <img
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80"
                alt="Artist at work"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-nordic-sage rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="nordic-heading mb-4">Meet Astrid Nordström</h2>
              <p className="nordic-body mb-6">
                Born and raised in the breathtaking landscapes of northern Norway, Astrid draws inspiration 
                from the ever-changing Nordic seasons, the dance of aurora borealis, and the profound 
                stillness of Arctic winters.
              </p>
              <p className="nordic-body">
                Her contemporary approach to traditional Nordic themes creates a unique dialogue between 
                past and present, inviting viewers to discover new perspectives on familiar landscapes 
                and emotions.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors"
                >
                  <div className="text-primary mb-3 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <p className="nordic-body text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            <button className="nordic-button-ghost">
              Learn More About Astrid →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
