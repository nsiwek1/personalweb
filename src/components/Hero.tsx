import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-16 sm:pt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-8 sm:space-y-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-primary">Hi, I'm </span>
                <span className="text-secondary">Natalia</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-primary/70 max-w-4xl leading-relaxed">
                Welcome to my portfolio! I'm a rising junior at Harvard and I'm originally from Poland. I study Computer 
                Science and Statistics. I'm passionate about impactful, customer-centric and innovative technology that 
                helps people live better lives. Super excited to connect and don't hesistate to contact me if you want to chat!
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 sm:gap-6 mt-10 sm:mt-12">
              <a
                href="https://github.com/nsiwek1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              >
                <Github size={28} className="text-primary/70 hover:text-primary sm:w-8 sm:h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/natalia-siwek-640957235/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              >
                <Linkedin size={28} className="text-primary/70 hover:text-primary sm:w-8 sm:h-8" />
              </a>
              <a
                href="mailto:nataliasiwek@college.harvard.edu"
                className="p-2.5 sm:p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              >
                <Mail size={28} className="text-primary/70 hover:text-primary sm:w-8 sm:h-8" />
              </a>
            </div>
          </div>

          {/* Right side - Profile picture */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-72 sm:w-80 md:w-[28rem] aspect-[3/4] rounded-lg overflow-hidden border-4 border-primary/20">
                <img
                  src="/images/picture_main_vertical.jpeg"
                  alt="Natalia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
