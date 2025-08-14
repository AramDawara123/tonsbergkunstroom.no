import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center nordic-texture overflow-hidden">
      {/* Modern Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80" alt="Nordic Art Studio" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-transparent to-primary/20" />
        <div className="absolute inset-0 modern-grid opacity-30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full nordic-glass text-primary font-medium animate-nordic-fade-up">
            <Sparkles className="w-4 h-4" />
            <span>Contemporary Nordic Art</span>
          </div>

          <div className="space-y-8">
            <h1 className="nordic-display animate-nordic-fade-up" style={{
            animationDelay: '0.2s'
          }}>
              Where Art Meets
              <span className="block nordic-gradient-text">Nordic Soul</span>
            </h1>
            
            <p className="nordic-subtitle max-w-3xl mx-auto animate-nordic-fade-up leading-loose" style={{
            animationDelay: '0.4s'
          }}>
              Discover contemporary art and creative expression in the heart of Norway. 
              Our studio celebrates the intersection of modern artistry and timeless Nordic beauty, 
              creating spaces where creativity flourishes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-nordic-fade-up" style={{
          animationDelay: '0.6s'
        }}>
            <button className="nordic-button-primary text-lg px-10 py-5">
              Explore Gallery
            </button>
            <button className="nordic-button-secondary text-lg px-10 py-5">
              Join Classes
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 animate-nordic-fade-up" style={{
          animationDelay: '0.8s'
        }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">20+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">200+</div>
              <div className="text-muted-foreground">Artworks Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground">Exhibitions</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
          
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-nordic-sage/30 to-nordic-sky/20 rounded-full blur-3xl nordic-float" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-br from-nordic-ice/40 to-nordic-mist/30 rounded-full blur-3xl nordic-float" style={{
      animationDelay: '2s'
    }} />
      <div className="absolute top-1/2 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-nordic-forest/20 rounded-full blur-3xl nordic-float" style={{
      animationDelay: '4s'
    }} />
    </section>;
};
export default Hero;