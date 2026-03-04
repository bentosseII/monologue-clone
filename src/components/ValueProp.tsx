"use client";

import { Apple } from "lucide-react";

export default function ValueProp() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Text */}
        <div className="space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
            The shortest distance between talking and typing
          </h2>
          <p className="font-mono text-sm text-gray-400 max-w-md">
            Stay in the flow. Speak naturally. Monologue understands your work, your writing style, and your vocabulary.
          </p>
          <button className="flex items-center gap-2 border border-white/20 bg-transparent text-white px-6 py-3 rounded-lg font-mono text-sm hover:bg-white/5 transition-colors">
            <Apple className="w-5 h-5" />
            Download for Mac
          </button>
        </div>

        {/* Right: Feature Cards + Email Demo */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Feature list */}
          <div className="space-y-4 flex-shrink-0">
            <FeatureItem
              title="Auto formatting"
              description="Monologue will reformat its output based on what and where you're writing."
              active
            />
            <FeatureItem
              title="Deep context"
              description="Monologue can see your screen and understand what you're referencing."
            />
            <FeatureItem
              title="Auto dictionary"
              description="Speak naturally with your own vocabulary. Monologue will add any unique language to its dictionary automatically."
            />
          </div>

          {/* Email mockup */}
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a] flex-1">
            <div className="flex gap-1.5 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            </div>
            <div className="space-y-3 font-mono text-xs">
              <p className="text-gray-400">To: <span className="text-white">cillian@breva.com</span></p>
              <p className="text-gray-400">Subject: <span className="text-white">Weekly report + partnership update with Velori</span></p>
              <p className="text-gray-400">From: <span className="text-white">dangelo@breva.com</span></p>
              <div className="border-t border-[#2a2a2a] pt-3 mt-3">
                <p className="text-gray-300 leading-relaxed">
                  Hey Cyllian, we have a lot to celebrate this week. Here are the greatest hits.
                  We hit $150K MRR and NRR is at 105%. 3 new enterprise clients signed and
                  onboarding, including Velory. Every has been rolled out throughout the
                  organization. 70% of the org is using Sparkle, Spiral, Cora, and Monologue.
                  LTV to CAC is 4:1 and trending upward. Let&apos;s keep it up! Diangelo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, description, active = false }: { title: string; description: string; active?: boolean }) {
  return (
    <div className={`p-4 rounded-lg transition-colors ${active ? "bg-[#00d4d4]/10 border border-[#00d4d4]/30" : "bg-[#1a1a1a]"}`}>
      <h3 className="font-mono text-sm font-medium text-white mb-1">{title}</h3>
      <p className="font-mono text-xs text-gray-400">{description}</p>
    </div>
  );
}
