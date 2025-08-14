
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center nordic-texture overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80"
          alt="Nordic Art Studio"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 nordic-gradient opacity-60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="nordic-display animate-nordic-fade-up">
            Where Art Meets
            <span className="block text-primary">Nordic Serenity</span>
          </h1>
          
          <p className="nordic-subtitle max-w-2xl mx-auto animate-nordic-fade-up" style={{ animationDelay: '0.2s' }}>
            Discover contemporary art and creative expression in the heart of Norway. 
            Our studio celebrates the intersection of modern artistry and timeless Nordic beauty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-nordic-fade-up" style={{ animationDelay: '0.4s' }}>
            <button className="nordic-button-primary">
              Explore Gallery
            </button>
            <button className="nordic-button-secondary">
              Join Classes
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
          <ArrowDown size={24} />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-nordic-sage/20 rounded-full blur-3xl animate-nordic-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-nordic-sky/20 rounded-full blur-3xl animate-nordic-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;
