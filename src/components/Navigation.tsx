import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    { name: 'Food', page: 'food' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="text-xl font-bold text-primary">
            NS
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  currentPage === item.page
                    ? 'text-secondary'
                    : 'text-primary/70 hover:text-primary'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-primary/70 hover:text-primary transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm border-b border-primary/10">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    currentPage === item.page
                      ? 'text-secondary bg-primary/5'
                      : 'text-primary/70 hover:text-primary hover:bg-primary/5'
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