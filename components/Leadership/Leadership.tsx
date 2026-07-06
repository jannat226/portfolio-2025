import React from "react";

interface Role {
  title: string;
  org: string;
  date: string;
}

const roles: Role[] = [
  { title: "Data Analyst (Volunteer)", org: "Women of Connections (nonprofit organization)", date: "Feb 2025 – Apr 2025" },
  { title: "Vice President", org: "Computer Science Club, University of Delhi", date: "Jul 2021 – May 2022" },
  { title: "Volunteer", org: "Enactus Society, University of Delhi", date: "Jul 2020 – May 2022" },
  { title: "Core Member", org: "Computer Science Club, University of Delhi", date: "Jul 2019 – May 2021" },
];

export default function Leadership() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10 transition-all duration-300 w-full mx-auto">
      <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 sm:mb-8">
        Leadership &amp; Volunteering
      </h4>
      <div className="flex flex-col gap-4">
        {roles.map((r) => (
          <div key={r.title} className="flex flex-col gap-1 md:flex-row md:justify-between border-l-2 border-blue-300 dark:border-blue-600 pl-4">
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-100">{r.title}</p>
              <p className="company-name text-sm">{r.org}</p>
            </div>
            <p className="date-text text-sm whitespace-nowrap">{r.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
