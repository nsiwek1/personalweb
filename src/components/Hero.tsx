import React from 'react';
import { Github, Linkedin, Mail, Coffee } from 'lucide-react';
import HarryPotterQuote from './HarryPotterQuote';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16 sm:pt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-primary">Hi, I'm </span>
                <span className="text-secondary">Natalia</span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 text-primary/70">
                <Coffee size={20} className="animate-bounce sm:w-6 sm:h-6" />
                <span className="text-base sm:text-lg">Coffee & Code enthusiast</span>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-primary/70 max-w-3xl leading-relaxed">
               I'm a rising junior at Harvard where I study Computer 
                Science and Statistics. I'm passionate about impactful, customer-centric and innovative technology that 
                helps people live better lives. Super excited to connect and don't hesistate to contact me if you want to chat!
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              <a
                href="https://github.com/nsiwek1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              >
                <Github size={20} className="text-primary/70 hover:text-primary sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/natalia-siwek-640957235/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              >
                <Linkedin size={20} className="text-primary/70 hover:text-primary sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:nataliasiwek@college.harvard.edu"
                className="p-2.5 sm:p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              >
                <Mail size={20} className="text-primary/70 hover:text-primary sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Right side - Profile picture */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-56 sm:w-64 md:w-80 aspect-[3/4] rounded-lg overflow-hidden border-4 border-primary/20">
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
        <div className="mt-4 sm:mt-6 text-center">
          <HarryPotterQuote />
        </div>
      </div>
    </section>
  );
};

export default Hero; 
