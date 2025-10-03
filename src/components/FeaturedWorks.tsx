import React from 'react';
import { Eye, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const FeaturedWorks = () => {
  const artworks = [{
    id: 1,
    title: "Aurora Drømmer",
    category: "Abstrakt",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "3,200 NOK",
    year: "2024",
    description: "Inspirert av den eteriske dansen til nordlyset"
  }, {
    id: 2,
    title: "Fjord Serenitet",
    category: "Landskap",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "2,800 NOK",
    year: "2024",
    description: "Fanger den fredelige morgentåken over eldgamle fjorder"
  }, {
    id: 3,
    title: "Vintersolverv",
    category: "Blandede Medier",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "4,100 NOK",
    year: "2023",
    description: "Feirer den lengste natten og tilbakevendende lys"
  }];
  return <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Oppdag Våre Nyeste</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Utforsk vår nyeste samling av samtidige verk inspirert av den rå skjønnheten 
            og rolige essensen av nordiske landskap, hver forteller en unik historie om vår tilknytning til naturen.
          </p>
        </div>

        {/* No Artwork Available */}
        <div className="flex flex-col items-center justify-center py-12 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 max-w-2xl w-full text-center shadow-lg">
            <div className="mb-6">
              <svg className="w-24 h-24 mx-auto text-muted-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Ingen Kunstverk Tilgjengelig</h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 inline-block shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Utforsk Vår Komplette Samling
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Oppdag over 100 unike kunstverk som spenner over ulike medier og nordiske temaer.
            </p>
            <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-nordic-forest text-white rounded-xl font-medium hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">
              Besøk Fullt Galleri
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturedWorks;