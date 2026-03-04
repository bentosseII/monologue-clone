"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl">Pricing</h2>
          <p className="font-mono text-sm text-gray-400">
            Download the app and get started for free.
          </p>

          {/* Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex bg-[#1a1a1a] rounded-lg p-1">
              <button
                onClick={() => setAnnual(false)}
                className={`px-6 py-2 rounded-md font-mono text-sm transition-colors ${
                  !annual ? "bg-white text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-6 py-2 rounded-md font-mono text-sm transition-colors ${
                  annual ? "bg-white text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                Annual (Save $20)
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Trial */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a]">
            <h3 className="font-serif text-xl mb-2">Trial</h3>
            <div className="mb-6">
              <span className="font-serif text-5xl">Free</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "1,000 words included",
                "Offline transcription support",
                "Context-aware text formatting",
                "Support for 100+ languages",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 font-mono text-sm text-gray-400">
                  <Check className="w-4 h-4 text-[#00d4d4]" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-lg border border-white/20 font-mono text-sm hover:bg-white/5 transition-colors">
              Get started
            </button>
          </div>

          {/* Pro */}
          <div className="relative bg-gradient-to-br from-[#0a1a1a] to-[#1a2a2a] rounded-2xl p-8 border border-[#00d4d4]/30">
            {/* Badge */}
            <div className="absolute -top-3 -right-3">
              <div className="bg-[#00d4d4] text-black font-mono text-[10px] px-3 py-1 rounded-full rotate-12">
                EARLY BIRD PRICING
              </div>
            </div>

            <h3 className="font-serif text-xl mb-2">Monologue Pro</h3>
            <div className="mb-6">
              <span className="font-mono text-xl text-gray-500 line-through mr-2">
                ${annual ? "144" : "12"}
              </span>
              <span className="font-serif text-5xl">${annual ? "100" : "10"}</span>
              <span className="font-mono text-sm text-gray-400">{annual ? "/yr" : "/mo"}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Unlimited words",
                "Offline transcription support",
                "Context-aware text formatting",
                "Support for 100+ languages",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 font-mono text-sm text-gray-400">
                  <Check className="w-4 h-4 text-[#00d4d4]" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-lg bg-[#00d4d4] text-black font-mono text-sm font-medium hover:bg-[#00b8b8] transition-colors">
              Get started
            </button>
          </div>
        </div>

        {/* Every subscription */}
        <div className="text-center mt-12 space-y-2">
          <p className="font-mono text-sm text-gray-400">or</p>
          <p className="font-mono text-sm">
            <a href="https://every.to/subscribe" className="text-[#00d4d4] hover:underline">
              Subscribe to Every
            </a>
          </p>
          <p className="font-mono text-xs text-gray-500 max-w-md mx-auto">
            Get the Every bundle for full access to Monologue along with all of our other AI apps
            (<a href="https://cora.computer" className="text-[#00d4d4] hover:underline">Cora</a>,{" "}
            <a href="#" className="text-[#00d4d4] hover:underline">Spiral</a>,{" "}
            <a href="#" className="text-[#00d4d4] hover:underline">Sparkle</a>).
          </p>
        </div>
      </div>
    </section>
  );
}
