
"use client";
import React from "react";
import { techIcons } from "./data";
import NextImage from "next/image";

export default function TechStack() {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 lg:p-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 transition-colors duration-300">
          {Object.entries(techIcons).map(([tech, iconPath], idx) => (
            <div key={idx} className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-300 hover:scale-105 hover:shadow-md">
              <NextImage src={iconPath} alt={`${tech} icon`} width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5" />
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
