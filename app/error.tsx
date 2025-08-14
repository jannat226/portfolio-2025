"use client";
import React from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8">
      <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-2xl shadow-2xl px-8 py-10 max-w-lg w-full text-center animate-fade-in">
        <div className="mb-4">
          <svg className="mx-auto w-12 h-12 text-red-400 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong.</h2>
        <p className="mb-4 text-base text-gray-600 dark:text-gray-300">{error?.message || "An unexpected error occurred. Please try refreshing the page."}</p>
        <button
          onClick={() => reset()}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
