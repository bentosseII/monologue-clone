"use client";

import { Apple } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#0f0f0f] to-[#0f0f0f] opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Headline */}
        <div className="space-y-8">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl italic leading-tight">
            Effortless voice dictation that speaks your language
          </h1>
        </div>

        {/* Right: CTA */}
        <div className="flex flex-col items-start lg:items-end space-y-4">
          <p className="font-mono text-sm text-gray-400 max-w-sm">
            Work <em className="text-white not-italic font-medium">3x faster</em> using perfect voice dictation that knows what you mean in every situation.
          </p>
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-mono text-sm hover:bg-gray-200 transition-colors">
            <Apple className="w-5 h-5" />
            Download for Mac
          </button>
          <p className="font-mono text-xs text-gray-500">
            Included in the <a href="https://every.to" className="text-[#00d4d4] hover:underline">Every</a> subscription
          </p>
        </div>
      </div>

      {/* Made by Every badge */}
      <div className="relative z-10 mt-12">
        <div className="border border-dashed border-gray-600 px-4 py-2 rounded">
          <p className="font-mono text-xs text-gray-400 tracking-wider">
            MADE BY <span className="font-serif italic text-white">EVERY</span>
          </p>
        </div>
      </div>

      {/* Radio Device Mockup */}
      <div className="relative z-10 mt-8 flex flex-col items-center">
        <div className="relative bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] rounded-2xl p-6 shadow-2xl">
          <div className="flex gap-4">
            {/* Speaker grille */}
            <div className="w-24 h-24 bg-[#1a1a1a] rounded-lg grid grid-cols-6 gap-1 p-2">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-[#3a3a3a] rounded-full" />
              ))}
            </div>
            {/* Screen with waveform */}
            <div className="w-40 h-24 bg-gradient-to-b from-[#00d4d4] to-[#006666] rounded-lg flex items-end justify-center pb-4 overflow-hidden">
              <div className="flex gap-0.5 items-end h-12">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-[#0a0a0a] rounded-t"
                    style={{ height: `${Math.random() * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
          <button className="mt-4 w-full flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-mono text-xs">
            <Apple className="w-4 h-4" />
            Download for Mac
          </button>
        </div>
      </div>

      {/* Large watermark */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <h2 className="font-serif italic watermark text-center text-white/5">
          Monologue
        </h2>
      </div>
    </section>
  );
}
