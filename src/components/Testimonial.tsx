"use client";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
}

export default function Testimonial({ quote, name, title }: TestimonialProps) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a]" />
          <div>
            <p className="font-mono text-sm font-medium">{name}</p>
            <p className="font-mono text-xs text-gray-400">{title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
