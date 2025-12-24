import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import LightboxModal from '../components/LightboxModal';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const Gallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { data: photos, isLoading } = useQuery({
    queryKey: ['gallery-photos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('photos')
        .select('*')
        .eq('show_in_gallery', true)
        .order('display_order', { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  // Transform photos for lightbox
  const artworks = photos?.map(photo => ({
    id: photo.id,
    title: photo.title,
    category: 'Kunstrom',
    year: new Date(photo.created_at).getFullYear().toString(),
    image: photo.image_url,
    description: photo.description || '',
  })) || [];

  useEffect(() => {
    document.title = "Kunstgalleri | Kunstrom Tønsberg";
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
  }, []);

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

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
        <div className="absolute top-1/4 -left-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-64 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse animation-delay-2000" />
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-24 flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/30 rounded-full animate-pulse" />
            <div className="absolute top-40 right-32 w-24 h-24 border-2 border-accent/30 rounded-full animate-pulse animation-delay-1000" />
            <div className="absolute bottom-40 left-1/3 w-40 h-40 border-2 border-primary/20 rounded-full animate-pulse animation-delay-2000" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 mt-16">
              <h1 className="text-6xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
                Oppdag
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Nordisk Kunst
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
                Fordyp deg i en kuratert samling av samtidige nordiske mesterverk. 
                Hvert kunstverk fanger essensen av skandinavisk skjønnhet.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <button 
                  onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="mr-2">Utforsk Samlingen</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-card text-foreground border-2 border-border rounded-full font-semibold text-lg hover:bg-muted/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Kontakt Kunstner
                </Link>
              </div>

              {/* Gallery Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{artworks.length}</div>
                  <div className="text-sm text-muted-foreground font-medium">Kunstverk</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">∞</div>
                  <div className="text-sm text-muted-foreground font-medium">Inspirasjon</div>
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
          <div className="text-center mb-16 nordic-fade-up">
            <h2 className="nordic-heading text-3xl font-bold mb-4">Utvalgt Samling</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Hvert kunstverk er et vindu inn i den nordiske sjelen, laget med lidenskap og presisjon.</p>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          ) : artworks.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artworks.map((artwork, index) => (
                <div 
                  key={artwork.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer nordic-hover-lift"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{artwork.title}</h3>
                      {artwork.description && (
                        <p className="text-white/80 text-sm line-clamp-2">{artwork.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
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
          )}
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
