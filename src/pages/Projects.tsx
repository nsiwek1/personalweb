import React, { useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';

const PREVIEW_COUNT = 3;

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
}

interface Category {
  name: string;
  projects: Project[];
}

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (name: string) =>
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));

  const categories: Category[] = [
    {
      name: "AI Safety & Research",
      projects: [
        {
          title: "AI-Induced Psychosis: Study Reproduction and Extensions on Semantic Drift, Long-Term Interactions, and Interventions",
          description: "Reproduced the AI psychosis investigation and provided extensions on semantic drift and possible interventions, including grounding and metacognition.",
          technologies: ["Python", "AI Safety", "API", "Semantics"],
          live: "https://github.com/nsiwek1/ai-psychosis",
          github: "https://boazbk.github.io/mltheoryseminar/student_projects/final_papers_and_posters/papers/final_project_cs2881r_-_Bright_Liu.pdf"
        },
        {
          title: "Evaluating Tradeoffs in Kidney Allocation: A Simulation and Decision-Making Framework",
          description: "Developed a large-scale, reproducible simulation and decision framework to evaluate allocation policies under competing objectives of efficiency, urgency, and fairness, enabling systematic analysis of policy trade-offs in resource-constrained settings",
          technologies: ["Python", "Algorithms", "Simulation"],
          github: "",
          live: ""
        },
        {
          title: "Follow My Instruction and Spill the Beans: Scalable Data Extraction from Retrieval-Augmented Generation Systems. Paper Reproduction and Divergences",
          description: "Reproduced the title paper and provided 4 extensions: multilingual RAGs and prompts, summarization and prompt level defenses and RAG types.",
          technologies: ["Python", "AI Safety", "Hugging Face", "API", "RAG", "Prompt Engineering"],
          github: "https://github.com/brightlikethelight/2881-mini-project",
          live: ""
        },
        {
          title: "Experiment for Economic Implications Lecture for AI Safety (CS2881r)",
          description: "Investigated the impacts of major AI announcements on treasury yields and measured the performance of models on GDPVal. Also evaluated LLMs' ability to estimate task duration and the relation between actual time and messiness.",
          technologies: ["Python", "OpenAI API", "Data Science"],
          github: "",
          live: ""
        },
        {
          title: "Privacy-Loss Parameter Optimization",
          description: "Modeled theoretically the utility-privacy tradeoff for populations with individuals difference privacy preferences to find the optimal privacy-loss parameter optimizing social utility; developed simulations in Python to find the value for specific populations. Developed Flask-based app to enable individuals to find their preferred parameter value and researchers to find an optimum value for a given population",
          technologies: ["Flask", "Python", "LaTeX", "Scipy"],
          github: "https://github.com/vihaann06/cs208-optimiser",
          live: ""
        }
      ]
    },
    {
      name: "Applied ML",
      projects: [
        {
          title: "Chest Disease Classification using CNNs",
          description: "Developed models using Res-Net-18 and Dense-Net-121 to recognize the status of Chest X-rays reaching up to 90% accuracy on one-domain trained models, and 70% on multi-sourced case",
          technologies: ["Python", "PyTorch", "TensorFlow"],
          github: "https://github.com/nsiwek1/neuro140project",
          live: ""
        },
        {
          title: "OneDegree Semester Project",
          description: "Collaborated in the team of 7 to develop a chatbot assisting OneDegree's employees in more efficient search for appropriate resources for underprivileged individuals in LA area; Implemented the tool using function calling (API) and RAGs through ChatGPT's API and React.js",
          technologies: ["Python", "OpenAI API", "React.js", "Function Calling"],
          github: "",
          live: ""
        },
        {
          title: "Predictions for S&P 500",
          description: "With 3 classmates developed stock market predictors based on media headlines, using Natural Language Processing, pre-processing techniques (one-hot encoding, SMOTE) and multiple models (Random Forest, AdaBoost)",
          technologies: ["NLP", "Python", "Data Science", "Web scraping"],
          github: "https://github.com/nsiwek1/s-p500predictor",
          live: ""
        }
      ]
    },
    {
      name: "Apps & Tools",
      projects: [
        {
          title: "WECode Conference Portal",
          description: "Founded the engineering branch within WECode and developed the first version of the Conference Portal (authentication, mentor matching, schedules, admin, etc.)",
          technologies: ["React.js", "Supabase", "Tailwind.css"],
          github: "https://portalwecode.vercel.app",
          live: ""
        },
        {
          title: "Tinder for Food Options",
          description: "Built a Swift iOS app that enables group dining decisions through a Tinder-like swiping interface. Users can create groups, swipe on restaurant options, and find consensus on dining choices that satisfy everyone in the group.",
          technologies: ["Swift", "Firebase", "Google Places API"],
          github: "https://github.com/nsiwek1/food-app",
          live: ""
        },
        {
          title: "Personal Website",
          description: "Developed a personal website to showcase my work and experience (you're here)",
          technologies: ["React.js", "Tailwind CSS"],
          github: "https://github.com/nsiwek1/personalweb",
          live: ""
        },
        {
          title: "Portal for HPAIR participants",
          description: "Developed features for portal for participants of HPAIR conference. In particular developed registration flow, bulk assingments for events, UX, documentation and contact card generation",
          technologies: ["React.js", "Firebase"],
          github: "",
          live: "https://my.hpair.org"
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
          technologies: ["Python", "Selenium", "BeautifulSoup4"],
          github: "https://github.com/nsiwek1/exchangemarket_scrapper",
          live: ""
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="sr-only">Projects</h1>

        <div className="space-y-20">
          {categories.map((category) => {
            const isExpanded = expanded[category.name] ?? false;
            const hasMore = category.projects.length > PREVIEW_COUNT;
            const visible = isExpanded
              ? category.projects
              : category.projects.slice(0, PREVIEW_COUNT);
            const hiddenCount = category.projects.length - PREVIEW_COUNT;

            return (
              <section key={category.name}>
                <h2 className="text-2xl font-normal text-primary mb-10">
                  {category.name}
                </h2>
                <div className="space-y-16">
                  {visible.map((project, index) => (
                    <div key={index} className="group">
                      <div className="space-y-4">
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
                              aria-label={`Open ${project.title}`}
                            >
                              <ExternalLink size={16} strokeWidth={1.5} />
                            </a>
                          )}
                        </div>

                        <p className="text-secondary font-light leading-relaxed">
                          {project.description}
                        </p>

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

                {hasMore && (
                  <button
                    onClick={() => toggle(category.name)}
                    className="mt-10 inline-flex items-center gap-2 text-sm font-light text-muted hover:text-accent transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <span>
                      {isExpanded ? 'Show less' : `Show ${hiddenCount} more`}
                    </span>
                    <ChevronDown
                      size={14}
                      strokeWidth={1.5}
                      className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
