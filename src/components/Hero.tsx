import React from 'react';
import { Github, Linkedin, Mail, Coffee } from 'lucide-react';
import HarryPotterQuote from './HarryPotterQuote';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-primary">Hi, I'm </span>
                <span className="text-secondary">Natalia</span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-primary/70">
                <Coffee size={24} className="animate-bounce" />
                <span className="text-lg">Coffee & Code enthusiast</span>
              </div>
              <p className="text-xl md:text-2xl text-primary/70 max-w-3xl leading-relaxed">
                Welcome to my portfolio! I'm a rising junior at Harvard and I'm originally from Poland. I study Computer 
                Science and Statistics. I'm passionate about impactful, customer-centric and innovative technology that 
                helps people live better lives. Super excited to connect and don't hesistate to contact me if you want to chat!
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <a
                href="https://github.com/nsiwek1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              >
                <Github size={24} className="text-primary/70 hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/natalia-siwek-640957235/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              >
                <Linkedin size={24} className="text-primary/70 hover:text-primary" />
              </a>
              <a
                href="mailto:nataliasiwek@college.harvard.edu"
                className="p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              >
                <Mail size={24} className="text-primary/70 hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Right side - Profile picture */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Set a fixed width and aspect ratio to avoid skewing */}
              <div className="w-64 aspect-[3/4] md:w-80 rounded-[8px] overflow-hidden border-4 border-primary/20">
                <img
                  src="/images/picture_main_vertical.jpeg"
                  alt="Natalia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Harry Potter Quote Section */}
        <div className="mt-2 text-center">
          <HarryPotterQuote />
        </div>
      </div>
    </section>
  );
};

export default Hero; 