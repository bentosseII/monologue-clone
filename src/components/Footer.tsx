"use client";

import { Apple, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-32 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#0a1a1a] overflow-hidden">
      {/* Large watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="font-serif italic watermark text-[#1a2a2a]">
          Monologue
        </h2>
      </div>

      {/* Radio device */}
      <div className="relative z-10 flex justify-center mb-24">
        <div className="relative bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] rounded-2xl p-6 shadow-2xl transform -rotate-6">
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-[#1a1a1a] rounded-lg grid grid-cols-5 gap-1 p-2">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-[#3a3a3a] rounded-full" />
              ))}
            </div>
            <div className="w-32 h-20 bg-gradient-to-b from-[#00d4d4] to-[#006666] rounded-lg flex items-end justify-center pb-3 overflow-hidden">
              <div className="flex gap-0.5 items-end h-10">
                {Array.from({ length: 20 }).map((_, i) => (
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

      {/* Footer links */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6 font-mono text-xs text-gray-400">
            <span>© 2025 Monologue All rights reserved.</span>
            <a href="#" className="hover:text-white transition-colors">Terms of service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-white transition-colors">Changelog</a>
            <a href="#" className="hover:text-white transition-colors">Data privacy</a>
          </div>
          <div className="flex gap-4">
            <a href="https://every.to" className="text-gray-400 hover:text-white transition-colors">
              <span className="font-serif italic text-lg">Every</span>
            </a>
            <a href="https://x.com/usemonologue" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
