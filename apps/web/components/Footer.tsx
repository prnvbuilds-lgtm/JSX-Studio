import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#080808] border-t border-[#1C1C1C] pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-[#1A1A1A]">
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-red-500/40 bg-gradient-to-br from-red-950 via-black to-red-900 flex items-center justify-center p-0.5 shadow-md">
              <span className="font-serif font-black tracking-tighter text-red-500 text-xs italic">
                JXP
              </span>
            </div>
            <span className="font-serif tracking-[0.24em] text-white font-bold text-sm uppercase">
              JXP GUIDE
            </span>
          </div>
          <p className="text-zinc-500 leading-relaxed text-xs">
            Boutique editorial guide for hospitality, travel, and purposeful human experiences.
          </p>
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-400 font-semibold">
            Comfort. Fun. Spontaneity. Purpose.
          </p>
        </div>

        {/* Col 2: Explore */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Explore</h4>
          <ul className="space-y-2.5">
            <li><Link href="/living" className="hover:text-white transition-colors">Living & Stays</Link></li>
            <li><Link href="/dining" className="hover:text-white transition-colors">Dining & Cuisine</Link></li>
            <li><Link href="/events" className="hover:text-white transition-colors">Events & Gatherings</Link></li>
            <li><Link href="/travel" className="hover:text-white transition-colors">Travel Curations</Link></li>
            <li><Link href="/community" className="hover:text-white transition-colors">Community Impact</Link></li>
          </ul>
        </div>

        {/* Col 3: Partner Hub */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Partner Hub</h4>
          <ul className="space-y-2.5">
            <li><Link href="/partner-with-jxp" className="hover:text-white transition-colors">Partner With JXP</Link></li>
            <li><a href="http://localhost:5173" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Partner Portal Login</a></li>
            <li><Link href="/partner-with-jxp#reach" className="hover:text-white transition-colors">Media Kit & Reach</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Schedule Consultation</Link></li>
          </ul>
        </div>

        {/* Col 4: Connect */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">Connect</h4>
          <ul className="space-y-2.5 mb-6">
            <li><a href="#" className="hover:text-white transition-colors">Instagram @jxpguide</a></li>
            <li><a href="#" className="hover:text-white transition-colors">TikTok @jxpguide</a></li>
            <li><a href="#" className="hover:text-white transition-colors">YouTube Channel</a></li>
          </ul>
          <p className="font-script text-[#C9A66B] text-xl">
            Experiences for a Better You.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
        <div>
          &copy; {new Date().getFullYear()} JXP Guide. All rights reserved. Headless platform built for boutique partners.
        </div>
        <div className="font-script text-[#C9A66B] text-sm">
          &ldquo;Different Places. A Fuller You.&rdquo;
        </div>
      </div>
    </footer>
  );
};
