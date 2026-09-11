import React from 'react';
import { StatCardsGroup } from '../components/StatCardsGroup';

export const PerformanceAnalytics: React.FC = () => {
  return (
    <div className="space-y-8 max-w-5xl">
      <div className="border-b border-[#222222] pb-6">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-1">
          METRICS &amp; CONVERSIONS
        </span>
        <h1 className="font-serif text-3xl font-bold text-white">Performance Analytics</h1>
        <p className="text-xs text-zinc-400 mt-1">Real-time engagement breakdown from JXP Guide readers and editorial spotlights.</p>
      </div>

      <StatCardsGroup />

      <div className="bg-[#181818] border border-[#282828] rounded-xl p-6 shadow-lg">
        <h3 className="font-serif text-xl font-bold text-white mb-4">Traffic &amp; Referral Origins</h3>
        <div className="space-y-4 text-xs">
          {[
            { channel: 'Editorial Feature: Top Brunch Spots in WPB', share: '48%', visits: '7,110' },
            { channel: 'Dining Vertical Listing Search', share: '32%', visits: '4,740' },
            { channel: 'Weekly Tastemakers Curated Newsletter', share: '14%', visits: '2,070' },
            { channel: 'Social & Partner Media Kit Syndication', share: '6%', visits: '900' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-[#202020] border border-[#2A2A2A]">
              <div>
                <span className="font-semibold text-white block">{item.channel}</span>
                <span className="text-[11px] text-zinc-400">{item.visits} reader sessions</span>
              </div>
              <span className="font-mono font-bold text-[#B3231C] text-sm">{item.share}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
