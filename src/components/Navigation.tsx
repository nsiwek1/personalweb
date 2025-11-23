import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Experience', page: 'experience' },
    { name: 'Projects', page: 'projects' },
    { name: 'School', page: 'school' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - more prominent */}
          <button
            onClick={() => handleNavigation('home')}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            NS
          </button>

          {/* Desktop Navigation - cleaner spacing */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentPage === item.page
                    ? 'bg-accent/10 text-accent'
                    : 'text-secondary hover:text-primary hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="mailto:nataliasiwek@college.harvard.edu"
            className="hidden md:inline-flex px-6 py-2.5 bg-accent text-white rounded-full text-sm font-medium hover:bg-accentHover transition-all duration-300"
          >
            Contact
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white border-t border-border">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    currentPage === item.page
                      ? 'bg-accent/10 text-accent'
                      : 'text-secondary hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 