import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Chest Disease Classification using CNNs   ",
      description: "Developed models using Res-Net-18 and Dense-Net-121 to recognize the status of Chest X-rays reaching up to 90% accuracy on one-domain trained models, and 70% on multi-sourced case",
      technologies: ["Python", "PyTorch", "TensorFlow"],
      github: "https://github.com/nsiwek1/neuro140project" ,
      live: ""
    },
    {
      title: "Privacy-Loss Parameter Optimization ",
      description: "Modeled theoretically the utility-privacy tradeoff  for populations with individuals difference privacy preferences to find the optimal privacy-loss parameter optimizing social utility; developed simulations in Python to find the value for specific populations. Developed Flask-based app to enable individuals to find their preferred parameter value and researchers to find an optimum value for a given population ",
      technologies: ["Flask", "Python", "LaTeX", "Scipy"],
      github: "https://github.com/vihaann06/cs208-optimiser",
      live: ""
    },
    {
      title: "Personal Website ",
        description: "Developed a personal website to showcase my work and experience (you're here)",
        technologies: ["React.js", "Tailwind CSS"],
      github: "https://github.com/nsiwek1/personalweb",
      live: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: "Portal for HPAIR participants ",
        description: "Developed features for portal for participants of HPAIR conference. In particular developed registration flow, bulk assingments for events, UX, documentation and contact card generation ",
        technologies: ["React.js", "Firebase"],
        github: "",
        live: "https://my.hpair.org"
      },
    {
      title: "OneDegree Semester Project",
      description: "Collaborated in the team of 7 to develop a chatbot assisting OneDegree's employees in more efficient search for appropriate resources for underprivileged individuals in LA area; Implemented the tool using function calling (API) and RAGs through ChatGPT's API and React.js",
      technologies: ["Python", "OpenAI API", "React.js", "Function Calling"],
      github: "",
      live: ""
    },
    {
        title: "Predicitions for S&P 500",
        description: "With 3 classmates developed stock market predictors based on media headlines, using Nature Language Processing, pre-processing techniques (one-hot encoding, SMOTE) and multiple models (Random Forrest, AdaBoost)",
        technologies: ["NLP", "Python", "Data Science", "Web scraping"],
        github: "https://github.com/nsiwek1/s-p500predictor",
        live: ""
      },
    {
        title: "Matanataki Summer Project",
        description: "Created a web app for a Fiji-based investment company to illustrate financial modeling and social and environmental consequences of investments. Worked on backend to calculate predicted impacts on individual companies and fund manager level, rendered data across various datasets using React.js and Supabase",
        technologies: ["Supabase", "React.js"],
        github: "",
        live: ""
    }, 
    {
        title: "CS51 Final Project",
        description: "Developed an interpreter for an OCaml-like language supporting multiple types of evaluation",
        technologies: ["OCaml"],
        github: "",
        live: ""
    },
    {
        title: "Stock Market Data Scraper",
        description: "Developed a webscraping program to gather information about companies present at Warsaw Stock Exchange",
        technologies: ["Python", "Selenium", "Beatifulsoup4"],
        github: "https://github.com/nsiwek1/exchangemarket_scrapper",
        live: ""
    },


  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
            My Projects
          </h1>
          <div className="h-[1px] flex-1 bg-primary/10"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group rounded-lg p-4 sm:p-6 md:p-8 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary group-hover:text-secondary transition-all duration-300">{project.title}</h3>
                  <div className="flex gap-2 sm:gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                      >
                        <Github size={18} className="text-primary/70 group-hover:text-primary sm:w-5 sm:h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                      >
                        <ExternalLink size={18} className="text-primary/70 group-hover:text-primary sm:w-5 sm:h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-primary/70">{project.description}</p>

                <div className="flex flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-primary/5 rounded-lg text-primary/70 group-hover:bg-primary/10 transition-all duration-300"
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

export default Projects; 
