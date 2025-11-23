import React from 'react';
import { MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Incoming Quant Trading Intern",
      company: "Jane Street",
      location: "New York, New York",
      period: "Summer 2026",
      description: [ 
      ],
      technologies: [],
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGDwkF0pxTSjg/company-logo_200_200/company-logo_200_200/0/1700507376786/jane_street_global_logo?e=2147483647&v=beta&t=Zueimo_ftClwHS3SBZnhNcTcdREIFCdBucqUSWDtG6s"
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    },
    {
      title: "Head Teaching Fellow (CS50) and Patel Fellow (CS120)",
      company: "School of Engineering and Applied Sciences, Harvard",
      location: "Cambridge, Massachusetts",
      period: "2024 — Present",
      description: [
        "Manages work of 20+ TFs, for the largest CS class at Harvard (300+ students), teaches a section in C, Python, JS, HTML",
        "Serves as a Patel Fellow for Intro to Algorithms class, provides one on one tutoring for struggling students",
      ],
      technologies: ["Python", "Flask", "SQL", "C", "HTML", "JS"],
      logo: "https://www.seas.harvard.edu/sites/default/files/images/About%20SEAS/image_large.png"
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg"
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Logo_VeloBank.png"
    }
  ];

  return (
    <div id="experience" className="min-h-screen bg-white py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header - elegant and minimal */}
        <div className="mb-24 border-b border-border pb-12">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-primary mb-4">
            Experience
          </h1>
          <p className="text-xl text-muted font-light tracking-wide">
            Professional work and research
          </p>
        </div>
        
        {/* Elegant list */}
        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group flex gap-8"
            >
              {/* Logo */}
              {exp.logo && (
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              )}
              
              <div className="flex-1 space-y-6">
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-normal text-primary mb-2 group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-secondary font-light mb-3">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted font-light">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} strokeWidth={1.5} />
                      <span>{exp.location}</span>
                    </div>
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-4 text-secondary font-light leading-relaxed">
                      <span className="text-muted mt-2">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies - refined */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-sm text-muted font-light"
                    >
                      {tech}{i < exp.technologies.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 