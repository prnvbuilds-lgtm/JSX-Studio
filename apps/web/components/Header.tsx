import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#0D0D0D]/95 backdrop-blur-md sticky top-0 z-50 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-[#B3231C]/80 bg-gradient-to-br from-red-950 via-black to-red-900 flex items-center justify-center shadow-lg shadow-red-950/40 p-0.5">
            <div className="w-full h-full rounded-full border border-red-500/30 flex items-center justify-center">
              <span className="font-serif font-black tracking-tighter text-red-500 text-xs md:text-sm italic">
                JXP
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.28em] text-white font-bold text-sm md:text-base uppercase leading-tight">
              JXP GUIDE
            </span>
            <span className="text-[9px] tracking-[0.25em] text-zinc-400 uppercase font-medium mt-0.5">
              Journaling Experiences
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold tracking-[0.2em] text-zinc-300">
          <Link href="/living" className="hover:text-white transition-colors duration-200">
            LIVING
          </Link>
          <Link href="/dining" className="hover:text-white transition-colors duration-200">
            DINING
          </Link>
          <Link href="/events" className="hover:text-white transition-colors duration-200">
            EVENTS
          </Link>
          <Link href="/travel" className="hover:text-white transition-colors duration-200">
            TRAVEL
          </Link>
          <Link href="/community" className="hover:text-white transition-colors duration-200">
            COMMUNITY
          </Link>
          <Link href="/about" className="hover:text-white transition-colors duration-200">
            ABOUT
          </Link>
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-5">
          <Link
            href="/partner-with-jxp"
            className="hidden sm:inline-flex items-center justify-center font-sans uppercase font-bold tracking-[0.14em] text-xs px-6 py-3 rounded-full bg-[#B3231C] text-white hover:bg-[#8F1C16] shadow-lg shadow-red-950/40 transition-all duration-300 active:scale-95"
          >
            PARTNER WITH JXP
          </Link>
          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.16em] font-bold text-zinc-400 hover:text-white transition-colors"
          >
            Partner Hub →
          </a>
        </div>
      </div>
    </header>
  );
};
