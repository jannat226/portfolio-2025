interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
  logo: string;
}

export const experiences: Experience[] = [
  {
    title: "Graduate Research Assistant (Ph.D.)",
    company: "Bioinformatics & Machine Learning Lab, Virginia Commonwealth University",
    logo: "/company-logos/logo-1.png",
    date: "Jan 2026 – Present",
    description: [
      "Building and comparing vision-language models (ViT, DePlot) for chart understanding.",
      "Focusing on robustness to noisy, real-world scientific figures.",
      "Working on accessibility of visual data for blind and low-vision users."
    ],
  },
  {
    title: "Grading Assistant",
    company: "CMSC Advanced Algorithms, Virginia Commonwealth University",
    logo: "/company-logos/logo-1.png",
    date: "Sep 2025 – Dec 2025",
    description: [
      "Graded assignments and exams for a graduate-level advanced algorithms course."
    ],
  },
  {
    title: "Teaching Assistant",
    company: "ENGR 101 Introduction to Engineering, Virginia Commonwealth University",
    logo: "/company-logos/logo-1.png",
    date: "Sep 2025 – Dec 2025",
    description: [
      "Supported first-year students with fundamentals in Arduino, circuit theory, and theremin projects."
    ],
  },
  {
    title: "Graduate Student Software Engineer",
    company: "Engineering Career Services, Virginia Commonwealth University",
    logo: "/company-logos/logo-1.png",
    date: "Jun 2025 – Jul 2025",
    description: [
      "Built and deployed a student-alumni mentoring interface using Google Sheets and Apps Script.",
      "Implemented features such as mentor profile viewing and automated email delivery.",
      "The platform is now used by more than 200 students, improving engagement and accessibility."
    ],
  },
  {
    title: "Research Assistant",
    company: "NLP Lab, Virginia Commonwealth University",
    logo: "/company-logos/logo-1.png",
    date: "Jan 2025 – Dec 2025",
    description: [
      "Developed Retrieval-Augmented Generation (RAG) pipelines with LLMs for relationship extraction from 1,500+ biomedical abstracts.",
      "Preprocessed biomedical abstracts using Python for clean, tokenized inputs, boosting model efficiency by 30%.",
      "Contributed to a relation extraction model using PyTorch, improving F1-score by 12% through architecture refinement and training.",
      "Work culminated in an MS thesis and the BioASQ 2025 shared-task paper (NLP@VCU at BioASQ 2025)."
    ],
  },
  {
    title: "Teaching Assistant",
    company: "EGRE 246 Programming Using C, Virginia Commonwealth University",
    logo: "/company-logos/logo-1.png",
    date: "Sep 2024 – Dec 2024",
    description: [
      "Mentored 20+ students weekly, guiding them in debugging, data structures, and algorithmic thinking."
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Raceme Tenders LLP, Delhi, India",
    logo: "/company-logos/logo-2.png",
    date: "Oct 2021 – Feb 2022",
    description: [
      "Migrated a legacy PHP/MySQL site to AWS in a three-person team, reducing server downtime by 20%.",
      "Built a web crawler with Selenium extracting 500+ documents daily from the Karnataka e-Procurement portal."
    ],
  },
];
