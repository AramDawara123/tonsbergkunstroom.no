
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LightboxModal from '../components/LightboxModal';

const Gallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const artworks = [{
    id: 1,
    title: "Aurora Dreams",
    category: "Abstract",
    year: "2024",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Inspired by the dancing northern lights over the Arctic landscape."
  }, {
    id: 2,
    title: "Fjord Serenity",
    category: "Landscape",
    year: "2024",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "The peaceful morning mist rising from ancient Norwegian fjords."
  }, {
    id: 3,
    title: "Winter Solstice",
    category: "Mixed Media",
    year: "2023",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Celebrating the longest night and the promise of returning light."
  }, {
    id: 4,
    title: "Midnight Sun",
    category: "Oil on Canvas",
    year: "2023",
    image: "https://images.unsplash.com/photo-1536924430914-91f9e2d76e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "The ethereal beauty of summer nights in the Arctic Circle."
  }, {
    id: 5,
    title: "Forest Whispers",
    category: "Watercolor",
    year: "2024",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "The ancient stories told by Norway's primeval forests."
  }, {
    id: 6,
    title: "Coastal Harmony",
    category: "Acrylic",
    year: "2024",
    image: "https://images.unsplash.com/photo-1582561833283-4a93960afab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Where the rugged coastline meets the endless Nordic seas."
  }];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : artworks.length - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev < artworks.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
        <div className="absolute top-1/4 -left-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-64 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/3 to-accent/3 blur-3xl animate-spin" style={{animationDuration: '60s'}} />
      </div>
      
      {/* Enhanced Header */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 via-accent/8 to-transparent blur-3xl animate-pulse" />
          <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-gradient-to-bl from-accent/12 via-primary/6 to-transparent blur-3xl animate-pulse animation-delay-1000" />
          <div className="absolute bottom-0 left-1/2 w-72 h-72 rounded-full bg-gradient-to-tr from-primary/8 via-accent/10 to-transparent blur-3xl animate-pulse animation-delay-2000" />
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-primary/50 rounded-full animate-spin" style={{animationDuration: '20s'}} />
          <div className="absolute top-40 right-32 w-24 h-24 border border-accent/50 rounded-lg rotate-45 animate-pulse" />
          <div className="absolute bottom-32 left-1/3 w-28 h-28 border border-primary/40 rounded-full animate-bounce" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Floating decorative orbs */}
          <div className="absolute -top-10 left-16 w-20 h-20 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-xl animate-float shadow-2xl" />
          <div className="absolute top-20 right-24 w-32 h-32 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 blur-2xl animate-float animation-delay-1000 shadow-2xl" />
          <div className="absolute -bottom-5 left-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-primary/35 to-accent/35 blur-xl animate-float animation-delay-2000 shadow-2xl" />
          <div className="absolute bottom-10 right-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-accent/45 to-primary/45 blur-lg animate-float animation-delay-3000 shadow-2xl" />
          
          <div className="nordic-fade-up">
            {/* Artistic Title */}
            <div className="relative mb-8">
              <h1 className="nordic-display text-5xl lg:text-7xl font-bold mb-4 text-foreground relative z-10">
                Art Gallery
              </h1>
              {/* Title shadow effect */}
              <div className="absolute inset-0 text-5xl lg:text-7xl font-bold text-primary/10 blur-sm transform translate-x-2 translate-y-2">
                Art Gallery
              </div>
            </div>
            
            {/* Elegant divider */}
            <div className="relative mb-10">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg" />
            </div>
            
            {/* Enhanced description */}
            <div className="relative">
              <p className="nordic-body text-xl text-foreground max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
                Discover our complete collection of contemporary Nordic art, 
                each piece telling a story of landscape, light, and the Nordic soul that connects us all.
              </p>
              
              {/* Subtitle */}
              <p className="text-sm text-primary font-bold tracking-wider uppercase">
                ✦ Curated Excellence ✦ Nordic Heritage ✦ Timeless Beauty ✦
              </p>
            </div>

            {/* Interactive elements */}
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <div className="bg-gradient-to-r from-primary/20 to-primary/30 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold text-primary border border-primary/40 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default">
                {artworks.length} Masterpieces
              </div>
              <div className="bg-gradient-to-r from-accent/20 to-accent/30 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold text-accent border border-accent/40 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default">
                Nordic Inspired
              </div>
              <div className="bg-gradient-to-r from-foreground/10 to-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold text-foreground border border-foreground/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default">
                2023-2024 Collection
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Gallery Grid */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          {/* Section intro */}
          <div className="text-center mb-16 nordic-fade-up">
            <h2 className="nordic-heading text-3xl font-bold mb-4">Featured Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Each artwork is a window into the Nordic soul, crafted with passion and precision.</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <div 
                key={artwork.id} 
                className="nordic-card group cursor-pointer nordic-hover-lift"
                onClick={() => openLightbox(index)}
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  
                  {/* Premium overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full nordic-glass text-white text-sm font-semibold shadow-lg">
                    {artwork.year}
                  </div>

                  {/* View overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="nordic-glass px-6 py-3 rounded-full text-white font-semibold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Artwork
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="nordic-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {artwork.title}
                    </h3>
                  </div>
                  
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-semibold mb-4 border border-primary/20">
                    {artwork.category}
                  </span>
                  
                  <p className="nordic-body text-muted-foreground leading-relaxed">{artwork.description}</p>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 group-hover:scale-150 transition-transform duration-500" />
                  <div className="absolute top-4 right-6 w-2 h-2 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-125 transition-transform duration-700 animation-delay-200" />
                </div>
              </div>
            ))}
          </div>

          {/* Collection stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 nordic-fade-up">
            <div className="text-center nordic-glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">{artworks.length}</div>
              <div className="text-sm text-muted-foreground">Artworks</div>
            </div>
            <div className="text-center nordic-glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center nordic-glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Latest Work</div>
            </div>
            <div className="text-center nordic-glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Inspiration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        artworks={artworks}
        currentIndex={currentImageIndex}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />

      <Footer />
    </div>
  );
};

export default Gallery;
