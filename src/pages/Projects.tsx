import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: " Follow My Instruction and Spill the Beans: Scalable Data Extraction from Retrieval-Augmented Generation Systems. Paper Reproduction and Divergences",
      description: "Reproduced the title paper and provided 4 extensions: multilingual RAGs and prompts, summarization and prompt level defenses and RAG types.",
      technologies: ["Python", "PyTorch", "Hugging Face", "OpenAI", "RAG", "Prompt Engineering"],
      github: "https://github.com/brightlikethelight/2881-mini-project" ,
      live: ""
    },
    {
      title: "Tinder for Food Options",
      description: "Built a Swift iOS app that enables group dining decisions through a Tinder-like swiping interface. Users can create groups, swipe on restaurant options, and find consensus on dining choices that satisfy everyone in the group.",
      technologies: ["Swift", "Firebase", "Google Places API"],
      github: "https://github.com/nsiwek1/food-app" ,
      live: ""
    },
    {
      title: "Chest Disease Classification using CNNs",
      description: "Developed models using Res-Net-18 and Dense-Net-121 to recognize the status of Chest X-rays reaching up to 90% accuracy on one-domain trained models, and 70% on multi-sourced case",
      technologies: ["Python", "PyTorch", "TensorFlow"],
      github: "https://github.com/nsiwek1/neuro140project" ,
      live: ""
    },
    {
      title: "Privacy-Loss Parameter Optimization",
      description: "Modeled theoretically the utility-privacy tradeoff for populations with individuals difference privacy preferences to find the optimal privacy-loss parameter optimizing social utility; developed simulations in Python to find the value for specific populations. Developed Flask-based app to enable individuals to find their preferred parameter value and researchers to find an optimum value for a given population",
      technologies: ["Flask", "Python", "LaTeX", "Scipy"],
      github: "https://github.com/vihaann06/cs208-optimiser",
      live: ""
    },
    {
      title: "Personal Website",
      description: "Developed a personal website to showcase my work and experience (you're here)",
      technologies: ["React.js", "Tailwind CSS"],
      github: "https://github.com/nsiwek1/personalweb",
      live: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      title: "Portal for HPAIR participants",
      description: "Developed features for portal for participants of HPAIR conference. In particular developed registration flow, bulk assingments for events, UX, documentation and contact card generation",
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
    <div className="min-h-screen bg-white py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header - elegant and minimal */}
        <div className="mb-24 border-b border-border pb-12">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-primary mb-4">
            Projects
          </h1>
          <p className="text-xl text-muted font-light tracking-wide">
            Selected work and experiments
          </p>
        </div>
        
        {/* Elegant list */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="space-y-4">
                {/* Header with link */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-normal text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  {(project.github || project.live) && (
                    <a
                      href={project.github || project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors flex-shrink-0 mt-1"
                    >
                      <ExternalLink size={16} strokeWidth={1.5} />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-secondary font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies - refined */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-sm text-muted font-light"
                    >
                      {tech}{i < project.technologies.length - 1 ? ',' : ''}
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
