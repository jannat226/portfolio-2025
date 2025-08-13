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
      const sections = ["home", "about", "experience", "projects", "techstack"];
      const navItems = ["Home", "About", "Experience", "Projects", "Tech Stack"];
      
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

  const navItems = ["Home", "About", "Experience", "Projects", "Tech Stack"];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {/* Main navbar container */}
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/30 text-gray-900 dark:text-white px-6 py-3 rounded-full shadow-xl flex items-center justify-between md:justify-center gap-4 max-w-2xl transition-all duration-300">
        
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-16 left-1/2 -translate-x-1/2 md:translate-x-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg md:shadow-none px-6 py-4 md:p-0 rounded-2xl md:rounded-none md:flex md:gap-2 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/30 md:border-none ${
            menuOpen ? "block opacity-100 scale-100" : "hidden md:flex opacity-0 md:opacity-100 scale-95 md:scale-100"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className={`block px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
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
      </div>
    </nav>
  );
}
