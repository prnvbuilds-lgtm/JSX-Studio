import React from 'react';

export const MyListings: React.FC = () => {
  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#222222] pb-6">
        <div>
          <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-1">
            MANAGED PROPERTIES
          </span>
          <h1 className="font-serif text-3xl font-bold text-white">My Listings</h1>
        </div>
        <button className="px-6 py-3 rounded-full bg-[#B3231C] hover:bg-[#8F1C16] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg">
          + Add New Listing
        </button>
      </div>

      <div className="bg-[#181818] border border-[#282828] rounded-xl overflow-hidden shadow-lg">
        <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#262626]">
          <div className="flex items-center gap-4">
            <div
              className="w-20 h-20 rounded-lg bg-cover bg-center border border-[#303030] flex-shrink-0"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=300&q=80')",
              }}
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
                  Live
                </span>
                <span className="text-xs text-zinc-400">West Palm Beach, FL</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mt-1">The Coastal Table &amp; Raw Bar</h3>
              <p className="text-xs text-zinc-400 mt-0.5">Dining &bull; Wood-fired seasonal gastronomy</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-xs font-semibold text-white border border-[#2E2E2E] transition-colors">
              Edit Content
            </button>
            <button className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors">
              Preview
            </button>
          </div>
        </div>

        <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#141414] text-xs">
          <div>
            <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">Price Tier</span>
            <span className="font-mono font-bold text-white text-sm">$$$</span>
          </div>
          <div>
            <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">Rating</span>
            <span className="font-bold text-amber-400 text-sm">4.9 &starf; (182 reviews)</span>
          </div>
          <div>
            <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">Monthly Clicks</span>
            <span className="font-bold text-white text-sm">1,980 clicks</span>
          </div>
          <div>
            <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">Direct Booking URL</span>
            <span className="font-mono text-[#C9A66B] text-[11px] truncate block">thecoastaltable.com/res</span>
          </div>
        </div>
      </div>
    </div>
  );
};
