import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const timeline = [
    {
      year: "2026",
      items: [
        { title: "Incoming Quant Trading Intern Intern", org: "Jane Street", location: "New York, NY" }
      ]
    },
    {
      year: "2025",
      items: [
        { title: "Software Engineering Intern", org: "Microsoft", location: "Redmond, WA" }
      ]
    },
    {
      year: "2024",
      items: [
        { title: "Research Assistant", org: "MIT Media Lab", location: "Cambridge, MA" },
        { title: "AI Intern", org: "Velobank", location: "Warsaw, Poland" }
      ]
    },
  ];

  return (
    <section className="min-h-screen bg-white py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header - Elegant and refined */}
        <div className="mb-24 border-b border-border pb-12">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-primary mb-4 leading-tight">
            Natalia Siwek
          </h1>
          <p className="text-xl text-muted font-light mb-8 tracking-wide">
            Computer Science & Math
          </p>
          
          {/* Contact - Elegant inline layout */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 text-sm text-secondary mb-8">
            <a 
              href="mailto:nataliasiwek@college.harvard.edu"
              className="flex items-center gap-2 hover:text-primary transition-colors group"
            >
              <Mail size={16} className="text-muted group-hover:text-accent transition-colors" />
              <span className="font-light">nataliasiwek@college.harvard.edu</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-muted" />
              <span className="font-light">Cambridge, Massachusetts</span>
            </div>
          </div>

          {/* Social - Refined */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/nsiwek1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
            >
              <Github size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/natalia-siwek-640957235/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Timeline - Elegant and spacious */}
        <div className="space-y-16">
          {timeline.map((period, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-start gap-12">
                {/* Year - Elegant typography */}
                <div className="w-20 flex-shrink-0 pt-0.5">
                  <span className="text-sm font-light text-muted tracking-wider">{period.year}</span>
                </div>
                
                {/* Timeline dot and line */}
                <div className="relative flex-shrink-0 pt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  {idx !== timeline.length - 1 && (
                    <div className="absolute left-1/2 top-4 w-px bg-border -translate-x-1/2" style={{ height: '80px' }}></div>
                  )}
                </div>

                {/* Content - Refined spacing */}
                <div className="flex-1 space-y-8 -mt-1">
                  {period.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group">
                      <h3 className="text-lg font-normal text-primary mb-1.5 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-base text-secondary font-light mb-1">{item.org}</p>
                      <p className="text-sm text-muted font-light">{item.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 
