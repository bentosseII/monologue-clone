"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const useCases = [
  {
    title: "Customer support",
    app: "Zendesk",
    example: "User gets 500 on checkout, repro on Chrome only, Windows 11.",
  },
  {
    title: "Sales",
    app: "Gmail",
    example: "I've attached the SOC 2 Type II packet you requested. I've also scheduled a 30-minute technical deep dive with SecOps.",
  },
  {
    title: "Students",
    app: "Word",
    example: "A rightward demand shift increases equilibrium price and quantity; a leftward demand shift lowers both.",
  },
  {
    title: "Designers",
    app: "Figma",
    example: "Increase padding to 24px, reduce corner radius to 8px.",
  },
  {
    title: "Coders",
    app: "Cursor",
    example: `function getSessionToken() { const token = auth.cache.get("sessionToken"); if (!token) { console.warn("Cache miss"); } return token; }`,
  },
  {
    title: "Executives",
    app: "Google Sheets",
    example: "Approve pilot budget up to $50K. Success metrics are adoption, retention, and NPS.",
  },
];

export default function UseCases() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % useCases.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + useCases.length) % useCases.length);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Monologue speaks your language
          </h2>
          <p className="font-mono text-sm text-gray-400 max-w-xl mx-auto">
            Everyone writes differently. Monologue adapts to your style, your context, and your vocabulary so you don&apos;t have to change a thing.
          </p>
          <button className="flex items-center gap-2 mx-auto border border-white/20 bg-transparent text-white px-6 py-3 rounded-lg font-mono text-sm hover:bg-white/5 transition-colors">
            Download for Mac
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden justify-center">
            {[-1, 0, 1].map((offset) => {
              const index = (currentIndex + offset + useCases.length) % useCases.length;
              const useCase = useCases[index];
              const isCenter = offset === 0;
              
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 w-80 bg-[#1a1a1a] rounded-2xl p-6 border border-[#2a2a2a] transition-all duration-300 ${
                    isCenter ? "scale-100 opacity-100" : "scale-90 opacity-50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-xl">{useCase.title}</h3>
                    <span className="font-mono text-xs bg-[#2a2a2a] px-2 py-1 rounded">
                      {useCase.app}
                    </span>
                  </div>
                  <div className="bg-[#0f0f0f] rounded-lg p-4 border border-[#2a2a2a]">
                    <div className="flex gap-1.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27ca40]" />
                    </div>
                    <p className="font-mono text-xs text-gray-300 leading-relaxed">
                      {useCase.example}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
