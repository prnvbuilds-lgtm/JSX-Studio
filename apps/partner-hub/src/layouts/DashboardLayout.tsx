import React, { useState } from 'react';
import { NotificationBell } from '../components/NotificationBell';

interface DashboardLayoutProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  currentPath,
  onNavigate,
  children,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      path: '/',
      label: 'Dashboard',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      path: '/profile',
      label: 'My Profile',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      path: '/listings',
      label: 'My Listings',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      path: '/campaigns',
      label: 'Campaigns',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      path: '/analytics',
      label: 'Performance',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      path: '/messages',
      label: 'Messages',
      badge: 1,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      path: '/resources',
      label: 'Resources',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      path: '/billing',
      label: 'Billing',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      path: '/settings',
      label: 'Settings',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0D0D0D] text-gray-200">
      {/* DESKTOP LEFT SIDEBAR */}
      <aside
        className={`w-[230px] flex-shrink-0 bg-[#121212] border-r border-[#262626] flex-col justify-between fixed top-0 bottom-0 left-0 z-30 hidden lg:flex`}
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
                JXP GUIDE
              </span>
              <span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase font-semibold mt-0.5">
                Partner Hub
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-170px)]">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 text-left ${
                    isActive
                      ? 'bg-red-950/20 text-white border-l-2 border-[#B3231C] font-bold pl-3.5'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={isActive ? 'text-[#B3231C]' : 'text-zinc-500'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-[#B3231C] text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-5 border-t border-[#222222] bg-[#0E0E0E]">
          <p className="font-script text-[#C9A66B] text-center text-sm leading-snug">
            &ldquo;Great Businesses Create Greater Experiences&rdquo;
          </p>
        </div>
      </aside>

      {/* MOBILE DRAWER OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 lg:hidden flex">
          <div className="w-64 bg-[#121212] border-r border-[#262626] p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-4">
                <span className="font-serif font-bold text-white uppercase tracking-wider text-sm">
                  Partner Hub
                </span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-400">
                  ✕
                </button>
              </div>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      onNavigate(item.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-white/5 text-left"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex-1" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 lg:ml-[230px] flex flex-col min-h-screen">
        {/* TOP HEADER */}
        <header className="h-16 border-b border-[#222222] bg-[#0E0E0E]/90 backdrop-blur-md sticky top-0 z-20 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white"
              aria-label="Open navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif tracking-[0.24em] text-white font-bold text-xs uppercase">
                JXP GUIDE
              </span>
              <span className="text-[9px] tracking-[0.2em] text-zinc-400 uppercase">
                Partner Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <NotificationBell />
            <div className="w-px h-6 bg-zinc-800" />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-950/60 border border-[#B3231C]/60 flex items-center justify-center text-xs font-bold text-white font-serif">
                CT
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="text-xs font-bold text-white">The Coastal Table</span>
                <span className="text-[10px] text-zinc-400 font-semibold">Founding Partner</span>
              </div>
            </div>
          </div>
        </header>

        {/* PAGE BODY */}
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
};
