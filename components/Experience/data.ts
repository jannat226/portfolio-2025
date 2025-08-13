interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
  logo: string;
}

export const experiences: Experience[] = [
  {
    title: "Research Assistant",
    company: "Natural Language Processing Lab, Virginia Commonwealth University",
    logo: "/company-logos/logo-1.png",
    date: "Jan 2025 – Present",
    description: [
      "Preprocessed 10,000+ biomedical abstracts using Python for clean, tokenized inputs, boosting model efficiency by 30%.",
      "Contributed to a relation extraction model using PyTorch, improving F1-score by 12% through architecture refinement and training.",
      "Used TorchMetrics to automate evaluation across 18 relation classes, reducing manual validation time by 50%."
    ],
  },
  {
    title: "Graduate Student Software Engineer",
    company: "Virginia Commonwealth University",
    logo: "/company-logos/logo-1.png",
    date: "Jun 2025 – Jul 2025",
    description: [
      "Developed a student-alumni mentoring interface using Google Sheets and Apps Script for Career Services.",
      "Implemented features such as mentor profile viewing and automated email delivery, enhancing user experience.",
      "The platform is now being used by more than 100 students, significantly improving engagement and accessibility."
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Virginia Commonwealth University",
    logo: "/company-logos/logo-1.png",
    date: "Sep 2024 – Dec 2024",
    description: [
      "Mentored 20+ students weekly in C programming labs, guiding them in debugging, data structures, and algorithmic thinking.",
      "Supported 20+ first-year students in Engineering 101 with fundamentals in Arduino, circuit theory, and theremin projects."
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Raceme Tenders LLP",
    logo: "/company-logos/logo-2.png",
    date: "Mar 2022 – Mar 2022",
    description: [
      "Upgraded legacy PHP codebase for 5+ modules and successfully deployed to AWS via SSH, reducing server downtime by 20%."
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Raceme Tenders LLP",
    logo: "/company-logos/logo-2.png",
    date: "Sep 2021 – Sep 2021",
    description: [
      "Built an automated Python crawler with Selenium to extract 1000+ tenders from the Karnataka e-Procurement portal in collaboration with one teammate."
    ],
  },
];
