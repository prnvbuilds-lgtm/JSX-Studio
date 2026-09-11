import React from 'react';
import { wpClient, GET_LISTINGS_BY_VERTICAL_QUERY, Listing } from '@jxp/graphql-client';

export const revalidate = 60;

export const metadata = {
  title: 'Events & Experiences — JXP Guide',
  description: 'Intimate salons, cultural gatherings, and curated festivals.',
};

export default async function EventsPage() {
  return (
    <div className="w-full bg-[#0D0D0D] py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12 border-b border-[#222222] pb-8">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-2">
          GATHERINGS &amp; SALONS
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
          Events &amp; Cultural Gatherings
        </h1>
        <p className="text-zinc-400 text-sm max-w-2xl">
          Curated culinary salons, acoustic performances, harvest dinners, and retreat weekends.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: 'Equinox Harvest Dinner & Acoustic Series',
            date: 'October 14, 2026',
            location: 'Hudson Valley Estate',
            desc: 'Six courses paired with organic regional ciders and live classical guitar under open skies.',
            bg: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
          },
          {
            title: 'The Art of Wine & Architectural Solitude',
            date: 'November 04, 2026',
            location: 'Sonoma Heights',
            desc: 'An immersive salon exploring architectural design philosophy with leading California vintners.',
            bg: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
          },
        ].map((event, idx) => (
          <div key={idx} className="bg-[#181818] border border-[#282828] rounded-xl overflow-hidden card-hover-transition">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${event.bg}')` }} />
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs font-bold text-[#B3231C] mb-2 uppercase tracking-wider">
                <span>{event.date}</span> &bull; <span>{event.location}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">{event.desc}</p>
              <button className="px-6 py-2.5 rounded-full bg-[#B3231C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#8F1C16] transition-colors">
                Reserve Attendance &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
