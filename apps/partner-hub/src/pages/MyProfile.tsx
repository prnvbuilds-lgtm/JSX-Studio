import React from 'react';

export const MyProfile: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="border-b border-[#222222] pb-6">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-1">
          BRAND DOSSIER
        </span>
        <h1 className="font-serif text-3xl font-bold text-white">Partner Profile</h1>
        <p className="text-xs text-zinc-400 mt-1">Manage your brand identity, contact credentials, and verified badges.</p>
      </div>

      <div className="bg-[#181818] border border-[#282828] rounded-xl p-6 space-y-6 shadow-lg">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-xl bg-red-950/60 border border-red-900/40 flex items-center justify-center font-serif text-2xl font-bold text-red-400">
            CT
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">The Coastal Table</h3>
            <p className="text-xs text-zinc-400">Founding Hospitality Partner &bull; West Palm Beach</p>
            <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
              Verified Partner
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#262626]">
          <div>
            <label className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 block mb-1">Primary Email</label>
            <div className="text-sm font-mono text-zinc-200">concierge@thecoastaltable.com</div>
          </div>
          <div>
            <label className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 block mb-1">Headquarters</label>
            <div className="text-sm text-zinc-200">West Palm Beach, FL, USA</div>
          </div>
          <div>
            <label className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 block mb-1">Membership Tier</label>
            <div className="text-sm font-semibold text-[#C9A66B]">Founding Partner Tier (Annual VIP)</div>
          </div>
          <div>
            <label className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 block mb-1">Dedicated Success Manager</label>
            <div className="text-sm text-zinc-200">Jasmine Reed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
