
"use client";
import React from "react";
import { techIcons } from "./data";
import NextImage from "next/image";

export default function TechStack() {
  return (
    <div className="section ">
      <p className="section-header">Tech Stack</p>
      <div className="bg-neutral-50 border-2 border-white rounded-xl p-6 flex flex-wrap justify-center gap-4">
        {Object.entries(techIcons).map(([tech, iconPath], idx) => (
          <div key={idx} className="flex items-center gap-2 bg-neutral-100 rounded-full px-3 py-2">
            <NextImage src={iconPath} alt={`${tech} icon`} width={20} height={20} className="w-5 h-5" />
            <p className="text-sm text-black dark:text-black">{tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
