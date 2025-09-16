import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Palette } from 'lucide-react';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Hjem',
    path: '/'
  }, {
    name: 'Galleri',
    path: '/gallery'
  }, {
    name: 'Kurs',
    path: '/services'
  }, {
    name: 'Kontakt',
    path: '/contact'
  }];
  const isActive = (path: string) => location.pathname === path;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 text-2xl font-display font-bold text-foreground hover:text-primary transition-colors group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-nordic-forest flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              <Palette className="w-5 h-5" />
            </div>
            <span className="hidden sm:block">tonsbergkunstrom</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${isActive(item.path) ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}>
                {item.name}
                {isActive(item.path) && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />}
              </Link>)}
          </div>

          {/* Mobile menu button - Now visible on tablet and mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-3 rounded-xl bg-white/10 backdrop-blur-sm text-foreground hover:text-primary transition-colors">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden mt-6 pb-6">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
              <div className="flex flex-col space-y-4">
                {navItems.map(item => <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-xl font-medium transition-colors ${isActive(item.path) ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}>
                    {item.name}
                  </Link>)}
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;