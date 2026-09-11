import React from 'react';

export const metadata = {
  title: 'About JXP Guide — Journaling Experiences',
  description: 'Our philosophy: Comfort. Fun. Spontaneity. Purpose.',
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#0D0D0D] py-20 px-6 max-w-4xl mx-auto text-white">
      <div className="text-center space-y-4 mb-16">
        <span className="text-[11px] font-bold tracking-[0.28em] text-[#B3231C] uppercase">
          OUR PHILOSOPHY
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold">
          Experiences for a Better You.
        </h1>
        <p className="font-script text-[#C9A66B] text-2xl">
          Comfort. Fun. Spontaneity. Purpose.
        </p>
      </div>

      <div className="space-y-8 text-zinc-300 text-sm md:text-base leading-relaxed">
        <p>
          At JXP Guide (&ldquo;Journaling Experiences&rdquo;), we believe that life expands through deliberate encounters with beauty, cuisine, art, and hospitality. We are not an algorithmic aggregator or a generic booking engine. We are an editorial house championing independent creators and boutique operators who pour their soul into what they offer.
        </p>
        <p>
          Every hotel, retreat, dining counter, and cultural gathering profiled in our guide has been vetted for intention, character, and resonance. When our audience travels with JXP, they do not simply visit; they immerse, reflect, and return renewed.
        </p>
      </div>
    </div>
  );
}
