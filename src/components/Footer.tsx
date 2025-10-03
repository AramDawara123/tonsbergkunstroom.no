import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-nordic-charcoal text-nordic-birch py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Studio Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">Kunstrom Tønsberg</h3>
            <p className="text-nordic-ash mb-6 max-w-md">Skaper og deler skjønnheten av Tønsberg kunst i hjertet av Norge. Bli med oss på en reise med kunstnerisk oppdagelse og kreativt uttrykk.</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/kunstrom.t?igsh=MWRpeTZzbjdwcTc1Zg==" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">
                <Instagram className="w-6 h-6 text-nordic-ash hover:text-nordic-birch cursor-pointer transition-colors" />
              </a>
              <a href="https://www.facebook.com/share/1CLqWaq93U/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                <Facebook className="w-6 h-6 text-nordic-ash hover:text-nordic-birch cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-nordic-sage" />
                <span className="text-nordic-ash">info@kunstromtonsberg.no</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-nordic-sage" />
                <span className="text-nordic-ash">+47 92 52 48 23</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-nordic-sage" />
                <span className="text-nordic-ash">Peder Lagmanns gate, Tønsberg</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hurtiglenker</h4>
            <div className="space-y-2">
              <a href="/gallery" className="block text-nordic-ash hover:text-nordic-birch transition-colors">
                Galleri
              </a>
              <a href="/services" className="block text-nordic-ash hover:text-nordic-birch transition-colors">
                Kunstkurs
              </a>
              <a href="/services" className="block text-nordic-ash hover:text-nordic-birch transition-colors">
                Bestillinger
              </a>
              <a href="/contact" className="block text-nordic-ash hover:text-nordic-birch transition-colors">
                Besøk Studio
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-nordic-stone mt-12 pt-8 text-center">
          <p className="text-nordic-ash">© 2025 Kunstrom Tønsberg. Alle rettigheter reservert. Laget med kjærlighet i Norge.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;