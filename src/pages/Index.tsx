
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ArtistSection from '../components/ArtistSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FeaturedWorks from '../components/FeaturedWorks';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ArtistSection />
      <TestimonialsSection />
      <FeaturedWorks />
      <Footer />
    </div>
  );
};

export default Index;
