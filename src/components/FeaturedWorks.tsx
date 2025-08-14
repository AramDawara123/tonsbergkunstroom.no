
import React from 'react';
import { Eye, Heart, ArrowRight } from 'lucide-react';

const FeaturedWorks = () => {
  const artworks = [
    {
      id: 1,
      title: "Aurora Dreams",
      category: "Abstract",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "3,200 NOK",
      year: "2024",
      description: "Inspired by the ethereal dance of northern lights"
    },
    {
      id: 2,
      title: "Fjord Serenity",
      category: "Landscape",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "2,800 NOK",
      year: "2024",
      description: "Capturing the peaceful morning mist over ancient fjords"
    },
    {
      id: 3,
      title: "Winter Solstice",
      category: "Mixed Media",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "4,100 NOK",
      year: "2023",
      description: "Celebrating the longest night and returning light"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-transparent to-nordic-sage/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-nordic-ice/30 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full nordic-glass text-primary font-medium mb-6">
            <Eye className="w-4 h-4" />
            <span>Featured Collection</span>
          </div>
          
          <h2 className="nordic-heading mb-6">Discover Our Latest</h2>
          <p className="nordic-subtitle max-w-3xl mx-auto leading-relaxed">
            Explore our newest collection of contemporary pieces inspired by the raw beauty 
            and tranquil essence of Nordic landscapes, each telling a unique story of our connection to nature.
          </p>
        </div>

        {/* Artwork Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="nordic-card group cursor-pointer nordic-hover-lift overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <button className="w-10 h-10 rounded-full nordic-glass flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full nordic-glass flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full nordic-glass text-white text-sm font-medium">
                  {artwork.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-1">
                      {artwork.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {artwork.category}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-primary">{artwork.price}</span>
                </div>
                
                <p className="nordic-body mb-6 text-muted-foreground">
                  {artwork.description}
                </p>
                
                <button className="nordic-button-ghost w-full justify-center group/btn">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="nordic-card inline-block p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Explore Our Complete Collection
            </h3>
            <p className="nordic-body mb-6 max-w-md">
              Discover over 100 unique artworks spanning various mediums and Nordic themes.
            </p>
            <button className="nordic-button-primary">
              Visit Full Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
