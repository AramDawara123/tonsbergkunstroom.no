
import React from 'react';
import { Palette, Award, Users, ArrowRight, Star, MapPin } from 'lucide-react';

const ArtistSection = () => {
  const achievements = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "20+ Years",
      description: "Of artistic mastery and innovation",
      color: "from-primary to-nordic-forest"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "50+ Exhibitions",
      description: "Across Scandinavia and Europe",
      color: "from-secondary to-nordic-sage"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "200+ Students",
      description: "Inspired and mentored to excellence",
      color: "from-nordic-sky to-nordic-deep"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-nordic-birch/50 to-nordic-ice/30">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-nordic-sage/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-nordic-sky/10 to-transparent rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content Section - Now First */}
          <div className="space-y-8 lg:order-1">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-medium border border-primary/20">
              <Star className="w-4 h-4 fill-current" />
              <span>Featured Artist</span>
            </div>
            
            {/* Title Section */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-nordic-charcoal via-primary to-nordic-forest bg-clip-text text-transparent">
                  Astrid Nordström
                </span>
              </h2>
              <div className="flex items-center gap-2 text-nordic-stone">
                <MapPin className="w-4 h-4" />
                <span className="text-lg font-medium">Contemporary Nordic Artist</span>
              </div>
            </div>
            
            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-nordic-stone">
                Born and raised in the breathtaking landscapes of northern Norway, Astrid draws inspiration 
                from the ever-changing Nordic seasons and the profound stillness of Arctic winters.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Her contemporary approach creates a unique dialogue between past and present, inviting viewers 
                to discover new perspectives on familiar landscapes.
              </p>
            </div>

            {/* Achievement Cards - Compact Grid */}
            <div className="grid grid-cols-1 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl p-5 bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${achievement.color} text-white shadow-sm`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-nordic-forest text-white rounded-xl font-medium hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group">
                <span>Explore Astrid's Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Image Section - Now Second */}
          <div className="relative lg:order-2">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80"
                  alt="Artist at work"
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">Master</div>
                  <div className="text-sm text-muted-foreground">Since 2004</div>
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-secondary to-nordic-sage text-white rounded-full p-4 shadow-lg">
                <Award className="w-6 h-6" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-nordic-sky/20 to-nordic-deep/20 rounded-2xl -z-10 rotate-12" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-nordic-sage/15 to-transparent rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
