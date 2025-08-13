import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import SimpleCard from "@/components/ui/SimpleCard";
import AboutCursorEffect from "@/components/ui/AboutCursorEffect";

export default function Experience() {
  return (
    <AboutCursorEffect>
      <SimpleCard>
        <div className="section">
          <p className="section-header">Experience</p>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              My Professional Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Explore my career timeline from research assistant roles to software engineering positions, 
              showcasing growth in technology, research, and leadership through an interactive timeline.
            </p>
            
            <Link 
              href="/experience" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
            >
              <Calendar className="w-5 h-5" />
              View Experience Timeline
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
              ✨ Interactive horizontal timeline with detailed descriptions
            </p>
          </div>
        </div>
      </SimpleCard>
    </AboutCursorEffect>
  );
}

