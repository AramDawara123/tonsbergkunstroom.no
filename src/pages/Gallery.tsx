import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import LightboxModal from '../components/LightboxModal';
const Gallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    document.title = "Art Gallery | Nordic Art Studio";
    const content = "Explore contemporary Nordic art: curated collection of landscapes, abstracts and mixed media.";
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDesc) {
      metaDesc.setAttribute('content', content);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = content;
      document.head.appendChild(m);
    }
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const href = window.location.origin + window.location.pathname;
    if (link) {
      link.href = href;
    } else {
      link = document.createElement('link');
      link.rel = 'canonical';
      link.href = href;
      document.head.appendChild(link);
    }
  }, []);
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
    setCurrentImageIndex(prev => prev > 0 ? prev - 1 : artworks.length - 1);
  };
  const goToNext = () => {
    setCurrentImageIndex(prev => prev < artworks.length - 1 ? prev + 1 : 0);
  };
  return <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
        <div className="absolute top-1/4 -left-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-64 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/3 to-accent/3 blur-3xl animate-spin" style={{
        animationDuration: '60s'
      }} />
      </div>
      
      {/* New Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background">
          {/* Animated Nordic Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/30 rounded-full animate-pulse" />
            <div className="absolute top-40 right-32 w-24 h-24 border-2 border-accent/30 rounded-full animate-pulse animation-delay-1000" />
            <div className="absolute bottom-40 left-1/3 w-40 h-40 border-2 border-primary/20 rounded-full animate-pulse animation-delay-2000" />
            <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-accent/25 rounded-full animate-pulse animation-delay-3000" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="text-center mb-16 mt-16">
              {/* Main Title */}
              <h1 className="text-6xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
                Discover
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  Nordic Art
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
                Immerse yourself in a curated collection of contemporary Nordic masterpieces. 
                Each artwork captures the essence of Scandinavian beauty, from ethereal landscapes to bold abstracts.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link 
                  to="#collection"
                  className="group relative inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="mr-2">Explore Collection</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-card text-foreground border-2 border-border rounded-full font-semibold text-lg hover:bg-muted/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="mr-2">Contact Artist</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </div>

              {/* Gallery Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{artworks.length}</div>
                  <div className="text-sm text-muted-foreground font-medium">Artworks</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4</div>
                  <div className="text-sm text-muted-foreground font-medium">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2024</div>
                  <div className="text-sm text-muted-foreground font-medium">Latest</div>
                </div>
              </div>
            </div>

            {/* Featured Artwork Preview */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {artworks.slice(0, 3).map((artwork, index) => (
                <div 
                  key={artwork.id} 
                  className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                  onClick={() => openLightbox(index)}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="font-bold text-lg mb-1">{artwork.title}</h3>
                      <p className="text-sm text-white/80">{artwork.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full" />
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="collection" className="relative py-20">
        <div className="container mx-auto px-6">
          {/* Section intro */}
          <div className="text-center mb-16 nordic-fade-up">
            <h2 className="nordic-heading text-3xl font-bold mb-4">Featured Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Each artwork is a window into the Nordic soul, crafted with passion and precision.</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => <div key={artwork.id} className="nordic-card group cursor-pointer nordic-hover-lift" onClick={() => openLightbox(index)} style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                  <img src={artwork.image} alt={artwork.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  
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
              </div>)}
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
      <LightboxModal isOpen={isLightboxOpen} onClose={closeLightbox} artworks={artworks} currentIndex={currentImageIndex} onPrevious={goToPrevious} onNext={goToNext} />

      <Footer />
    </div>;
};
export default Gallery;