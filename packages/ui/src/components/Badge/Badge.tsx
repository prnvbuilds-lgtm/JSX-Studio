import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'live' | 'verified' | 'category' | 'outline' | 'crimson';
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'category',
  pulse = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] select-none transition-colors';

  const variantStyles = {
    live: 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-400',
    verified: 'bg-red-950/50 border border-red-600/40 text-red-400',
    category: 'bg-white/10 text-white backdrop-blur-sm',
    outline: 'border border-zinc-700 text-zinc-300 bg-transparent',
    crimson: 'bg-[#B3231C] text-white',
  }[variant];

  return (
    <span className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {variant === 'live' && (
        <span className="relative flex h-2 w-2">
          {pulse && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          )}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      )}
      {children}
    </span>
  );
};
