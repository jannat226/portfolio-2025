import React from "react";

interface Degree {
  school: string;
  degree: string;
  date: string;
  detail?: string;
}

const degrees: Degree[] = [
  {
    school: "Virginia Commonwealth University, Richmond, VA",
    degree: "Ph.D., Computer Science",
    date: "Jan 2026 – Present",
    detail: "Advisor: Dr. Tomasz Arodz",
  },
  {
    school: "Virginia Commonwealth University, Richmond, VA",
    degree: "M.S., Computer Science",
    date: "Aug 2024 – Dec 2025",
    detail: "Advisor: Dr. Bridget T. McInnes · GPA: 3.9",
  },
  {
    school: "CHRIST (Deemed to be University), Bangalore, India",
    degree: "Master of Computer Applications",
    date: "Jul 2023 – May 2024",
    detail: "GPA: 3.7",
  },
  {
    school: "University of Delhi, New Delhi, India",
    degree: "B.S., Applied Physical Science",
    date: "Jul 2019 – May 2022",
    detail: "GPA: 3.6 · Emphasis in Mathematics and Physics",
  },
];

export default function Education() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10 transition-all duration-300 w-full mx-auto">
      <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 sm:mb-8">
        Education
      </h4>

      <div className="flex flex-col gap-6">
        {degrees.map((d) => (
          <div
            key={d.degree}
            className="flex flex-col gap-1 border-l-2 border-blue-300 dark:border-blue-700 pl-4"
          >
            <div className="flex flex-col gap-1 md:flex-row md:justify-between">
              <p className="font-semibold text-gray-800 dark:text-gray-100">{d.degree}</p>
              <p className="date-text text-sm">{d.date}</p>
            </div>
            <p className="company-name text-sm">{d.school}</p>
            {d.detail && <p className="date-text text-sm italic">{d.detail}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
