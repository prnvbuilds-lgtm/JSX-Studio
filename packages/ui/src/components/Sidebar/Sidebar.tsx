import React from 'react';

export interface SidebarProps {
  children?: React.ReactNode;
  brandTitle?: string;
  brandSubtitle?: string;
  footerTagline?: string;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  brandTitle = 'JXP GUIDE',
  brandSubtitle = 'Partner Hub',
  footerTagline = 'Great Businesses Create Greater Experiences',
  className = '',
}) => {
  return (
    <aside
      className={`w-[230px] flex-shrink-0 bg-[#121212] border-r border-[#262626] flex flex-col justify-between h-screen sticky top-0 ${className}`}
      data-purpose="main-navigation-sidebar"
    >
      <div>
        {/* Brand Monogram Header */}
        <div className="p-6 pb-5 flex items-center gap-3.5 border-b border-[#222222]">
          <div className="w-10 h-10 rounded-full border border-red-500/40 bg-gradient-to-br from-red-950 via-black to-red-900 flex items-center justify-center p-0.5 shadow-md shadow-red-950/40">
            <span className="font-serif font-black tracking-tighter text-red-500 text-xs italic">
              JXP
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-white tracking-[0.2em] text-xs uppercase leading-tight">
              {brandTitle}
            </span>
            <span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase font-semibold mt-0.5">
              {brandSubtitle}
            </span>
          </div>
        </div>

        {/* Navigation Items List */}
        <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-160px)]">
          {children}
        </nav>
      </div>

      {/* Sidebar Footer Script Tagline */}
      <div className="p-5 border-t border-[#222222] bg-[#0E0E0E]">
        <p className="font-script text-[#C9A66B] text-center text-sm leading-snug">
          &ldquo;{footerTagline}&rdquo;
        </p>
      </div>
    </aside>
  );
};
