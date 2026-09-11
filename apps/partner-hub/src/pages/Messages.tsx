import React from 'react';

export const Messages: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="border-b border-[#222222] pb-6">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-1">
          COMMUNICATIONS
        </span>
        <h1 className="font-serif text-3xl font-bold text-white">Partner Messages</h1>
        <p className="text-xs text-zinc-400 mt-1">Direct channel with your Partner Success Lead and the JXP editorial desk.</p>
      </div>

      <div className="bg-[#181818] border border-[#282828] rounded-xl overflow-hidden shadow-lg">
        <div className="p-4 border-b border-[#262626] bg-[#141414] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full bg-cover bg-center border border-red-900/50"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80')",
              }}
            />
            <div>
              <h4 className="font-bold text-sm text-white">Jasmine Reed</h4>
              <p className="text-[10px] text-zinc-400">Partner Success Lead &bull; Online</p>
            </div>
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">Active Thread</span>
        </div>

        <div className="p-6 space-y-4 min-h-[260px] bg-[#121212] text-xs">
          <div className="max-w-md bg-[#1E1E1E] border border-[#282828] p-4 rounded-xl text-zinc-300">
            <p className="text-white font-semibold mb-1">Jasmine Reed</p>
            Hello Chef Marcus! Your featured spotlight for &ldquo;Top Brunch Spots in West Palm Beach&rdquo; has been published and linked to your reservation portal. Let me know if you would like to update photography for the upcoming holiday season.
            <span className="block text-[10px] text-zinc-500 mt-2">Yesterday at 3:42 PM</span>
          </div>

          <div className="max-w-md ml-auto bg-[#B3231C]/20 border border-red-900/40 p-4 rounded-xl text-zinc-200 text-right">
            <p className="text-red-400 font-semibold mb-1">The Coastal Table</p>
            Thank you Jasmine! We are preparing our fall tasting menu and will submit high-res plated shots by Friday.
            <span className="block text-[10px] text-zinc-500 mt-2">Today at 10:15 AM</span>
          </div>
        </div>

        <div className="p-4 border-t border-[#262626] bg-[#161616] flex gap-3">
          <input
            type="text"
            placeholder="Type your message to Jasmine..."
            className="flex-1 bg-[#1F1F1F] border border-[#2E2E2E] rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#B3231C]"
          />
          <button className="px-6 py-3 rounded-lg bg-[#B3231C] hover:bg-[#8F1C16] text-white text-xs font-bold uppercase tracking-wider transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
