"use client";
import { Linkedin, Github, FileText, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TypewriterEffect from "@/components/ui/TypewriterEffect";

export default function Header() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.9, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ 
        scale: 1.02, 
        y: -8, 
        rotateX: -2,
      }}
      className="relative z-10 transition-all duration-300 transform-gpu w-full"
      style={{ transformPerspective: '1000px' }}
    >
      <header className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 w-full">
        <div className="flex items-center gap-4 sm:gap-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-full bg-neutral-400 overflow-hidden aspect-square w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex-shrink-0 hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <Image
              src="/photo3.png"
              alt="My headshot/profile image"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-2"
            >
              <TypewriterEffect 
                words={["Jannat Chehal"]}
                className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                typeSpeed={120}
                deleteSpeed={80}
                delayBetweenWords={2500}
              />
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-3 sm:mb-4"
            >
              I love exploring new things!!
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="https://www.linkedin.com/in/jannat-chehal/" target="_blank" 
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105">
                <Linkedin size={16} />
                LinkedIn
              </Link>
              <Link href="https://github.com/jannat226/" target="_blank" 
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105">
                <Github size={16} />
                GitHub
              </Link>
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=jannatchehal09@gmail.com&su=Hello%20Jannat!&body=Hi%20Jannat,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0ABest%20regards," 
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-105">
                <Mail size={16} />
                Email
              </Link>
              <Link href="/Jannat_Professional_Resu.pdf" target="_blank" 
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-all duration-200 hover:scale-105">
                <FileText size={16} />
                Resume
              </Link>
            </motion.div>
          </div>
        </div>
      </header>
    </motion.div>
  );
}
