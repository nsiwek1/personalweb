import React, { FC, useState } from 'react';
import { Menu, X } from 'lucide-react';
import * as ReactRouter from 'react-router-dom';

interface NavItem {
  name: string;
  path: string;
}

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = ReactRouter.useLocation();

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Food', path: '/food' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-end h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ReactRouter.Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-secondary'
                    : 'text-primary/70 hover:text-primary'
                }`}
              >
                {item.name}
              </ReactRouter.Link>
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
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <ReactRouter.Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-secondary'
                      : 'text-primary/70 hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </ReactRouter.Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 