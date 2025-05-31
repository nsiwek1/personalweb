import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Personal from './components/Personal';
import School from './components/School';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Contact />
          </>
        );
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'personal':
        return <Personal />;
      case 'school':
        return <School />;
      default:
        return (
          <>
            <Hero />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-primary overflow-hidden relative">
      <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;