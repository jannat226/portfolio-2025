import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import InteractiveCard from "@/components/ui/InteractiveCard";

export default function Experience() {
  return (
    <div className="section">
      <p className="section-header">Experience</p>
      
      <InteractiveCard className="text-center py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="p-3 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-800 dark:to-blue-800">
            <Briefcase size={28} className="text-purple-600 dark:text-purple-400" />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              My Professional Journey
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md text-sm">
              Explore my work experience from research assistant roles to software engineering internships
            </p>
          </div>

          <Link 
            href="/experience" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm"
          >
            View My Experience
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </InteractiveCard>
    </div>
  );
}
