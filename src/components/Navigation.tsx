import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
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
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
            <img 
              src={logo} 
              alt="Kunstrom Tønsberg" 
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain group-hover:scale-105 transition-transform duration-300" 
            />
            <span className="hidden sm:block text-xl md:text-2xl font-display font-bold text-foreground">
              Kunstrom Tønsberg
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`relative px-3 lg:px-6 py-2 lg:py-3 rounded-xl font-medium transition-all duration-300 text-sm lg:text-base ${isActive(item.path) ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}>
                {item.name}
                {isActive(item.path) && <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />}
              </Link>)}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 sm:p-3 rounded-xl bg-white/10 backdrop-blur-sm text-foreground hover:text-primary transition-colors">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden mt-4 sm:mt-6 pb-4 sm:pb-6">
            <div className="bg-white/90 dark:bg-background/90 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20 dark:border-border">
              <div className="flex flex-col space-y-2 sm:space-y-4">
                {navItems.map(item => <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium transition-colors text-sm sm:text-base ${isActive(item.path) ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}>
                    {item.name}
                  </Link>)}
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;