import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';

interface TimelineItem {
  title: string;
  org: string;
  location: string;
}

interface TimelinePeriod {
  year: string;
  items: TimelineItem[];
}

const Hero: React.FC = () => {
  const recent: TimelinePeriod[] = [
    {
      year: "2026",
      items: [
        { title: "Incoming Quant Trading Intern", org: "Jane Street", location: "New York, NY" },
        { title: "Undergraduate Researcher", org: "Goldenberg Lab", location: "Cambridge, MA" },
      ],
    },
    {
      year: "2025",
      items: [
        { title: "Software Engineering Intern", org: "Microsoft", location: "Redmond, WA" },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-white py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-20 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-primary mb-4 leading-tight">
              Natalia Siwek
            </h1>
            <p className="text-xl text-muted font-light mb-8 tracking-wide">
              Computer Science & Math @ Harvard
            </p>

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

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/nsiwek1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted hover:text-primary transition-colors"
              >
                <Github size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/natalia-siwek-640957235/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-primary transition-colors"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <img
              src="/images/graphic.webp"
              alt="Outline portrait of Natalia Siwek"
              className="w-40 h-auto object-contain"
            />
          </div>
        </div>

        <div className="space-y-10">
          {recent.map((period, idx) => {
            const isLast = idx === recent.length - 1;
            return (
              <div key={idx} className="flex items-start gap-12">
                <div className="w-20 flex-shrink-0 pt-0.5">
                  <span className="text-sm font-light text-muted tracking-wider">{period.year}</span>
                </div>
                <div className="relative flex-shrink-0 pt-2 self-stretch">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {!isLast && (
                    <div
                      className="absolute left-1/2 top-4 -translate-x-1/2 w-px bg-border"
                      style={{ bottom: '-2.5rem' }}
                    />
                  )}
                </div>
                <div className="flex-1 -mt-1 space-y-6">
                  {period.items.map((item, i) => (
                    <div key={i} className="group">
                      <h2 className="text-lg font-normal text-primary mb-1.5 group-hover:text-accent transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-base text-secondary font-light mb-1">{item.org}</p>
                      <p className="text-sm text-muted font-light">{item.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <Link
          to="/experience"
          className="mt-12 inline-flex items-center gap-2 text-sm font-light text-muted hover:text-accent transition-colors"
        >
          <span>See full experience</span>
          <ArrowRight size={14} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
