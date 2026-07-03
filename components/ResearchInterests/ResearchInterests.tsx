import React from "react";

const researchInterests = [
  "Vision–language models and information extraction from scientific figures",
  "Robustness of multimodal models to noisy, real-world inputs",
  "Accessibility of visual data for blind and low-vision users",
  "Retrieval-augmented generation and biomedical text mining",
];

export default function ResearchInterests() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10 transition-all duration-300 w-full mx-auto">
      <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 sm:mb-8">
        Research Interests
      </h4>
      <p className="main-color mb-4">
        Machine Learning, Multimodal AI, and Natural Language Processing
      </p>
      <ul className="space-y-2">
        {researchInterests.map((interest) => (
          <li key={interest} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
            <span>{interest}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
