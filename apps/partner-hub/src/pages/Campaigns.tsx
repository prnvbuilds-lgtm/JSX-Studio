import React from 'react';

export const Campaigns: React.FC = () => {
  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#222222] pb-6">
        <div>
          <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-1">
            MARKETING INITIATIVES
          </span>
          <h1 className="font-serif text-3xl font-bold text-white">Campaigns &amp; Features</h1>
        </div>
        <button className="px-6 py-3 rounded-full bg-[#B3231C] hover:bg-[#8F1C16] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg">
          + Launch Campaign
        </button>
      </div>

      <div className="space-y-4">
        {[
          {
            title: 'Summer Tastemakers Spotlight',
            type: 'Editorial Spotlight',
            dates: 'Jun 01, 2026 – Aug 31, 2026',
            status: 'Active',
            impressions: '42,900',
            clicks: '3,120',
          },
          {
            title: 'Equinox Harvest Tasting Promotion',
            type: 'Seasonal Feature',
            dates: 'Sep 15, 2026 – Oct 30, 2026',
            status: 'Scheduled',
            impressions: 'Pacing...',
            clicks: '—',
          },
        ].map((camp, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-[#181818] border border-[#282828] shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B3231C] block mb-1">
                  {camp.type}
                </span>
                <h3 className="font-serif text-xl font-bold text-white">{camp.title}</h3>
                <span className="text-xs text-zinc-400 mt-1 block">{camp.dates}</span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  camp.status === 'Active'
                    ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/40'
                    : 'bg-zinc-800 text-zinc-300'
                }`}
              >
                {camp.status}
              </span>
            </div>

            <div className="pt-4 border-t border-[#262626] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">Impressions</span>
                <span className="font-bold text-white text-sm">{camp.impressions}</span>
              </div>
              <div>
                <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">Direct Clicks</span>
                <span className="font-bold text-white text-sm">{camp.clicks}</span>
              </div>
              <div>
                <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">Target Vertical</span>
                <span className="font-bold text-[#C9A66B] text-sm">Dining &bull; Tastemakers</span>
              </div>
              <div className="flex items-center justify-end">
                <button className="text-xs text-zinc-300 hover:text-white font-semibold underline underline-offset-4">
                  View Analytics &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
