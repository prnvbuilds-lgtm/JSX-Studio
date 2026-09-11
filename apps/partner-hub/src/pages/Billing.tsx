import React from 'react';

export const Billing: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="border-b border-[#222222] pb-6">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-1">
          MEMBERSHIP &amp; INVOICING
        </span>
        <h1 className="font-serif text-3xl font-bold text-white">Billing &amp; Subscriptions</h1>
      </div>

      <div className="bg-[#181818] border border-[#282828] rounded-xl p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#262626]">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B3231C]">CURRENT MEMBERSHIP</span>
            <h3 className="font-serif text-2xl font-bold text-white mt-1">Founding Hospitality Partner</h3>
            <p className="text-xs text-zinc-400 mt-1">Annual Tier &bull; Renews on Nov 01, 2026</p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-800/40 self-start sm:self-auto">
            Active &bull; Auto-Renewal
          </span>
        </div>

        <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">Payment Method</span>
            <span className="font-semibold text-white block mt-1">Visa ending in 4242</span>
          </div>
          <div>
            <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">Annual Investment</span>
            <span className="font-semibold text-white block mt-1">$2,988 / year</span>
          </div>
          <div className="flex items-end">
            <button className="text-xs font-semibold text-zinc-300 hover:text-white underline underline-offset-4">
              Update Payment Method &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
