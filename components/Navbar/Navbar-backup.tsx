"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [hue, setHue] = useState(0);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    
    // Animate hue for rainbow effect
    const interval = setInterval(() => {
      setHue(prev => (prev + 1) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const navItems = ["Home", "About", "Experience", "Projects", "Tech Stack"];

  return (
    <nav 
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500"
      onMouseMove={handleMouseMove}
    >
      {/* Glowing background effect */}
      {mounted && (
        <div 
          className="absolute inset-0 rounded-full opacity-20 blur-md"
          style={{
            background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, hsl(${hue}, 100%, 50%), transparent)`,
          }}
        />
      )}
      
      {/* Particle effects */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Main navbar container */}
      <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-white/20 dark:border-gray-700/50 rounded-full px-6 py-2 shadow-2xl">
        {/* Crazy rainbow border effect */}
        {mounted && (
          <div 
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              background: `conic-gradient(from ${hue}deg, 
                hsl(${hue}, 100%, 50%), 
                hsl(${(hue + 60) % 360}, 100%, 50%), 
                hsl(${(hue + 120) % 360}, 100%, 50%), 
                hsl(${(hue + 180) % 360}, 100%, 50%), 
                hsl(${(hue + 240) % 360}, 100%, 50%), 
                hsl(${(hue + 300) % 360}, 100%, 50%), 
                hsl(${hue}, 100%, 50%))`,
              padding: '2px',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'xor',
            }}
          />
        )}

        <div className="relative flex items-center justify-between gap-6">
          {/* Logo/Brand */}
          <Link href="#" className="font-bold text-lg relative group">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </span>
            {mounted && (
              <Sparkles 
                className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-spin" 
                style={{
                  animationDuration: '3s',
                  filter: `hue-rotate(${hue}deg)`,
                }}
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setActiveItem(item)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${
                  activeItem === item
                    ? "text-white"
                    : "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                }`}
              >
                {/* Active item background with crazy effect */}
                {mounted && activeItem === item && (
                  <div 
                    className="absolute inset-0 rounded-full animate-pulse"
                    style={{
                      background: `linear-gradient(45deg, hsl(${hue}, 100%, 50%), hsl(${(hue + 60) % 360}, 100%, 50%))`,
                    }}
                  />
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="relative z-10">{item}</span>
                
                {/* Glowing dots on hover */}
                {mounted && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Theme Toggle with extra effects */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-blue-500 dark:to-purple-600 transition-all duration-500 hover:scale-110 relative group"
          >
            {mounted && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-blue-500 dark:to-purple-600 animate-pulse opacity-50" />
            )}
            <div className="relative z-10">
              {theme === "light" ? (
                <Moon size={18} className="text-white" />
              ) : (
                <Sun size={18} className="text-white animate-spin" style={{ animationDuration: '8s' }} />
              )}
            </div>
            
            {/* Orbiting particles */}
            {mounted && (
              <div className="absolute inset-0">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 90 + hue}deg) translateX(20px) translateY(-50%)`,
                      animationDuration: '2s',
                    }}
                  />
                ))}
              </div>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-all duration-300 hover:scale-110"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 min-w-[200px] md:hidden">
          {/* Crazy background effect for mobile menu */}
          {mounted && (
            <div 
              className="absolute inset-0 rounded-2xl opacity-10"
              style={{
                background: `radial-gradient(circle, hsl(${hue}, 100%, 50%), transparent)`,
              }}
            />
          )}
          
          <div className="relative flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => {
                  setActiveItem(item);
                  setMenuOpen(false);
                }}
                className="block px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
