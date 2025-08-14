
import React from 'react';
import { Eye, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedWorks = () => {
  const artworks = [{
    id: 1,
    title: "Aurora Dreams",
    category: "Abstract",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "3,200 NOK",
    year: "2024",
    description: "Inspired by the ethereal dance of northern lights"
  }, {
    id: 2,
    title: "Fjord Serenity",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "2,800 NOK",
    year: "2024",
    description: "Capturing the peaceful morning mist over ancient fjords"
  }, {
    id: 3,
    title: "Winter Solstice",
    category: "Mixed Media",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "4,100 NOK",
    year: "2023",
    description: "Celebrating the longest night and returning light"
  }];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Discover Our Latest</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our newest collection of contemporary pieces inspired by the raw beauty 
            and tranquil essence of Nordic landscapes, each telling a unique story of our connection to nature.
          </p>
        </div>

        {/* Artwork Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artworks.map((artwork, index) => (
            <div key={artwork.id} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                  {artwork.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {artwork.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {artwork.category}
                    </span>
                  </div>
                  <span className="text-xl font-bold text-primary">{artwork.price}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {artwork.description}
                </p>
                
                <Link 
                  to="/gallery"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors w-full justify-center group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 inline-block shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Explore Our Complete Collection
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Discover over 100 unique artworks spanning various mediums and Nordic themes.
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-nordic-forest text-white rounded-xl font-medium hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
            >
              Visit Full Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
