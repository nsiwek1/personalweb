import React from 'react';

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPage }) => {
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-end w-full space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className={`text-primary/70 hover:text-secondary transition-all duration-300 ${currentPage === 'home' ? 'text-secondary' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('experience')}
              className={`text-primary/70 hover:text-secondary transition-all duration-300 ${currentPage === 'experience' ? 'text-secondary' : ''}`}
            >
              Experience
            </button>
            <button 
              onClick={() => handleNavigation('projects')}
              className={`text-primary/70 hover:text-secondary transition-all duration-300 ${currentPage === 'projects' ? 'text-secondary' : ''}`}
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavigation('school')}
              className={`text-primary/70 hover:text-secondary transition-all duration-300 ${currentPage === 'school' ? 'text-secondary' : ''}`}
            >
              School
            </button>
            <button 
              onClick={() => handleNavigation('food')}
              className={`text-primary/70 hover:text-secondary transition-all duration-300 ${currentPage === 'food' ? 'text-secondary' : ''}`}
            >
              Food
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 