import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import LightboxModal from '../components/LightboxModal';
const Gallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    document.title = "Kunstgalleri | tonsbergkunstroom";
    const content = "Utforsk samtids nordisk kunst: kuratert samling av landskap, abstrakt og mixed media.";
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
    title: "Aurora Drømmer",
    category: "Abstrakt",
    year: "2024",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Inspirert av det dansende nordlyset over det arktiske landskapet."
  }, {
    id: 2,
    title: "Fjord Serenitet",
    category: "Landskap",
    year: "2024",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Den fredelige morgentåken som stiger fra gamle norske fjorder."
  }, {
    id: 3,
    title: "Vintersolverv",
    category: "Blandede Medier",
    year: "2023",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "En feiring av den lengste natten og løftet om tilbakevendende lys."
  }, {
    id: 4,
    title: "Midnattsol",
    category: "Olje på Lerret",
    year: "2023",
    image: "https://images.unsplash.com/photo-1536924430914-91f9e2d76e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Den eteriske skjønnheten av sommernetter i den arktiske sirkel."
  }, {
    id: 5,
    title: "Skogens Hvisken",
    category: "Akvarell",
    year: "2024",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "De gamle historiene fortalt av Norges urskogene."
  }, {
    id: 6,
    title: "Kyst Harmoni",
    category: "Akryl",
    year: "2024",
    image: "https://images.unsplash.com/photo-1582561833283-4a93960afab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Hvor den ville kystlinjen møter det endelige nordiske havet."
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
      <section className="relative min-h-[60vh] pt-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
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
                Oppdag
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Nordisk Kunst
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
                Fordyp deg i en kuratert samling av samtidige nordiske mesterverk. 
                Hvert kunstverk fanger essensen av skandinavisk skjønnhet, fra eteriske landskap til dristige abstrakte verk.
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
                  <span className="mr-2">Utforsk Samlingen</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-card text-foreground border-2 border-border rounded-full font-semibold text-lg hover:bg-muted/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="mr-2">Kontakt Kunstner</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </div>

              {/* Gallery Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{artworks.length}</div>
                  <div className="text-sm text-muted-foreground font-medium">Kunstverk</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4</div>
                  <div className="text-sm text-muted-foreground font-medium">Kategorier</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2024</div>
                  <div className="text-sm text-muted-foreground font-medium">Nyeste</div>
                </div>
              </div>
            </div>

            </div>
        </div>

      </section>

      {/* Gallery Grid */}
      <section id="collection" className="relative py-20">
        <div className="container mx-auto px-6">
          {/* Section intro */}
          <div className="text-center mb-16 nordic-fade-up">
            <h2 className="nordic-heading text-3xl font-bold mb-4">Utvalgt Samling</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Hvert kunstverk er et vindu inn i den nordiske sjelen, laget med lidenskap og presisjon.</p>
          </div>

          <div className="flex flex-col items-center justify-center py-20">
            <div className="nordic-card max-w-2xl w-full text-center p-12">
              <div className="mb-6">
                <svg className="w-24 h-24 mx-auto text-muted-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="nordic-heading text-2xl font-bold mb-4">Ingen Kunstverk Tilgjengelig</h3>
              <p className="nordic-body text-muted-foreground text-lg mb-8">
                Det er ingen kunstverk tilgjengelig for øyeblikket. Vennligst sjekk tilbake snart for nye utstillinger.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                Kontakt Oss
              </Link>
            </div>
          </div>

          {/* Collection stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 nordic-fade-up">
            <div className="text-center nordic-glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">{artworks.length}</div>
              <div className="text-sm text-muted-foreground">Kunstverk</div>
            </div>
            <div className="text-center nordic-glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Kategorier</div>
            </div>
            <div className="text-center nordic-glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Nyeste Arbeid</div>
            </div>
            <div className="text-center nordic-glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Inspirasjon</div>
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