import React from "react";
import SimpleCard from "@/components/ui/SimpleCard";
import AboutCursorEffect from "@/components/ui/AboutCursorEffect";

export default function About() {
  return (
    <AboutCursorEffect>
      <SimpleCard>
        <div className="section">
          <p className="section-header mb-3">About</p>
          <p className="main-color leading-relaxed text-gray-700 dark:text-gray-200">
            Hi, I am <span className="font-semibold text-purple-600 dark:text-purple-400">Jannat</span> — a passionate software engineer 
            currently pursuing my <span className="italic text-blue-600 dark:text-blue-400">Master of Science in Computer Science</span> 
            at Virginia Commonwealth University. I specialize in backend development, algorithms, and 
            machine learning. I have worked with modern tools like <span className="font-medium text-green-600 dark:text-green-400">React</span>, 
            <span className="font-medium text-cyan-600 dark:text-cyan-400"> React Native</span>, <span className="font-medium text-yellow-600 dark:text-yellow-400">Node.js</span>, 
            <span className="font-medium text-blue-700 dark:text-blue-500">Python</span>, and <span className="font-medium text-pink-600 dark:text-pink-400">NLP frameworks</span> to build 
            scalable, efficient, and user-centric applications.
            <br /><br />
            Whether I am optimizing data pipelines or crafting intuitive UI, I love solving real-world problems 
            through tech. When I am not coding, you will find me exploring new frameworks or chasing down bugs 
            like mastering the perfect serve in tennis — except bugs don&apos;t usually cooperate as nicely as tennis balls!
          </p>
        </div>
      </SimpleCard>
    </AboutCursorEffect>
  );
}
