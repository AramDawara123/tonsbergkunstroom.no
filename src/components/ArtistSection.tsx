
import React from 'react';
import { Palette, Award, Users, ArrowRight } from 'lucide-react';

const ArtistSection = () => {
  const achievements = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: "20+ Years",
      description: "Of artistic mastery and innovation",
      color: "from-primary to-nordic-forest"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "50+ Exhibitions",
      description: "Across Scandinavia and Europe",
      color: "from-secondary to-nordic-sage"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "200+ Students",
      description: "Inspired and mentored to excellence",
      color: "from-nordic-sky to-nordic-deep"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 nordic-texture opacity-50" />
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-nordic-sage/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative nordic-card overflow-hidden nordic-hover-lift group">
              <img
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80"
                alt="Artist at work"
                className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 nordic-glass rounded-2xl p-6 backdrop-blur-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">Master</div>
                <div className="text-sm text-muted-foreground">Artist</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-nordic-sage to-nordic-forest rounded-3xl -z-10 rotate-12" />
          </div>

          {/* Content Section */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                <Palette className="w-4 h-4" />
                <span>Meet the Artist</span>
              </div>
              
              <h2 className="nordic-heading leading-tight">
                Astrid Nordström
                <span className="block text-2xl font-light text-muted-foreground mt-2">
                  Contemporary Nordic Artist
                </span>
              </h2>
              
              <div className="space-y-4">
                <p className="nordic-body text-xl leading-relaxed">
                  Born and raised in the breathtaking landscapes of northern Norway, Astrid draws inspiration 
                  from the ever-changing Nordic seasons, the dance of aurora borealis, and the profound 
                  stillness of Arctic winters.
                </p>
                <p className="nordic-body leading-relaxed">
                  Her contemporary approach to traditional Nordic themes creates a unique dialogue between 
                  past and present, inviting viewers to discover new perspectives on familiar landscapes 
                  and emotions that resonate with the Nordic soul.
                </p>
              </div>
            </div>

            {/* Modern Achievement Cards */}
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl p-6 nordic-glass hover:bg-white/20 transition-all duration-500 group cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative flex items-center gap-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.color} text-white shadow-lg`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {achievement.title}
                      </h3>
                      <p className="nordic-body">
                        {achievement.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>

            <button className="nordic-button-ghost inline-flex items-center gap-2 text-lg">
              Learn More About Astrid
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
