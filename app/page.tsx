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
      <Navbar />
      <motion.div
        initial={{ y: -4, filter: "blur(8px)" }}
        animate={{ y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen w-full max-w-6xl mx-auto flex flex-col pt-24 px-4 sm:px-6 lg:px-8 gap-8 relative z-10"
      >
        <div id="home" className="scroll-mt-24"><Header /></div>
        {/* <div id="about" className="scroll-mt-24"><About /></div> */}
        <div id="experience" className="scroll-mt-24"><Experience /></div>
        <div id="projects" className="scroll-mt-24"><Projects /></div>
        <div id="techstack" className="scroll-mt-24"><TechStack /></div>
      </motion.div>
    </>
  );
}