"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";

interface NavLeaf {
  label: string;
  id: string;
}

interface NavGroup {
  label: string;
  id: string;
  dropdown?: NavLeaf[];
}

const desktopNav: NavGroup[] = [
  { label: "About", id: "about" },
  {
    label: "Academics",
    id: "education",
    dropdown: [
      { label: "Education", id: "education" },
      { label: "Research Interests", id: "researchinterests" },
      { label: "Publications", id: "publications" },
    ],
  },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Tech Stack", id: "techstack" },
  { label: "Leadership", id: "leadership" },
  { label: "Contact", id: "contact" },
];

const mobileNav: NavLeaf[] = [
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Research Interests", id: "researchinterests" },
  { label: "Publications", id: "publications" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Tech Stack", id: "techstack" },
  { label: "Leadership", id: "leadership" },
  { label: "Contact", id: "contact" },
];

// Maps every section id on the page back to the top-level nav label that should highlight for it.
const idToGroupLabel: Record<string, string> = {
  about: "About",
  education: "Academics",
  researchinterests: "Academics",
  publications: "Academics",
  experience: "Experience",
  projects: "Projects",
  techstack: "Tech Stack",
  leadership: "Leadership",
  contact: "Contact",
};

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("about");
  const activeItem = idToGroupLabel[activeId] ?? "About";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") ?? "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    const handleScroll = () => {
      const ids = Object.keys(idToGroupLabel);
      for (let i = ids.length - 1; i >= 0; i--) {
        const section = document.getElementById(ids[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveId(ids[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const scrollToId = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;
    const navbar = document.querySelector('nav');
    const navHeight = navbar ? navbar.getBoundingClientRect().height : 64;
    const top = section.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToId(id);
    setActiveId(id);
  };

  return (
    <nav className="sticky top-4 left-4 right-4 z-50 mb-8">
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/30 text-gray-900 dark:text-white px-4 sm:px-6 py-3 rounded-full shadow-xl flex items-center justify-between transition-all duration-300">

        <Link
          href="#about"
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 text-white font-bold text-lg sm:text-xl rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
        >
          J
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {desktopNav.map((item) => {
            const isActive = activeItem === item.label;
            if (!item.dropdown) {
              return (
                <a
                  key={item.label}
                  href={`#${item.id}`}
                  className={`px-3 lg:px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                    isActive
                      ? "bg-blue-700 text-white shadow-md"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-400"
                  }`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <div key={item.label} className="relative group">
                <a
                  href={`#${item.id}`}
                  className={`flex items-center gap-1 px-3 lg:px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                    isActive
                      ? "bg-blue-700 text-white shadow-md"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-400"
                  }`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                  <ChevronDown size={14} />
                </a>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-150">
                  <div className="bg-white dark:bg-gray-900 border border-gray-200/20 dark:border-gray-700/30 rounded-xl shadow-xl p-1.5 min-w-[180px]">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.id}
                        href={`#${sub.id}`}
                        className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-150"
                        onClick={(e) => handleNavClick(e, sub.id)}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

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
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {theme === "light" ?
              <Moon size={18} className="text-gray-700 dark:text-gray-300" /> :
              <Sun size={18} className="text-yellow-500" />
            }
          </button>

          <button
            className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white transition-colors duration-200"
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
          {mobileNav.map((item) => {
            const isActive = item.id === activeId;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium mb-2 last:mb-0 ${
                  isActive
                    ? "bg-blue-700 text-white shadow-md"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-400"
                }`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
