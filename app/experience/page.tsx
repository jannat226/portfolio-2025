import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Award, TrendingUp } from "lucide-react";
import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-purple-900 dark:to-blue-900 transition-colors duration-300">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            Professional Journey
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            My Experience
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive timeline of my professional journey, from research assistant roles 
            to software engineering internships, showcasing continuous growth and learning.
          </p>
        </div>

        {/* Timeline */}
        <ExperienceTimeline />
        
        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Ready to Collaborate?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always open to discussing new opportunities, research collaborations, or interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:jannat@example.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get In Touch
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
