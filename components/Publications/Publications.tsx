import React from "react";

const publications = [
  {
    title: "NLP@VCU at BioASQ 2025: Information Extraction on the GutBrainIE Dataset",
    venue: "BioASQ Workshop, Conference and Labs of the Evaluation Forum (CLEF), 2025",
    authors: "Taylor, S., Dil, C., Shah, A., Jannat, Oldham, C., Upadhyay, A., Varughese, J., Yazbeck, N., & McInnes, B. T.",
    link: "https://ceur-ws.org/Vol-4038/paper_45.pdf",
  },
  {
    title: "Biomedical Retrieval-Augmented Generation for Relationship Extraction",
    venue: "In submission",
    authors: "Jannat, Dil, C., Arodz, T., & McInnes, B. T.",
    link: "#",
  },
  {
    title: "Relationship Extraction Using Retrieval Augmented Generation for Biomedical Datasets",
    venue: "M.S. Thesis, Virginia Commonwealth University, 2025",
    authors: "Jannat",
    link: "https://scholarscompass.vcu.edu/cgi/viewcontent.cgi?article=9404&context=etd",
  },
];

export default function Publications() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10 transition-all duration-300 w-full mx-auto">
      <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 sm:mb-8">
        Publications
      </h4>

      <div className="flex flex-col gap-5">
        {publications.map((item) => (
          <div key={item.title} className="border-l-2 border-blue-300 dark:border-blue-700 pl-4">
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.link && item.link !== "#" ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  {item.title}
                </a>
              ) : (
                <span className="font-semibold text-gray-800 dark:text-gray-100">{item.title}</span>
              )}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.authors}</p>
            <p className="text-sm italic text-gray-600 dark:text-gray-400 mt-1">{item.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
