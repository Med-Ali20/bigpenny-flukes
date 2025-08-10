"use client";

import { useState } from "react";
import { FAQ } from "@/types";

const FaqTabs: React.FC<FAQ> = ({ title, QA }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-primary uppercase font-['Salford_Sans'] mb-4">
            {title}
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {QA.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Question */}
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full px-6 py-5 text-left cursor-pointer flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
              >
                <div
                  className="text-lg font-semibold text-gray-900 pr-4"
                  dangerouslySetInnerHTML={{ __html: item.Question }}
                />
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <div
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.Answer }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqTabs;