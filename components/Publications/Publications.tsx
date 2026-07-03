import React from "react";

export default function Publications() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10 transition-all duration-300 w-full mx-auto">
      <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 sm:mb-8">
        Publications
      </h4>
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        Taylor, S., Dil, C., Shah, A., Jannat, Oldham, C., Upadhyay, A., Varughese, J., Yazbeck, N., &amp;
        McInnes, B. T. <span className="italic">NLP@VCU at BioASQ 2025: Information Extraction on the
        GutBrainIE Dataset.</span> BioASQ Workshop, Conference and Labs of the Evaluation Forum (CLEF), 2025.
      </p>
    </div>
  );
}
