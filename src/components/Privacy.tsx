"use client";

import { Lock, Eye, Database, Settings } from "lucide-react";

const privacyFeatures = [
  {
    icon: Lock,
    text: "No audio files or transcripts are saved on our servers.",
  },
  {
    icon: Eye,
    text: "Deep context screenshots are deleted immediately.",
  },
  {
    icon: Database,
    text: "Zero LLM data retention.",
  },
  {
    icon: Settings,
    text: "Custom modes and dictionaries stay on your device.",
  },
];

export default function Privacy() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] flex items-center justify-center">
            <Lock className="w-10 h-10 text-gray-400" />
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl">
            Privacy is built into <em>M</em>onologue
          </h2>
          <p className="font-mono text-sm text-[#00d4d4]">You stay in control.</p>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {privacyFeatures.map((feature, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-gray-400" />
              </div>
              <p className="font-mono text-xs text-gray-400 max-w-[180px]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="font-mono text-sm text-gray-400">
          Your thoughts aren&apos;t our product.{" "}
          <span className="text-[#00d4d4]">Dictate freely.</span>
        </p>
      </div>
    </section>
  );
}
