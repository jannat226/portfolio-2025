'use client'
import { motion } from "framer-motion";
import SpiralCursor from "@/components/ui/SpiralCursor";
// import CrazyEffects from "@/components/ui/CrazyEffects";
import MagicalBackground from "@/components/ui/MagicalBackground";
import FloatingParticles from "@/components/ui/FloatingParticles";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Header from "@/components/Header/Header";
import TechStack from "@/components/TechStack/TechStack";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <MagicalBackground />
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-teal-50/30 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-teal-900/30"></div>
        <FloatingParticles />
      </div>
      <SpiralCursor />
      <motion.div
        initial={{ y: -4, filter: "blur(8px)" }}
        animate={{ y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full relative z-10"
      >
        <div className="px-4 sm:px-6 lg:px-8 pt-8">
          <Navbar />
        </div>
        
        <div id="home" className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-6 py-6 transition-colors duration-300 relative z-10 w-full">
            <Header />
            
            {/* Spacer between Header and About */}
            <div className="my-8 border-t border-gray-200 dark:border-gray-700"></div>
            
            {/* About Section */}
            <About />
          </div>
        </div>
        
        <div id="experience" className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
          <Experience />
        </div>
        
        <div id="projects" className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
          <Projects />
        </div>
        
        <div id="techstack" className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
          <TechStack />
        </div>
      </motion.div>
    </>
  );
}