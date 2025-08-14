"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    // Scroll detection for active nav item
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "techstack", "contact"];
      const navItems = ["Home", "Experience", "Projects", "Tech Stack", "Contact"];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveItem(navItems[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const navItems = ["Home", "Experience", "Projects", "Tech Stack", "Contact"];

  return (
    <nav className="sticky top-4 left-4 right-4 z-50 mb-8">
      {/* Main navbar container */}
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/30 text-gray-900 dark:text-white px-4 sm:px-6 py-3 rounded-full shadow-xl flex items-center justify-between transition-all duration-300">
        
        {/* Logo - "J" on the far left */}
        <Link 
          href="#home"
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg sm:text-xl rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
        >
          J
        </Link>

        {/* Navigation Links - Desktop (far right) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className={`px-3 lg:px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                activeItem === item 
                  ? "bg-purple-600 text-white shadow-md" 
                  : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400"
              }`}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {item}
            </Link>
          ))}
          
          {/* Theme toggle - part of right side group */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {theme === "light" ? 
              <Moon size={18} className="text-gray-700 dark:text-gray-300" /> : 
              <Sun size={18} className="text-yellow-500" />
            }
          </button>
        </div>

        {/* Mobile right side controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {theme === "light" ? 
              <Moon size={18} className="text-gray-700 dark:text-gray-300" /> : 
              <Sun size={18} className="text-yellow-500" />
            }
          </button>

          {/* Mobile menu button */}
          <button
            className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute md:hidden top-16 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg px-6 py-4 rounded-2xl transition-all duration-300 border border-gray-200/20 dark:border-gray-700/30 min-w-[200px] ${
            menuOpen ? "block opacity-100 scale-100" : "hidden opacity-0 scale-95"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className={`block px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium mb-2 last:mb-0 ${
                activeItem === item 
                  ? "bg-purple-600 text-white shadow-md" 
                  : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400"
              }`}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
