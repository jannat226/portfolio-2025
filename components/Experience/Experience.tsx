import React, { useState } from "react";
import { Building, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { experiences } from "./data";

export default function Experience() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div 
      className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10 transition-all duration-300 transform-gpu w-full mx-auto"
    >
      {/* Header */}
      <div className="text-left mb-6 sm:mb-8">
        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6">
          My Professional Journey
        </h4>
           
          </div>

          {/* Horizontal Timeline */}
          <div className="relative mb-8">
            {/* Timeline line */}
            <div className="absolute top-20 left-6 right-6 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 dark:from-purple-300 dark:via-blue-300 dark:to-green-300 rounded-full shadow-lg"></div>
            
            {/* Timeline items container */}
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-6 min-w-max px-6">
                {experiences.map((experience, idx) => {
                  const isExpanded = expandedItem === idx;
                  
                  return (
                    <div key={idx} className="flex-shrink-0 w-80 relative">
                      {/* Timeline dot */}
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-gray-800 border-3 border-purple-400 dark:border-purple-300 shadow-lg z-10">
                        {experience.date?.includes("Present") && (
                          <div className="absolute inset-1 rounded-full bg-green-500 animate-pulse"></div>
                        )}
                      </div>
                      
                      {/* Date badge above timeline */}
                      <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold shadow-md whitespace-nowrap ${
                        experience.date?.includes("Present") 
                          ? "bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 text-green-700 dark:text-green-300"
                          : "bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-purple-700 dark:text-purple-300"
                      }`}>
                        {experience.date?.includes("Present") ? (
                          <span>
                            {experience.date.split(" – Present")[0]} – <span className="text-green-600 dark:text-green-400 font-bold">Present</span>
                          </span>
                        ) : (
                          experience.date
                        )}
                      </div>
                      
                      {/* Experience card */}
                      <div className="mt-24">
                        <div 
                          onClick={() => toggleExpanded(idx)}
                          className={`
                            bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl
                            border border-gray-200 dark:border-gray-600
                            p-6 cursor-pointer transition-all duration-300 hover:scale-105
                            ${isExpanded ? 'ring-2 ring-purple-400 dark:ring-purple-300 transform scale-105' : ''}
                          `}
                        >
                          {/* Company logo and header */}
                          <div className="flex items-center gap-3 mb-3">
                            <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-800 dark:to-blue-800 overflow-hidden border-2 border-purple-200 dark:border-purple-600 shadow-md flex-shrink-0">
                              <Image
                                src={experience.logo}
                                alt="company logo"
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 truncate">
                                {experience.title}
                              </h3>
                              <p className="text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-2 text-sm">
                                <Building size={12} />
                                {experience.company}
                              </p>
                            </div>
                          </div>
                          
                          {/* Preview or expanded content */}
                          {!isExpanded ? (
                            <>
                              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
                                {experience.description[0]}
                              </p>
                              <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400 text-sm font-medium">
                                <span>Click to see more</span>
                                <ChevronDown size={14} className="animate-bounce" />
                              </div>
                            </>
                          ) : (
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
                                  Key Responsibilities:
                                </h4>
                                <ChevronUp size={16} className="text-gray-500 dark:text-gray-400" />
                              </div>
                              
                              <ul className="space-y-3 max-h-48 overflow-y-auto scrollbar-thin">
                                {experience.description.map((item, i) => (
                                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mt-2 flex-shrink-0 shadow-sm"></div>
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                              
                              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-3 text-center border border-purple-200/30 dark:border-purple-700/30">
                                <p className="text-xs text-purple-700 dark:text-purple-300 font-medium">
                                  ✨ Click anywhere to collapse
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Scroll hint */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-gray-600 dark:text-gray-400">
                <span>Scroll horizontally to explore timeline</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}

