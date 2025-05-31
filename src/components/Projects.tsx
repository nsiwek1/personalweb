import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      technologies: ["Python", "Django", "PostgreSQL"]
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS"]
    }
  ];

  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-4xl font-bold text-secondary">
            Projects
          </h2>
          <div className="h-[1px] flex-1 bg-primary/10"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group rounded-[8px] p-5 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex flex-col space-y-3">
                <div>
                  <h3 className="text-2xl font-semibold text-primary group-hover:text-secondary transition-all duration-300">{project.title}</h3>
                  <p className="mt-2 text-primary/70">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm bg-primary/5 rounded-[8px] text-primary/70 group-hover:bg-primary/10 transition-all duration-300"
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
    </section>
  );
};

export default Projects; 