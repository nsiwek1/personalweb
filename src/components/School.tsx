import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

interface SubjectGroup {
  name: string;
  courses: Course[];
}

interface Activity {
  name: string;
  role: string;
  logo?: string;
}

const PREVIEW_COUNT = 3;

const School: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (name: string) =>
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));

  const teaching: TeachingRole[] = [
    {
      title: "Teaching Fellow",
      course: "CS 1240: Algorithms and Data Structures",
      period: "Spring 2026"
    },
    {
      title: "Head Teaching Fellow",
      course: "CS 50: Introduction to Computer Science",
      period: "Fall 2024, Spring 2025, Fall 2025"
    },
    {
      title: "Patel Fellow",
      course: "CS 1200: Introduction to Algorithms",
      period: "Fall 2025"
    }
  ];

  const subjects: SubjectGroup[] = [
    {
      name: "Computer Science",
      courses: [
        { name: "Distributed Systems", code: "CS 2620", semester: "Spring 2026" },
        { name: "AI for Social Good", code: "CS 2880", semester: "Spring 2026" },
        { name: "Systems Programming and Machine Organization", code: "CS 61", semester: "Fall 2025" },
        { name: "ML Seminar: AI Safety", code: "CS 2881R", semester: "Fall 2025" },
        { name: "Data Structures and Algorithms", code: "CS 1240", semester: "Spring 2025" },
        { name: "Applied Privacy for Data Science", code: "CS 2080", semester: "Spring 2025" },
        { name: "Data Science", code: "CS 109a", semester: "Fall 2024" },
        { name: "Introduction to Algorithms", code: "CS 1200", semester: "Fall 2024" },
        { name: "Abstraction & Design in Computation", code: "CS 51", semester: "Spring 2024" },
        { name: "Introduction to Computer Science", code: "CS 50", semester: "Fall 2023" }
      ]
    },
    {
      name: "Mathematics",
      courses: [
        { name: "Probability and Random Processes with Economic Applications", code: "Math 117", semester: "Spring 2026" },
        { name: "Real Analysis", code: "Math 112", semester: "Fall 2025" },
        { name: "Probability", code: "Math 154", semester: "Spring 2024" },
        { name: "Linear Algebra", code: "Math 22a", semester: "Fall 2023" }
      ]
    },
    {
      name: "Other",
      courses: [
        { name: "AI and Decision Making in Medicine", code: "MIT 6.S883", semester: "Fall 2025" },
        { name: "Artificial and Human Intelligence", code: "Neuro 140", semester: "Spring 2025" },
        { name: "Graduate Level Probability", code: "STAT 210", semester: "Fall 2024" },
        { name: "Corporate Finance", code: "EC 1745", semester: "Fall 2024" },
        { name: "Big Data", code: "EC 50", semester: "Spring 2024" }
      ]
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
      logo: "/images/seas-harvard.webp"
    },
    {
      name: "WECode",
      role: "Director of Engineering",
      logo: "/images/wecode.png"
    },
    {
      name: "Harvard Program for Asian and International Relations",
      role: "Finance & Technology Director",
      logo: "/images/hpair.webp"
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
        <h1 className="sr-only">School</h1>

        <div className="mb-20">
          <h2 className="text-2xl font-normal text-primary mb-10">Coursework</h2>
          <div className="space-y-12">
            {subjects.map((subject) => {
              const isExpanded = expanded[subject.name] ?? false;
              const hasMore = subject.courses.length > PREVIEW_COUNT;
              const visible = isExpanded
                ? subject.courses
                : subject.courses.slice(0, PREVIEW_COUNT);
              const hiddenCount = subject.courses.length - PREVIEW_COUNT;

              return (
                <div key={subject.name}>
                  <h3 className="text-base font-medium text-primary mb-5">
                    {subject.name}
                  </h3>
                  <div className="space-y-3">
                    {visible.map((course, index) => (
                      <div
                        key={index}
                        className="flex items-baseline justify-between gap-4 group"
                      >
                        <div className="flex items-baseline gap-3 min-w-0">
                          <span className="text-sm text-muted font-light flex-shrink-0">{course.code}</span>
                          <span className="text-base text-secondary font-light group-hover:text-primary transition-colors">
                            {course.name}
                          </span>
                        </div>
                        <span className="text-sm text-muted font-light flex-shrink-0">{course.semester}</span>
                      </div>
                    ))}
                  </div>

                  {hasMore && (
                    <button
                      onClick={() => toggle(subject.name)}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-light text-muted hover:text-accent transition-colors"
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
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-normal text-primary mb-8">Teaching</h2>
          <div className="space-y-4">
            {teaching.map((role, index) => (
              <div key={index} className="group">
                <h3 className="text-base font-medium text-primary group-hover:text-accent transition-colors">
                  {role.title}
                </h3>
                <p className="text-sm text-secondary font-light">{role.course}</p>
                <p className="text-xs text-muted font-light mt-0.5">{role.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-normal text-primary mb-8">Extracurricular</h2>
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={index} className="group flex gap-8">
                {activity.logo && (
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <img
                      src={activity.logo}
                      alt={`${activity.name} logo`}
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
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
