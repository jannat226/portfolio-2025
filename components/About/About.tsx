// import React from "react";

// export default function About() {
//   return (
//     <div className="section">
//       <p className="section-header">About</p>
//       {/* Replace this p tag with more info about yourself. */}
//       <p className="main-color ">
//       Hi, I am Jannat , a passionate software engineer with a strong interest in backend development, data structures,  algorithms and Machine Learning. I am currently pursuing my Master of Science in Computer Science at Virginia Commonwealth University. With experience in NLP, React,React Native,Node JS, Python and other modern technologies. I enjoy building efficient, scalable solutions and creating user-friendly applications. When I am not coding, I am exploring new frameworks, honing my skills, or diving into projects that solve real-world problems.
//       </p>
//     </div>
//   );
// }
import React from "react";

export default function About() {
  return (
    <div className="section py-8">
      <p className="section-header mb-6 ">About </p>
      <div className="main-color leading-relaxed text-gray-700 dark:text-gray-200 text-base sm:text-lg lg:text-xl space-y-4">
        <p>
          Hi, I'm <span className="font-semibold text-purple-600 dark:text-purple-400">Jannat</span> — a software engineer and <span className="font-medium text-blue-600 dark:text-blue-400">AI/ML researcher</span> pursuing my <span className="italic text-blue-600 dark:text-blue-400">M.S. in Computer Science</span> at Virginia Commonwealth University.
        </p>
        
        <p>
          I specialize in <span className="font-medium text-green-600 dark:text-green-400">machine learning</span>, <span className="font-medium text-cyan-600 dark:text-cyan-400">backend development</span>, and <span className="font-medium text-yellow-600 dark:text-yellow-400">NLP</span>, with hands-on experience in tools like <span className="font-medium text-pink-600 dark:text-pink-400">React</span>, <span className="font-medium text-orange-600 dark:text-orange-400">Node.js</span>, <span className="font-medium text-blue-700 dark:text-blue-500">Python</span>,<br/> <span className="font-medium text-red-600 dark:text-red-400">PyTorch</span>, and <span className="font-medium text-indigo-600 dark:text-indigo-400">transformer-based frameworks</span>.
        </p>
        
        <p>
          From optimizing <span className="font-semibold text-purple-600 dark:text-purple-400"> biomedical data pipelines </span>to building intuitive analytics tools.<br/> I love turning complex ideas into real-world solutions.<br/> When I'm not coding, you'll find me exploring new tech or playing tennis — where, unlike debugging, the ball usually plays fair.
        </p>
      </div>
    </div>
  );
}
