import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'School', path: '/school' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setIsOpen(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? 'bg-accent/10 text-accent'
        : 'text-secondary hover:text-primary hover:bg-gray-50'
    }`;

  const mobileLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
      isActive ? 'bg-accent/10 text-accent' : 'text-secondary hover:bg-gray-50'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            onClick={close}
            aria-label="Home"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            NS
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} end className={linkClasses}>
                {item.name}
              </NavLink>
            ))}
          </div>

          <a
            href="mailto:nataliasiwek@college.harvard.edu"
            className="hidden md:inline-flex px-6 py-2.5 bg-accent text-white rounded-full text-sm font-medium hover:bg-accentHover transition-all duration-300"
          >
            Contact
          </a>

          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 bg-white border-t border-border">
            <div className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end
                  onClick={close}
                  className={mobileLinkClasses}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
