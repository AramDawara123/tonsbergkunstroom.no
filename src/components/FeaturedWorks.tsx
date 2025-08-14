
import React from 'react';

const FeaturedWorks = () => {
  const artworks = [
    {
      id: 1,
      title: "Aurora Dreams",
      category: "Abstract",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "3,200 NOK"
    },
    {
      id: 2,
      title: "Fjord Serenity",
      category: "Landscape",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "2,800 NOK"
    },
    {
      id: 3,
      title: "Winter Solstice",
      category: "Mixed Media",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "4,100 NOK"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="nordic-heading mb-4">Featured Artwork</h2>
          <p className="nordic-subtitle max-w-2xl mx-auto">
            Explore our latest collection of contemporary pieces inspired by the raw beauty 
            and tranquil essence of Nordic landscapes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="nordic-card group cursor-pointer nordic-hover-lift"
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
                  <span className="text-primary font-medium">{artwork.price}</span>
                </div>
                <p className="nordic-body mb-4">{artwork.category}</p>
                <button className="nordic-button-ghost text-sm">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="nordic-button-primary">
            Visit Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
