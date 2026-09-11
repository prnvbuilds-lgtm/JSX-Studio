import React from 'react';

export const revalidate = 60;

export const metadata = {
  title: 'Community & Purpose — JXP Guide',
  description: 'Hospitality brands that give back, champion sustainability, and empower local artisans.',
};

export default function CommunityPage() {
  return (
    <div className="w-full bg-[#0D0D0D] py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12 border-b border-[#222222] pb-8">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-2">
          PEOPLE &amp; PURPOSE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
          Community &amp; Local Impact
        </h1>
        <p className="text-zinc-400 text-sm max-w-2xl">
          Hospitality is profoundly human. We celebrate purveyors who safeguard biodiversity, nurture generational crafts, and lift their communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: 'Regenerative Agriculture in Hospitality',
            org: 'Hudson Valley Soil Collective',
            desc: 'How 14 boutique restaurants partner with regional family farms to establish zero-waste composting and soil replenishment.',
          },
          {
            title: 'Preserving Heritage Indigo Weaving',
            org: 'Artisans of the Blue Ridge',
            desc: 'Supporting women textile weavers supplying luxury boutique hotels with bespoke linens and tapestries.',
          },
        ].map((item, idx) => (
          <div key={idx} className="p-8 rounded-xl bg-[#181818] border border-[#282828]">
            <span className="text-xs uppercase tracking-widest text-[#B3231C] font-bold block mb-2">{item.org}</span>
            <h3 className="font-serif text-2xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">{item.desc}</p>
            <span className="text-xs font-semibold text-white underline underline-offset-4 cursor-pointer hover:text-red-400">
              Read the Community Journal &rarr;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
