import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const Hero = () => {
  const { data: heroPhoto } = useQuery({
    queryKey: ['hero-photo'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('photos')
        .select('*')
        .eq('show_on_home', true)
        .order('display_order', { ascending: true })
        .limit(1)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const backgroundImage = heroPhoto?.image_url || 
    "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-muted overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage}
          alt="Kunstrom Tønsberg" 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-transparent to-primary/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 text-center z-10 relative">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 py-20 sm:py-0">
          <div className="space-y-4 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight px-4">
              Kunstromtonsberg
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
               Kunstrom Tønsberg et levende møtested for kunst og fellesskap.
               Utstillinger, verksteder og gode samtaler. 
               Kunst som møter mennesker velkommen!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-secondary to-nordic-sage text-white rounded-xl font-medium text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Bli Med På Kurs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
