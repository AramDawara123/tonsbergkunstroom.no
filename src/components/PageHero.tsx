import React, { ReactNode } from 'react';

interface PageHeroProps {
  children: ReactNode;
  className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ children, className = '' }) => {
  return (
    <section className={`relative min-h-[60vh] pt-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background ${className}`}>
      {/* Background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background" />

      {/* Subtle animated pattern to match Gallery */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-accent/30 rounded-full animate-pulse animation-delay-1000" />
        <div className="absolute bottom-40 left-1/3 w-40 h-40 border-2 border-primary/20 rounded-full animate-pulse animation-delay-2000" />
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-accent/25 rounded-full animate-pulse animation-delay-3000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default PageHero;
