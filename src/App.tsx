import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import School from './components/School';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-primary overflow-hidden relative">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/school" element={<School />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
