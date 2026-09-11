import React from 'react';

export interface StatItem {
  label: string;
  value: string | number;
  delta?: string;
  timeframe?: string;
  iconSvg?: React.ReactNode;
}

export const StatCardsGroup: React.FC<{ stats?: StatItem[] }> = ({ stats }) => {
  const defaultStats: StatItem[] = [
    {
      label: 'Profile Views',
      value: '14,820',
      delta: '+18%',
      timeframe: 'vs last month',
      iconSvg: (
        <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      label: 'Engagements',
      value: '3,410',
      delta: '+24%',
      timeframe: 'vs last month',
      iconSvg: (
        <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      label: 'Clicks to Website',
      value: '1,980',
      delta: '+12%',
      timeframe: 'vs last month',
      iconSvg: (
        <svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
    },
    {
      label: 'Average Rating',
      value: '4.9 ★',
      delta: '182 reviews',
      timeframe: 'all-time average',
      iconSvg: (
        <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
    },
  ];

  const items = stats || defaultStats;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {items.map((stat, idx) => (
        <div
          key={idx}
          className="bg-[#181818] border border-[#282828] rounded-xl p-5 hover:border-[#383838] transition-all duration-300 shadow-md shadow-black/40"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#222222] border border-[#303030] flex items-center justify-center">
              {stat.iconSvg}
            </div>
            {stat.delta && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                {stat.delta}
              </span>
            )}
          </div>

          <div className="text-2xl font-extrabold text-white font-sans tracking-tight leading-none mb-1.5">
            {stat.value}
          </div>
          <div className="text-xs uppercase tracking-[0.14em] text-zinc-400 font-semibold">
            {stat.label}
          </div>
          {stat.timeframe && (
            <div className="text-[10px] text-zinc-500 font-medium mt-1">{stat.timeframe}</div>
          )}
        </div>
      ))}
    </div>
  );
};
