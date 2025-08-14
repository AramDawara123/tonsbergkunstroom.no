
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Gallery = () => {
  const artworks = [
    {
      id: 1,
      title: "Aurora Dreams",
      category: "Abstract",
      year: "2024",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Inspired by the dancing northern lights over the Arctic landscape."
    },
    {
      id: 2,
      title: "Fjord Serenity",
      category: "Landscape",
      year: "2024",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "The peaceful morning mist rising from ancient Norwegian fjords."
    },
    {
      id: 3,
      title: "Winter Solstice",
      category: "Mixed Media",
      year: "2023",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Celebrating the longest night and the promise of returning light."
    },
    {
      id: 4,
      title: "Midnight Sun",
      category: "Oil on Canvas",
      year: "2023",
      image: "https://images.unsplash.com/photo-1536924430914-91f9e2d76e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "The ethereal beauty of summer nights in the Arctic Circle."
    },
    {
      id: 5,
      title: "Forest Whispers",
      category: "Watercolor",
      year: "2024",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "The ancient stories told by Norway's primeval forests."
    },
    {
      id: 6,
      title: "Coastal Harmony",
      category: "Acrylic",
      year: "2024",
      image: "https://images.unsplash.com/photo-1582561833283-4a93960afab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Where the rugged coastline meets the endless Nordic seas."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-nordic-gradient">
        <div className="container mx-auto px-6 text-center">
          <h1 className="nordic-heading mb-4">Art Gallery</h1>
          <p className="nordic-subtitle max-w-2xl mx-auto">
            Discover our complete collection of contemporary Nordic art, 
            each piece telling a story of landscape, light, and Nordic soul.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="nordic-card group cursor-pointer nordic-hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {artwork.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{artwork.year}</span>
                  </div>
                  <p className="text-primary font-medium mb-2">{artwork.category}</p>
                  <p className="nordic-body text-sm">{artwork.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
