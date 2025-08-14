import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Eye, Heart, Filter } from 'lucide-react';
const Gallery = () => {
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
  const categories = ["All", "Abstract", "Landscape", "Mixed Media", "Oil on Canvas", "Watercolor", "Acrylic"];
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Modern Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 nordic-gradient" />
        <div className="absolute inset-0 modern-grid opacity-20" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          
          
          <h1 className="nordic-heading mb-6 leading-tight">Art Gallery</h1>
          <p className="nordic-subtitle max-w-3xl mx-auto leading-relaxed">
            Discover our complete collection of contemporary Nordic art, 
            each piece telling a story of landscape, light, and the Nordic soul that connects us all.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-foreground">Filter by Category:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => <button key={category} className="px-4 py-2 rounded-xl bg-white/50 hover:bg-white/80 text-muted-foreground hover:text-foreground transition-all duration-300 border border-white/20 hover:border-white/40">
                  {category}
                </button>)}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {artworks.map((artwork, index) => <div key={artwork.id} className="nordic-card group cursor-pointer nordic-hover-lift overflow-hidden" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="relative aspect-square overflow-hidden">
                  <img src={artwork.image} alt={artwork.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-10 h-10 rounded-full nordic-glass flex items-center justify-center text-white hover:bg-white/20">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-full nordic-glass flex items-center justify-center text-white hover:bg-white/20">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full nordic-glass text-white text-sm font-medium">
                    {artwork.year}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {artwork.title}
                    </h3>
                  </div>
                  
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    {artwork.category}
                  </span>
                  
                  <p className="nordic-body text-muted-foreground">{artwork.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Gallery;