"use client";
import { Linkedin, Github, FileText, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TypingAnimation from "@/components/ui/TypingAnimation";
import InteractiveCard from "@/components/ui/InteractiveCard";
// import React, { useState, useEffect } from "react";

export default function Header() {
  // const [theme, setTheme] = useState(() => {
  //   if (typeof window !== "undefined") {
  //     return localStorage.getItem("theme") || "light";
  //   }
  //   return "light";
  // });

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  return (
    <InteractiveCard className="border-none bg-gradient-to-br from-purple-50/70 via-pink-50/70 to-blue-50/70 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30">
      <header className="flex justify-between items-center">
        <div className="flex items-start gap-4">
          <div className="relative rounded-full bg-neutral-400 overflow-hidden aspect-square w-24 group-hover:scale-110 transition-transform duration-500">
            <Image
              src="/photo3.png"
              alt="My headshot/profile image"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full">
            <TypingAnimation 
              text="Jannat Chehal (Jenny)" 
              className="text-lg text-gray-800 dark:text-white font-bold"
              speed={120}
            />
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="https://www.linkedin.com/in/jannat-chehal/" target="_blank" 
                className="icons group/link hover:scale-110 transition-all duration-300 hover:text-blue-500">
                <Linkedin size={18} className="group-hover/link:animate-bounce" />
                <p className="icon-text">LinkedIn</p>
              </Link>
              <Link href="https://github.com/jannat226/" target="_blank" 
                className="icons group/link hover:scale-110 transition-all duration-300 hover:text-gray-700 dark:hover:text-gray-300">
                <Github size={18} className="group-hover/link:animate-bounce" />
                <p className="icon-text">GitHub</p>
              </Link>
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=jannatchehal09@gmail.com&su=Hello%20Jannat!&body=Hi%20Jannat,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0ABest%20regards," 
                target="_blank"
                className="icons group/link hover:scale-110 transition-all duration-300 hover:text-red-500">
                <Mail size={18} className="group-hover/link:animate-bounce" />
                <p className="icon-text">Email</p>
              </Link>
              <Link href="/Jannat_Professional_Resu.pdf" target="_blank" 
                className="icons group/link hover:scale-110 transition-all duration-300 hover:text-green-500">
                <FileText size={18} className="group-hover/link:animate-bounce" />
                <p className="icon-text">Resume</p>
              </Link>
            </div>
            <p className="main-color leading-relaxed text-gray-700 dark:text-gray-200 mt-4">
              Hi, my name is<br />
              <span className="font-semibold text-purple-600 dark:text-purple-400">Jannat Chehal</span>.<br />
              I love exploring new things!<br />
              I'm a graduate student at <span className="italic text-blue-600 dark:text-blue-400">Virginia Commonwealth University</span>.<br />
              I have a keen interest in <span className="font-medium text-green-600 dark:text-green-400">Data Structures and Algorithms</span>. I also enjoy building <span className="font-medium text-cyan-600 dark:text-cyan-400">AI/ML applications</span> and <span className="font-medium text-yellow-600 dark:text-yellow-400">web applications</span>!
              <br /><br />
              Currently looking for opportunities to utilize my skills in collaborative and distributed environment.
            </p>
          </div>
        </div>

      {/* Theme Toggle Button */}
      {/* <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button> */}
      </header>
    </InteractiveCard>
  );
}
