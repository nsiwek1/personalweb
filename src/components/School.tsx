import React from 'react';
import { Book, Users } from 'lucide-react';

interface Class {
  name: string;
  code: string;
  semester: string;
}

interface Activity {
  name: string;
  role: string;
}

const School: React.FC = () => {
  const classes: Class[] = [
    {
      name: "Introduction to Computer Science",
      code: "CS 50",
      semester: "Fall 2023"
    },
    {
      name: "Linear Algebra",
      code: "Math 22a",
      semester: "Fall 2023"
    },
    {
      name: "Abstraction & Design in Computation",
      code: "CS 51",
      semester: "Spring 2024"
    },
    {
      name: "Probability",
      code: "Math 154",
      semester: "Spring 2024"
    },
    {
      name: "Big Data",
      code: "EC 50",
      semester: "Spring 2024"
    },
    {
      name: "Graduate Level Probability",
      code: "STAT 210",
      semester: "Fall 2024"
    },
    {
      name: "Data Science",
      code: "CS 109a",
      semester: "Fall 2024"
    },
    {
      name: "Introduction to Algorithms",
      code: "CS 1200",
      semester: "Fall 2024"
    },
    {
      name: "Corporate Finance",
      code: "EC 1745",
      semester: "Fall 2024"
    },
    {
      name: "Data Structures and Algorithms",
      code: "CS 1240",
      semester: "Spring 2025"
    },
    {
      name: "Applied Privacy for Data Science (Differential Privacy)",
      code: "CS 2080",
      semester: "Spring 2025"
    },
    {
      name: "Artificial and Human Intelligence",
      code: "Neuro 140",
      semester: "Spring 2025"
    }
  ];

  const activities: Activity[] = [
    {
      name: "Peer Concentration Advising Fellow",
      role: "Co-Captain"
    },
    {
      name: "WECode",
      role: "Director of Engineering"
    },
    {
      name: "Women in Computer Science",
      role: "Careers Director"
    },
    {
      name: "Harvard Program for Asian and International Relations",
      role: "Finance & Technology Associate"
    },
    {
      name: "Harvard College Debating Union",
      role: "Member"
    }
  ];

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary">
            School
          </h2>
          <div className="h-[1px] flex-1 bg-primary/10"></div>
        </div>

        {/* Classes Section */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Book size={20} className="text-secondary sm:w-6 sm:h-6" />
            <h3 className="text-2xl sm:text-3xl font-semibold text-primary">Relevant Classes</h3>
          </div>
          
          <div className="space-y-2">
            {classes.map((classItem, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-3 sm:px-4 hover:bg-primary/5 transition-all duration-300 rounded-lg"
              >
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="text-sm sm:text-base text-primary/70">{classItem.code}</span>
                  <span className="text-sm sm:text-base text-primary">{classItem.name}</span>
                </div>
                <span className="text-sm sm:text-base text-primary/70 mt-1 sm:mt-0">{classItem.semester}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities Section */}
        <div>
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Users size={20} className="text-secondary sm:w-6 sm:h-6" />
            <h3 className="text-2xl sm:text-3xl font-semibold text-primary">Extracurricular Activities</h3>
          </div>
          
          <div className="space-y-2">
            {activities.map((activity, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-2 px-3 sm:px-4 hover:bg-primary/5 transition-all duration-300 rounded-lg"
              >
                <span className="text-sm sm:text-base text-primary">{activity.name}</span>
                <span className="text-sm sm:text-base text-primary/70 mt-1 sm:mt-0">{activity.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default School; 