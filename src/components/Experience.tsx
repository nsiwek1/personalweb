import React from 'react';
import { ArrowUpRight, Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "As1 Social",
      location: "Remote",
      period: "Mar 2025 - May 2025",
      description: [
        "Contributed to the MVP development of social media app in React Native (frontend) and PostgreSQL (backend)",
        "Developed caption parsing and hashtag ranking for video recommendations, boosting user retention by 30% through personalised feeds based on user preferences, keyword relevance, and trend recency",
        "Optimised caching and memory usage by over 50% via implementing video prefetching and feed pagination"
      ],
      technologies: ["React Native", "PostgreSQL", "Tailwind CSS", "Git"]
    },
    {
      title: "Software Development Intern",
      company: "Avalon Infosys",
      location: "Delhi, India",
      period: "Jun 2024 - Aug 2024",
      description: [
        "Developed 3wmaps, a mobile app to help users locate K-12 schools in developing countries",
        "Designed the profile page using React to visualise school data, increasing data accessibility by 30%",
        "Integrated a Firebase backend to fetch school-specific data like gender ratio, toilet-to-student ratio, etc, in JSON"
      ],
      technologies: ["Flutter", "Firebase", "Dart", "Bitbucket"]
    },
    {
      title: "Software Development Intern",
      company: "SMVDU Narayana Hospital",
      location: "Jammu, India",
      period: "July 2022 - August 2022",
      description: [
        "Worked under supervision to develop an algorithm to keep track of vacant beds for admission/discharge of patients during the pandemic, reducing emergency response time by 20%",
        "Maintained a PostgreSQL database of the oxygen availability in the COVID-19 wards and Operation Theatres",
      ],
      technologies: ["Python", "SQL", "Git"]
    },
    {
        title: "Frontend Development Intern",
        company: "TA Digital",
        location: "Remote",
        period: "Dec 2021-Jan 2022",
        description: [
          "Interned as a full-stack web developer and facilitated in making the website more user-friendly/easier to navigate",
          "Conducted 3 user testing rounds and feedback sessions with accessibility checks to promote equitable web design",
        ],
        technologies: ["React", "Bootstrap", "Git"]
      }
  ];

  return (
    <section id="experience" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-4xl font-bold text-secondary">
            Experience
          </h2>
          <div className="h-[1px] flex-1 bg-primary/10"></div>
        </div>
        
        <div>
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group rounded-[8px] p-5 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex flex-col space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary group-hover:text-secondary transition-all duration-300">{exp.title}</h3>
                    <div className="flex items-center space-x-4 mt-1.5">
                      <div className="flex items-center text-primary/70">
                        <Briefcase size={16} className="mr-2" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center text-primary/70">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center text-primary/70">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="list-none space-y-1.5 text-primary/70">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.technologies.map((tech, i) => (
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

        <div className="mt-8 flex justify-center">
          <a
            href="/Vihaan_Gupta_CV (7).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 rounded-[8px] bg-primary/10 hover:bg-primary/20 text-primary/70 hover:text-primary transition-all duration-300 flex items-center gap-2"
          >
            View My Resume <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience; 