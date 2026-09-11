import React from 'react';

export interface StatCardProps {
  label: string;
  value: string | number;
  delta?: string;
  deltaType?: 'positive' | 'negative' | 'neutral';
  timeframe?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  delta,
  deltaType = 'positive',
  timeframe = 'vs last month',
  icon,
  className = '',
}) => {
  const deltaColor = {
    positive: 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40',
    negative: 'text-rose-400 bg-rose-950/40 border-rose-800/40',
    neutral: 'text-zinc-400 bg-zinc-900 border-zinc-700',
  }[deltaType];

  return (
    <div
      className={`bg-[#181818] border border-[#282828] rounded-xl p-6 relative overflow-hidden transition-all duration-300 hover:border-[#383838] hover:-translate-y-0.5 shadow-lg shadow-black/40 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        {icon ? (
          <div className="w-10 h-10 rounded-lg bg-[#222222] border border-[#303030] flex items-center justify-center text-zinc-300">
            {icon}
          </div>
        ) : (
          <div className="w-2 h-2 rounded-full bg-[#B3231C]" />
        )}
        {delta && (
          <div
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${deltaColor}`}
          >
            {deltaType === 'positive' && (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            )}
            {deltaType === 'negative' && (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
            <span>{delta}</span>
          </div>
        )}
      </div>

      <div>
        <div className="text-3xl font-extrabold text-white font-sans tracking-tight leading-none mb-2">
          {value}
        </div>
        <div className="text-xs uppercase tracking-[0.16em] text-zinc-400 font-semibold mb-1">
          {label}
        </div>
        {timeframe && <div className="text-[11px] text-zinc-500 font-medium">{timeframe}</div>}
      </div>
    </div>
  );
};
