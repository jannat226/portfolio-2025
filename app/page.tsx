'use client'
import { motion } from "framer-motion";
import SpiralCursorEffect from "@/components/ui/SpiralCursorEffect";
// import CrazyEffects from "@/components/ui/CrazyEffects";
import MagicalBackground from "@/components/ui/MagicalBackground";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Header from "@/components/Header/Header";
import TechStack from "@/components/TechStack/TechStack";
import Navbar from "@/components/Navbar/Navbar";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function Home() {
  return (
    <>
     
      <SpiralCursorEffect />
      <motion.div
        initial={{ y: -4, filter: "blur(8px)" }}
        animate={{ y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full relative z-10"
      >
        <div className="px-4 sm:px-6 lg:px-8 pt-8">
          <Navbar />
        </div>
        <div className="pt-16">
          <ScrollAnimation className="w-full" direction="scale">
            <div
              id="about"
              className="px-4 sm:px-6 lg:px-8 w-full"
            >
              {/* Mobile: stacked, Desktop: flex */}
              <div className="block lg:flex items-center justify-center">
                <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
                  <Header />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center text-center mt-8 lg:mt-0">
                  <About />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div className="pt-16">
          <ScrollAnimation className="w-full" direction="up" delay={0.2}>
            <div id="experience" className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <Experience />
            </div>
          </ScrollAnimation>
        </div>
        <div className="pt-16">
          <ScrollAnimation className="w-full" direction="left" delay={0.1}>
            <div id="projects" className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <Projects />
            </div>
          </ScrollAnimation>
        </div>
        <div className="pt-16">
          <ScrollAnimation className="w-full" direction="up" delay={0.3}>
            <div id="techstack" className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <TechStack />
            </div>
          </ScrollAnimation>
        </div>
        <div className="pt-16">
          <ScrollAnimation className="w-full" direction="scale" delay={0.2}>
            <div id="contact" className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-6 py-8 transition-colors duration-300 relative z-10 w-full text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                  Want to Build Something Fun?
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
                  I&apos;m always excited to collaborate on <span className="font-semibold text-purple-600 dark:text-purple-400">cool projects</span>, discuss <span className="font-medium text-blue-600 dark:text-blue-400">innovative ideas</span>, or just chat about the latest in <span className="font-medium text-green-600 dark:text-green-400">AI/ML</span>!
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 italic">
                  (And yes, if you want to play tennis, I&apos;m definitely up for that too! 🎾)
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jannatchehal09@gmail.com&su=Let&apos;s%20Build%20Something%20Fun!&body=Hi%20Jannat,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20collaborate%20on%20something%20exciting!%0D%0A%0D%0ABest%20regards," 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    💻 Let&apos;s Build Together!
                  </a>
                  <a href="https://www.linkedin.com/in/jannat-chehal/" 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 dark:bg-gray-600 text-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    🤝 Connect on LinkedIn
                  </a>
                  <a href="https://discord.com/users/jenny05918"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    🟦 Connect on Discord
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </motion.div>
    </>
  );
}