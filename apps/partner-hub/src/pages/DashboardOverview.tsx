import React from 'react';
import { StatCardsGroup } from '../components/StatCardsGroup';
import { QuickActionTiles } from '../components/QuickActionTiles';

export const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* HERO WELCOME BANNER */}
      <section className="relative rounded-2xl overflow-hidden border border-[#282828] bg-[#161616] p-8 md:p-10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold tracking-[0.24em] text-zinc-400 uppercase">
                WELCOME BACK,
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950/60 text-[#B3231C] border border-red-900/40">
                JXP PARTNER
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              The Coastal Table
            </h1>

            <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
              Your seasonal promotion is actively pacing 24% ahead of projections. Discover upcoming editorial curations and amplify your reservation bookings.
            </p>

            <div className="pt-2">
              <button className="inline-flex items-center gap-2 font-sans uppercase font-bold tracking-[0.14em] text-xs px-7 py-3.5 rounded-full bg-[#B3231C] text-white hover:bg-[#8F1C16] shadow-lg shadow-red-950/50 transition-all duration-300">
                <span>CREATE A NEW CAMPAIGN</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[16/10] rounded-xl overflow-hidden border border-[#2E2E2E] shadow-xl relative">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 inset-x-4 text-center">
                <p className="font-script text-[#C9A66B] text-xl">
                  &ldquo;Good Food, Great People, Bigger Experiences&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAT CARDS ROW */}
      <section>
        <StatCardsGroup />
      </section>

      {/* TWO-COLUMN MID SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Featured on JXP Promo Card */}
        <div className="lg:col-span-7 bg-[#181818] border border-[#282828] rounded-xl overflow-hidden shadow-lg">
          <div className="h-60 relative overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/40 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#B3231C] text-white">
                DINING FEATURE
              </span>
            </div>
          </div>

          <div className="p-6 pt-2">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Top Brunch Spots in West Palm Beach
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-6">
              Your property is featured as the #1 spotlight in our weekend tastemakers guide, generating 1,240 direct clicks to your reservation engine.
            </p>
            <button className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors">
              View Feature Story &rarr;
            </button>
          </div>
        </div>

        {/* Right: Your Listing is Live & Partnership Manager */}
        <div className="lg:col-span-5 space-y-6">
          {/* Listing Status Card */}
          <div className="bg-[#181818] border border-[#282828] rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Your Listing is Live
                </span>
              </div>
              <span className="text-[11px] text-zinc-500 font-mono">ID: #JXP-7829</span>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-16 h-16 rounded-lg bg-cover bg-center border border-[#2E2E2E] flex-shrink-0"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80')",
                }}
              />
              <div>
                <h4 className="font-serif font-bold text-base text-white">The Coastal Table</h4>
                <p className="text-xs text-zinc-400 mt-0.5">Dining &bull; West Palm Beach, FL</p>
                <p className="text-[11px] text-zinc-500 mt-1">Verified Partner since Jan 2025</p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-xs">
              <button className="text-zinc-300 hover:text-white font-semibold transition-colors">
                View Listing &rarr;
              </button>
              <button className="text-zinc-400 hover:text-white transition-colors">
                Update Info
              </button>
            </div>
          </div>

          {/* Partnership Manager Card */}
          <div className="bg-[#181818] border border-[#282828] rounded-xl p-6 shadow-lg">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#B3231C] mb-3">
              YOUR DEDICATED SUCCESS MANAGER
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center border border-red-900/50 flex-shrink-0"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80')",
                }}
              />
              <div>
                <h4 className="font-bold text-sm text-white">Jasmine Reed</h4>
                <p className="text-xs text-zinc-400">Senior Partner Success Lead</p>
                <p className="text-[10px] text-emerald-400 mt-0.5">&bull; Online now</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button className="py-2.5 px-4 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-xs font-semibold text-white border border-[#2E2E2E] transition-colors">
                Direct Message
              </button>
              <button className="py-2.5 px-4 rounded-lg bg-[#B3231C]/20 hover:bg-[#B3231C]/30 text-xs font-semibold text-red-300 border border-red-900/40 transition-colors">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS ROW */}
      <section>
        <QuickActionTiles />
      </section>

      {/* BOTTOM TWO-COLUMN: UPCOMING OPPORTUNITIES & RESOURCES */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Upcoming Opportunities */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <span className="text-[10px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block">
              EDITORIAL CALENDAR
            </span>
            <h3 className="font-serif text-xl font-bold text-white">
              Upcoming Partner Opportunities
            </h3>
          </div>

          <div className="space-y-3">
            {[
              {
                title: 'Winter Escape: Premier Florida Coastal Getaways',
                deadline: 'Apply by Oct 20',
                category: 'Travel & Stays',
                bg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
              },
              {
                title: 'Artisanal Spirits & Sunset Lounges of Palm Beach',
                deadline: 'Apply by Nov 05',
                category: 'Dining & Drinks',
                bg: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80',
              },
              {
                title: 'Private Dining Rooms for Holiday Tastemakers',
                deadline: 'Apply by Nov 18',
                category: 'Events',
                bg: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80',
              },
            ].map((opp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#181818] border border-[#282828] hover:border-[#383838] transition-all duration-300 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-lg bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url('${opp.bg}')` }}
                  />
                  <div>
                    <span className="text-[10px] font-bold text-[#C9A66B] uppercase tracking-wider block">
                      {opp.category}
                    </span>
                    <h4 className="text-sm font-bold text-white">{opp.title}</h4>
                    <span className="text-xs text-zinc-500 mt-1 block">{opp.deadline}</span>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 text-xs font-semibold text-white whitespace-nowrap">
                  Learn More &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Partner Resources */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <span className="text-[10px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block">
              TOOLKIT
            </span>
            <h3 className="font-serif text-xl font-bold text-white">
              Partner Resources
            </h3>
          </div>

          <div className="bg-[#181818] border border-[#282828] rounded-xl divide-y divide-[#262626]">
            {[
              { label: 'JXP Brand & Photography Guidelines', desc: 'Download high-res badge assets' },
              { label: 'Media Kit & Audience Demographics', desc: 'Q4 2026 Reader Breakdown' },
              { label: 'Content Submission & Photo Specs', desc: 'Best practices for high conversion' },
              { label: 'Case Study: 340% Booking Growth', desc: 'How Miramar Villa scaled with JXP' },
              { label: 'Priority Support & Helpdesk', desc: 'Submit a ticket to technical support' },
            ].map((res, idx) => (
              <button
                key={idx}
                className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors text-left group"
              >
                <div>
                  <h5 className="text-xs font-bold text-white group-hover:text-red-400 transition-colors">
                    {res.label}
                  </h5>
                  <p className="text-[11px] text-zinc-500 mt-0.5">{res.desc}</p>
                </div>
                <span className="text-zinc-500 group-hover:text-white transition-colors">&rarr;</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section
        className="rounded-2xl overflow-hidden p-8 md:p-12 relative border border-[#2A2A2A] bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.7) 60%, rgba(13,13,13,0.88) 100%), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <div className="max-w-2xl space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Let&rsquo;s Create What&rsquo;s <span className="font-script text-[#B3231C]">Next.</span>
          </h2>
          <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
            New seasons. New audiences. More experiences. Partner with JXP and be part of what&rsquo;s next.
          </p>
          <div className="pt-2">
            <button className="inline-flex items-center gap-2 font-sans uppercase font-bold tracking-[0.14em] text-xs px-8 py-4 rounded-full bg-[#B3231C] text-white hover:bg-[#8F1C16] shadow-xl shadow-red-950/60 transition-all duration-300">
              EXPLORE PARTNER OPPORTUNITIES &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
