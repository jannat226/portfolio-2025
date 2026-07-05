import React from "react";

const scholarships = [
  {
    title: "cMEDA Summer Student Scholarship",
    detail:
      "Center for Microbiome Engineering & Data Analysis (cMEDA), Virginia Commonwealth University. Awarded to support a summer research project with Dr. Bridget T. McInnes.",
  },
];

export default function Scholarships() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10 transition-all duration-300 w-full mx-auto">
      <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 sm:mb-8">
        Scholarships & Awards
      </h4>

      <div className="flex flex-col gap-5">
        {scholarships.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-1 border-l-2 border-blue-300 dark:border-blue-700 pl-4"
          >
            <div className="flex flex-col gap-1 md:flex-row md:justify-between">
              <p className="font-semibold text-gray-800 dark:text-gray-100">{item.title}</p>
            </div>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
