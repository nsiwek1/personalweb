import React from 'react';
import { ArrowUpRight, Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Microsoft",
      location: "Redmond, WA",
      period: "May 2025 - August 2025",
      description: [
        "Contributed to the Managed Instance team for App Services in Azure",
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
          "Researched available GenAI models and analyzed them on research papers-based benchmarks; presented findings to the bank’s board, which led to change of the used LLM model and increased usage of AI agents",
        ],
        technologies: ["Python", "Flask"]
      }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-4 mb-12">
          <h1 className="text-5xl font-bold text-secondary">
            Experience
          </h1>
          <div className="h-[1px] flex-1 bg-primary/10"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group rounded-[8px] p-8 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-semibold text-primary group-hover:text-secondary transition-all duration-300">{exp.title}</h3>
                    <div className="flex items-center space-x-6 mt-2">
                      <div className="flex items-center text-primary/70">
                        <Briefcase size={20} className="mr-2" />
                        <span className="text-lg">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-primary/70">
                        <MapPin size={20} className="mr-2" />
                        <span className="text-lg">{exp.location}</span>
                      </div>
                      <div className="flex items-center text-primary/70">
                        <Calendar size={20} className="mr-2" />
                        <span className="text-lg">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="list-none space-y-2 text-primary/70">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2">•</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 pt-2">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 text-base bg-primary/5 rounded-[8px] text-primary/70 group-hover:bg-primary/10 transition-all duration-300"
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