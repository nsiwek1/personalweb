import React from 'react';
import { MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  logo: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Incoming Quant Trading Intern",
      company: "Jane Street",
      location: "New York, New York",
      period: "Summer 2026",
      description: [],
      technologies: [],
      logo: "/images/janestreet.jpeg"
    },
    {
      title: "Junior Lab Member",
      company: "Goldenberg Lab",
      location: "Cambridge, Massachusetts",
      period: "January 2026 — Present",
      description: [
        "Operationalized 'hyper-emotional' dialogue behaviors as controllable model attributes for population-level studies of LLM tone",
        "Implemented multiple intervention strategies including system-prompt conditioning, activation engineering, and LoRA fine-tuning",
      ],
      technologies: ["Python", "PyTorch", "LoRA", "LLMs"],
      logo: ""
    },
    {
      title: "Software Engineering Intern",
      company: "Microsoft",
      location: "Redmond, Washington",
      period: "Summer 2025",
      description: [
        "Developed, designed and tested Virtual Hard Disk (VHD) caching for Azure App Services, which reduced the time to start new instances by 80%",
        "Implemented pipelines to use preconfigured VHDs for script installations",
      ],
      technologies: ["C#", "Kusto", "Cloud", "Git", "Azure"],
      logo: "/images/microsoft.svg"
    },
    {
      title: "Head Teaching Fellow (CS 50) and Patel Fellow (CS 1200)",
      company: "School of Engineering and Applied Sciences, Harvard",
      location: "Cambridge, Massachusetts",
      period: "2024 — Present",
      description: [
        "Manages work of 20+ TFs, for the largest CS class at Harvard (300+ students), teaches a section in C, Python, JS, HTML",
        "Serves as a Patel Fellow for Intro to Algorithms class, provides one on one tutoring for struggling students",
      ],
      technologies: ["Python", "Flask", "SQL", "C", "HTML", "JS"],
      logo: "/images/seas-harvard.webp"
    },
    {
      title: "Research Assistant",
      company: "MIT Media Lab",
      location: "Cambridge, Massachusetts",
      period: "2024 — 2025",
      description: [
        "Collected, preprocessed and analyzed data from smell sensors (using hardware through Arduino) with changing atmospheric conditions to develop a ML model to recognize and categorize scents",
        "Designed and trained neural network models to map sensor signal patterns to specific odor classes, improving classification accuracy",
      ],
      technologies: ["Arduino", "Python", "PyTorch", "Machine Learning"],
      logo: "/images/mit.svg"
    },
    {
      title: "AI Intern",
      company: "Velobank",
      location: "Warsaw, Poland",
      period: "Summer 2024",
      description: [
        "Created a monitoring system for newly introduced GenAI-based tools using Machine Learning (RAGs) and Sklearn libraries to allow analysis of over 40 parameters",
        "Researched available GenAI models and analyzed them on research papers-based benchmarks; presented findings to the bank's board, which led to change of the used LLM model and increased usage of AI agents",
      ],
      technologies: ["Python", "Flask"],
      logo: "/images/velobank.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="sr-only">Experience</h1>

        <div className="space-y-16">
          {experiences.map((exp, index) => {
            const isLast = index === experiences.length - 1;
            return (
              <div key={index} className="group flex items-start gap-6 md:gap-10">
                <div className="hidden sm:block w-24 flex-shrink-0 pt-2">
                  <span className="text-sm font-light text-muted tracking-wider">
                    {exp.period}
                  </span>
                </div>

                <div className="relative flex-shrink-0 pt-3 self-stretch">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary relative z-10" />
                  {!isLast && (
                    <div className="absolute left-1/2 top-5 -translate-x-1/2 w-px bg-border"
                         style={{ bottom: '-4rem' }} />
                  )}
                </div>

                <div className="flex-1 flex gap-5 md:gap-6 min-w-0">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                    )}
                  </div>

                  <div className="flex-1 space-y-4 min-w-0">
                    <div>
                      <h2 className="text-xl font-normal text-primary mb-1 group-hover:text-accent transition-colors">
                        {exp.title}
                      </h2>
                      <p className="text-base text-secondary font-light mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted font-light">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={13} strokeWidth={1.5} />
                          <span>{exp.location}</span>
                        </div>
                        <span className="sm:hidden">{exp.period}</span>
                      </div>
                    </div>

                    {exp.description.length > 0 && (
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-3 text-secondary font-light leading-relaxed text-[15px]">
                            <span className="text-muted mt-2 flex-shrink-0">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-light border border-border text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
