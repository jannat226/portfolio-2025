export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Planned';
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "GutBrainIE",
    description: "Designed a robust relation extraction pipeline focused on gut-brain biome axis literature.",
    longDescription: "Built multiple CNN-based models and an ensemble using PyTorch Lightning for extracting relationships from gut-brain axis research papers.",
    technologies: ["Python", "PyTorch", "HuggingFace", "NLP", "CNN"],
    image: "/gutBrain.png",
    githubUrl: "https://github.com/NLPatVCU/GutBrainIE/tree/cnn",
    featured: true,
    status: "Completed",
    highlights: [
      "CNN-based ensemble models",
      "PyTorch Lightning implementation",
      "Gut-brain axis literature analysis"
    ]
  },
  {
    id: 2,
    title: "Tennis Video Analysis System",
    description: "Analyzes tennis videos for player & ball tracking and court line detection using modern computer vision.",
    longDescription: "Comprehensive computer vision system that tracks players, ball trajectory, and court lines in tennis videos for performance analysis, with a Streamlit dashboard for match analytics.",
    technologies: ["Python", "YOLOv8", "OpenCV", "Streamlit"],
    image: "/tennisAnalysis.png",
    githubUrl: "https://github.com/jannat226/TennisAnalysis",
    liveUrl: "https://www.youtube.com/watch?v=3LF6MpwThv8",
    featured: true,
    status: "Completed",
    highlights: [
      "Real-time player tracking",
      "Ball trajectory analysis",
      "Court line detection",
      "Streamlit analytics dashboard"
    ]
  },
  {
    id: 3,
    title: "RideShare",
    description: "Real-time carpooling app connecting colleagues and friends who need a ride with those who can provide one to campus.",
    longDescription: "React Native mobile application that connects people needing rides with those offering rides to campus, featuring real-time matching, secure messaging, and OpenStreetMap-based routing.",
    technologies: ["React Native", "Firebase", "Node.js", "OpenStreetMap"],
    image: "/rideShare.png",
    githubUrl: "https://github.com/jannat226/ridesharee",
    liveUrl: "https://drive.google.com/file/d/1XxnamxQQjIr0FCgBIVfFsJ6nYflYDKz/view?usp=drive_link",
    featured: true,
    status: "Completed",
    highlights: [
      "Real-time ride matching",
      "Secure messaging system",
      "OpenStreetMap-based routing"
    ]
  },
  {
    id: 4,
    title: "RAG Research Platform",
    description: "AI-powered research blogging platform with real research paper integration, vector search capabilities, and beautiful animated UI.",
    longDescription: "A modern, full-stack blogging platform designed specifically for researchers and academics, featuring AI-powered assistance with real research paper integration from ArXiv API, Neo4j vector search capabilities, and responsive animated interface.",
    technologies: ["React", "Node.js", "MongoDB", "Neo4j", "OpenAI", "Express", "JWT"],
    image: "/ragResearch.png",
    githubUrl: "https://github.com/jannat226/ragResearch",
    liveUrl: "https://research-blog-rag.onrender.com/",
    featured: true,
    status: "Completed",
    highlights: [
      "AI-powered research assistant",
      "Real research paper integration",
      "Vector similarity search with Neo4j",
      "Responsive animated UI",
      "ArXiv API integration"
    ]
  },
  {
    id: 5,
    title: "Crawler-Python Script",
    description: "Automation for downloading thousands of the tenders files locally from the government tender website",
    longDescription: "Automated Python script using Selenium to download thousands of tender documents from the Karnataka e-Procurement government website.",
    technologies: ["Python", "Selenium", "Web Scraping", "Automation"],
    image: "/crawlerImage.png",
    githubUrl: "https://bitbucket.org/jannatjiya/karnataka_eprocurement/src/main/tender_test/test_tender.py",
    featured: true,
    status: "Completed",
    highlights: [
      "Thousands of documents processed",
      "Government website automation",
      "Selenium-based scraping"
    ]
  }
];
