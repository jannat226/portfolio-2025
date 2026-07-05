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
    <div className="section py-8 flex flex-col items-center justify-center w-full mx-auto">
      <p className="section-header mb-6 text-2xl font-bold text-left w-full max-w-2xl">About</p>
      <div className="main-color leading-relaxed text-gray-700 dark:text-gray-200 text-base sm:text-lg lg:text-xl space-y-6 max-w-2xl mx-auto text-justify">

        <p>
          Hi, I&apos;m <span className="font-semibold text-blue-700 dark:text-blue-400">Jenny (Jannat),</span> a PhD researcher in Computer Science at VCU. I work on vision models and vision-language models, mostly around making visual and scientific information more accessible.
        </p>
        <p>
          Most of what I do comes down to building efficient, low-compute multimodal models, with blind and low-vision users in mind from the start rather than as an afterthought. I co-authored a paper at <span className="font-semibold">BioASQ 2025 (CLEF)</span> on biomedical information extraction.
        </p>
        <p>
          My work spans <span className="font-semibold">machine learning</span>, <span className="font-semibold">multimodal AI and accessibility</span>, <span className="font-semibold">efficient model design</span>, <span className="font-semibold">RAG pipelines</span>, and <span className="font-semibold">full-stack application development</span>, with a strong focus on <span className="font-semibold">NLP</span> and research-driven problem solving.
        </p>
        <p>
          Off the clock: I believe learning new skills keeps my brain active, so I&apos;m always picking up something new, though tennis is my all-time favorite, where the ball make my body move.
        </p>
      </div>
    </div>
  );
}
