import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-muted overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80" alt="tonsbergkunstroom" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-transparent to-primary/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Kunstromtonsberg
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
               Kunstrom Tønsberg et levende møtested for kunst og fellesskap.
               Utstillinger, verksteder og gode samtaler. 
               Kunst som møter mennesker velkommen!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            
            <Link to="/services" className="px-10 py-5 bg-gradient-to-r from-secondary to-nordic-sage text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Bli Med På Kurs
            </Link>
          </div>

          {/* Stats */}
          
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
          
        </div>
      </div>
    </section>;
};
export default Hero;