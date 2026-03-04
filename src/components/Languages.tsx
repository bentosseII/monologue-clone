"use client";

const languages = [
  "Spanish", "English", "Portuguese", "Cantonese", "Japanese", "Korean",
  "Russian", "Italian", "German", "French", "Hindi", "Bengali", "Telugu",
  "Tamil", "Gujarati", "Marathi", "Punjabi", "Malayalam"
];

export default function Languages() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0a1a1a] via-[#0f1f1f] to-[#0a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl italic">
          Supports 100+ languages
        </h2>
      </div>
      
      {/* Marquee */}
      <div className="relative">
        <div className="flex animate-marquee">
          {[...languages, ...languages].map((lang, i) => (
            <span key={i} className="font-mono text-sm text-gray-400 whitespace-nowrap px-6">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
