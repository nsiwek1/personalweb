import React from 'react';

interface TeachingRole {
  title: string;
  course: string;
  period: string;
}

interface Course {
  name: string;
  code: string;
  semester: string;
}

interface Activity {
  name: string;
  role: string;
  logo?: string;
}

const School: React.FC = () => {
  const teaching: TeachingRole[] = [
    {
      title: "Teaching Fellow",
      course: "CS1240: Algorithms and Data Structures",
      period: "Spring 2026"
    },
    {
      title: "Head Teaching Fellow",
      course: "CS50: Introduction to Computer Science",
      period: "Fall 2024, Spring 2025, Fall 2025"
    },
    {
      title: "Patel Fellow",
      course: "CS1200: Introduction to Algorithms",
      period: "Fall 2025"
    }
  ];

  const courses: Course[] = [
        
    {
      name: "Distributed Systems",
      code: "CS 2620",
      semester: "Spring 2026"
    },
    {
      name: "AI for Social Good",
      code: "CS 2880",
      semester: "Spring 2026"
    },
    {
      name: "Probability and Random Processes with Economic Applications",
      code: "Math 117",
      semester: "Spring 2026"
    },

    {
      name: "Systems Programming and Machine Organization",
      code: "CS 61",
      semester: "Fall 2025"
    },
    {
      name: "ML Seminar: AI Safety",
      code: "CS 2881R",
      semester: "Fall 2025"
    },
    {
      name: "Real Analysis",
      code: "Math 112",
      semester: "Fall 2025"
    },
    {
      name: "AI and Decision Making in Medicine",
      code: "MIT 6.S883",
      semester: "Fall 2025"
    },
    {
      name: "Data Structures and Algorithms",
      code: "CS 1240",
      semester: "Spring 2025"
    },
    {
      name: "Applied Privacy for Data Science",
      code: "CS 2080",
      semester: "Spring 2025"
    },
    {
      name: "Artificial and Human Intelligence",
      code: "Neuro 140",
      semester: "Spring 2025"
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
      name: "Big Data",
      code: "EC 50",
      semester: "Spring 2024"
    },
    {
      name: "Probability",
      code: "Math 154",
      semester: "Spring 2024"
    },
    {
      name: "Abstraction & Design in Computation",
      code: "CS 51",
      semester: "Spring 2024"
    },
    {
      name: "Introduction to Computer Science",
      code: "CS 50",
      semester: "Fall 2023"
    },
    {
      name: "Linear Algebra",
      code: "Math 22a",
      semester: "Fall 2023"
    }
  ];

  const activities: Activity[] = [
    {
      name: "AI Student Safety Team",
      role: "Technical Fellowship",
      logo: "/images/aiist.jpeg"
    },
    {
      name: "Peer Concentration Advising Fellow",
      role: "Co-Captain",
      logo: "https://www.seas.harvard.edu/sites/default/files/images/About%20SEAS/image_large.png"
    },
    {
      name: "WECode",
      role: "Director of Engineering",
      logo: "/images/wecode.png"
    },
    {
      name: "Harvard Program for Asian and International Relations",
      role: "Finance & Technology Director",
      logo: "https://images.squarespace-cdn.com/content/v1/685193535b70ba7b31c6d673/1750176616661-NWIG4T9XK5NLKU79BKXG/HPAIR+Official+Logo.png?format=1500w"
    },
    {
      name: "Harvard College Debating Union",
      role: "Member",
      logo: "/images/hcdu.png"
    }
  ];

  return (
    <section className="min-h-screen bg-white py-32 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-24 border-b border-border pb-12">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-primary mb-4">
            School
          </h1>
          <p className="text-xl text-muted font-light tracking-wide">
            Academic and campus life at Harvard (and occasionally MIT)
          </p>
        </div>

        {/* Teaching Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-normal text-primary mb-8">Teaching</h2>
          <div className="space-y-6">
            {teaching.map((role, index) => (
              <div key={index} className="group">
                <h3 className="text-lg font-normal text-primary group-hover:text-accent transition-colors mb-1">
                  {role.title}
                </h3>
                <p className="text-base text-secondary font-light mb-1">{role.course}</p>
                <p className="text-sm text-muted font-light">{role.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coursework Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-normal text-primary mb-8">Coursework</h2>
          <div className="space-y-3">
            {courses.map((course, index) => (
              <div 
                key={index}
                className="flex items-baseline justify-between gap-4 group"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-sm text-muted font-light flex-shrink-0">{course.code}</span>
                  <span className="text-base text-secondary font-light group-hover:text-primary transition-colors">
                    {course.name}
                  </span>
                </div>
                <span className="text-sm text-muted font-light flex-shrink-0">{course.semester}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Section */}
        <div>
          <h2 className="text-2xl font-normal text-primary mb-8">Extracurricular</h2>
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={index} className="group flex gap-8">
                {/* Logo */}
                {activity.logo && (
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img 
                      src={activity.logo} 
                      alt={`${activity.name} logo`}
                      className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-normal text-primary group-hover:text-accent transition-colors mb-1">
                    {activity.name}
                  </h3>
                  <p className="text-base text-secondary font-light">{activity.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default School; 