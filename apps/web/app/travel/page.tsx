import React from 'react';

export const revalidate = 60;

export const metadata = {
  title: 'Travel & Itineraries — JXP Guide',
  description: 'Uncommon journeys, intentional travel, and restorative retreats.',
};

export default function TravelPage() {
  return (
    <div className="w-full bg-[#0D0D0D] py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12 border-b border-[#222222] pb-8">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-2">
          EXPEDITIONS &amp; RETREATS
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
          Travel &amp; Perspectives
        </h1>
        <p className="text-zinc-400 text-sm max-w-2xl">
          Journeys designed to awaken wonder. Explore slow travel itineraries, wellness sanctuaries, and pristine remote escapes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'The Coastal Highlands of Big Sur', region: 'California', days: '4 Days', bg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80' },
          { title: 'Kyoto Zen Temples & Secret Tea Gardens', region: 'Japan', days: '7 Days', bg: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80' },
          { title: 'The Amalfi Cliffside Wine Route', region: 'Italy', days: '5 Days', bg: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80' },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#181818] border border-[#282828] rounded-xl overflow-hidden card-hover-transition group">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${item.bg}')` }} />
            <div className="p-6">
              <div className="flex justify-between items-center text-xs font-bold text-[#C9A66B] uppercase tracking-wider mb-2">
                <span>{item.region}</span>
                <span>{item.days}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Curated lodging, private transfers, and reservations at unlisted culinary tables.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
