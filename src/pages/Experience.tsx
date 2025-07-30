import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Microsoft",
      location: "Redmond, WA",
      period: "May 2025 - August 2025",
      description: [
        "Developed, designed and tested Virtual Hard Disk (VHD) caching for Azure App Services, which reduced the time to start new instances by 80%",
        "Implemented pipelines to use preconfigured VHDs for script installations", 
      ],
      technologies: ["C#", "Kusto", "Cloud", "Git", "Azure"]
    },
    {
      title: "Head Teaching Fellow (CS50) and Patel Fellow (CS120)",
      company: "School of Engineering and Applied Sciences (Harvard)",
      location: "Cambridge, MA",
      period: "April 2024 - present",
      description: [
        "Manages work of 20+ TFs, for the largest CS class at Harvard (300+ students), teaches a section in C, Python, JS, HTML",
        "Serves as a Patel Fellow for Intro to Algorithms class, provides one on one tutoring for struggling students",
      ],
      technologies: ["Python", "Flask", "SQL", "C", "HTML", "JS"]
    }, 
    {
      title: "Research Assistant",
      company: "MIT Media Lab",
      location: "Cambridge, MA",
      period: "October 2024 - May 2025",
      description: [
        "Collected, preprocessed and analyzed data from smell sensors (using hardware through Arduino) with changing atmospheric conditions to develop a ML model to recognize and categorize scents",
        "Designed and trained neural network models to map sensor signal patterns to specific odor classes, improving classification accuracy",
      ],
      technologies: ["Arduino", "Python", "PyTorch", "Machine Learning"]
    },
    {
      title: "AI Intern",
      company: "Velobank",
      location: "Warsaw, Poland",
      period: "June 2024 - July 2024",
      description: [
        "Created a monitoring system for newly introduced GenAI-based tools using Machine Learning (RAGs) and Sklearn libraries to allow analysis of over 40 parameters",
        "Researched available GenAI models and analyzed them on research papers-based benchmarks; presented findings to the bank's board, which led to change of the used LLM model and increased usage of AI agents",
      ],
      technologies: ["Python", "Flask"]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary">
            Experience
          </h1>
          <div className="h-[1px] flex-1 bg-primary/10"></div>
        </div>
        
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group rounded-lg p-4 sm:p-6 md:p-8 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary group-hover:text-secondary transition-all duration-300">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-2">
                      <div className="flex items-center text-primary/70">
                        <Briefcase size={16} className="mr-2 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base md:text-lg">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-primary/70">
                        <MapPin size={16} className="mr-2 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base md:text-lg">{exp.location}</span>
                      </div>
                      <div className="flex items-center text-primary/70">
                        <Calendar size={16} className="mr-2 sm:w-5 sm:h-5" />
                        <span className="text-sm sm:text-base md:text-lg">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="list-none space-y-1.5 sm:space-y-2 text-primary/70">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2">•</span>
                      <span className="text-sm sm:text-base md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 sm:px-4 sm:py-2 text-base sm:text-lg bg-primary/5 rounded-lg text-primary/70 group-hover:bg-primary/10 transition-all duration-300"
                    >
                      {tech}
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