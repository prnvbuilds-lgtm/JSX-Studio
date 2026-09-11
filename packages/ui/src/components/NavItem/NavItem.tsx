import React from 'react';

export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: React.ReactNode;
  label: string;
  isActive?: boolean;
  badgeCount?: number;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  isActive = false,
  badgeCount,
  className = '',
  ...props
}) => {
  return (
    <a
      className={`group flex items-center justify-between px-4 py-3 rounded-lg text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 select-none ${
        isActive
          ? 'bg-red-950/20 text-white border-l-2 border-[#B3231C] font-bold pl-3.5'
          : 'text-zinc-400 hover:text-white hover:bg-white/5'
      } ${className}`}
      {...props}
    >
      <div className="flex items-center gap-3.5">
        {icon && (
          <span
            className={`w-4 h-4 transition-colors ${
              isActive ? 'text-[#B3231C]' : 'text-zinc-500 group-hover:text-zinc-300'
            }`}
          >
            {icon}
          </span>
        )}
        <span>{label}</span>
      </div>
      {badgeCount !== undefined && badgeCount > 0 && (
        <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#B3231C] text-white">
          {badgeCount}
        </span>
      )}
    </a>
  );
};
