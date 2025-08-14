"use client";
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { projects } from "./data";

export default function Projects() {
  return (
    <section className="w-full h-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            AI/ML, web development, and automation projects showcasing my technical skills and problem-solving approach.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex-1 flex items-center">
          <div className="overflow-x-auto custom-scrollbar w-full">
            <div className="flex gap-4 sm:gap-6 pb-4" style={{ width: 'max-content' }}>
              {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden group transition-all duration-300 flex-shrink-0 w-80 sm:w-96 lg:w-[420px]"
              >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium backdrop-blur-sm transition-all duration-300 ${
                    project.status === 'Completed' 
                      ? 'bg-green-100/90 text-green-700 dark:bg-green-900/60 dark:text-green-400 group-hover:bg-green-200/95 dark:group-hover:bg-green-800/70'
                      : project.status === 'In Progress'
                      ? 'bg-blue-100/90 text-blue-700 dark:bg-blue-900/60 dark:text-blue-400 group-hover:bg-blue-200/95 dark:group-hover:bg-blue-800/70'
                      : 'bg-yellow-100/90 text-yellow-700 dark:bg-yellow-900/60 dark:text-yellow-400 group-hover:bg-yellow-200/95 dark:group-hover:bg-yellow-800/70'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 rounded text-xs font-medium backdrop-blur-sm group-hover:bg-white/95 dark:group-hover:bg-gray-700/95 transition-all duration-300">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs group-hover:bg-gray-300 dark:group-hover:bg-gray-600 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs group-hover:bg-gray-300 dark:group-hover:bg-gray-600 transition-colors duration-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 text-sm">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-800 dark:bg-gray-700 text-white rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}