import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Partner With JXP — JXP Guide',
  description:
    'Join our curated collective of premier hospitality, dining, and travel partners. Reach an engaged audience seeking purposeful experiences.',
};

export default function PartnerWithJxpPage() {
  return (
    <div className="w-full bg-[#0D0D0D] text-white">
      {/* SECTION 1: HERO */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-8 z-10">
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#B3231C] uppercase block">
                COMFORT &bull; FUN &bull; SPONTANEITY &bull; PURPOSE
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Partner With <span className="text-[#B3231C] italic font-normal">JXP.</span>
              </h1>
            </div>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-normal max-w-xl">
              Connect with discerning travelers and tastemakers. JXP Guide curates the finest boutique
              accommodations, Michelin-caliber dining, and transformative local experiences for a highly engaged,
              purpose-driven audience.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#inquire"
                className="inline-flex items-center justify-center font-sans uppercase font-bold tracking-[0.14em] text-xs px-8 py-4 rounded-full bg-[#B3231C] text-white hover:bg-[#8F1C16] shadow-xl shadow-red-950/40 transition-all duration-300"
              >
                BECOME A PARTNER &rarr;
              </a>
              <a
                href="#reach"
                className="inline-flex items-center justify-center font-sans uppercase font-bold tracking-[0.14em] text-xs px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                VIEW MEDIA KIT &darr;
              </a>
            </div>

            <div className="pt-6 border-t border-[#222222] flex items-center gap-6">
              <div>
                <div className="text-2xl font-bold text-white font-serif">50K+</div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Monthly Readers</div>
              </div>
              <div className="w-px h-8 bg-zinc-800" />
              <div>
                <div className="text-2xl font-bold text-white font-serif">94%</div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Partner Retention</div>
              </div>
              <div className="w-px h-8 bg-zinc-800" />
              <div>
                <div className="text-2xl font-bold text-white font-serif">4.9 &starf;</div>
                <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Curator Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column: Imagery with Polaroids & Flourish */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-2xl relative bg-[#181818]">
                {/* Background image container */}
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Polaroid overlay card 1 */}
                <div className="absolute top-6 left-6 bg-white/95 text-black p-3 rounded-lg shadow-xl -rotate-3 w-48 border border-zinc-200 backdrop-blur-sm">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">RESERVED TABLE</div>
                  <div className="font-serif font-bold text-xs text-zinc-900 leading-tight">Curated Tasting for Tastemakers</div>
                  <div className="mt-2 text-[10px] font-script text-[#B3231C]">JXP Verified Selection</div>
                </div>

                {/* Script caption overlay bottom */}
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <p className="font-script text-[#C9A66B] text-2xl md:text-3xl leading-snug drop-shadow-md">
                    &ldquo;Great Places, Greater People, Unforgettable Experiences&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY PARTNER WITH JXP (CONTRAST LIGHT BAND) */}
      <section className="bg-[#F5F1EA] text-[#1A1A1A] py-24 border-y border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.24em] text-[#B3231C] uppercase block">
              WHY PARTNER WITH JXP?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
              MORE VISIBILITY. <span className="text-[#B3231C] italic font-normal">REAL CONNECTIONS.</span> LASTING IMPACT.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                title: 'Engaged Audience',
                desc: 'Access affluent travelers and locals seeking meaningful, authentic experiences.',
                icon: '👥',
              },
              {
                title: 'Multi-Channel Exposure',
                desc: 'Digital guides, newsletter spotlights, social features, and exclusive editorial placements.',
                icon: '🌐',
              },
              {
                title: 'Authentic Storytelling',
                desc: 'Editorial profiling that captures the soul, history, and craftsmanship of your brand.',
                icon: '✍️',
              },
              {
                title: 'Experience Marketing',
                desc: 'Highlight signature dishes, unique retreats, private salons, and curated itineraries.',
                icon: '✨',
              },
              {
                title: 'Purpose & Community',
                desc: 'Align with hospitality partners who value connection, culture, and positive local impact.',
                icon: '🏛️',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white/80 p-6 rounded-xl border border-[#E0DBD0] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-4">{pillar.icon}</div>
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-2">{pillar.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PARTNER OPPORTUNITIES STRIP */}
      <section className="py-24 bg-[#0D0D0D] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-2">
                PARTNER OPPORTUNITIES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Let&rsquo;s Grow Together.
              </h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md">
              Whether you are an independent boutique hotel, an artisanal bistro, or an eco-retreat, we craft customized partnership channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Hotels & Resorts', tag: 'STAYS', bg: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
              { title: 'Restaurants & Bars', tag: 'DINING', bg: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80' },
              { title: 'Events & Salons', tag: 'EXPERIENCES', bg: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80' },
              { title: 'Travel & Tourism', tag: 'CURATIONS', bg: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80' },
              { title: 'Community Impact', tag: 'PURPOSE', bg: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-[#282828] card-hover-transition cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.bg}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#B3231C] uppercase block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TESTIMONIAL BAND */}
      <section
        className="relative py-28 bg-cover bg-center border-b border-[#222222]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,13,13,0.85), rgba(13,13,13,0.85)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <p className="font-script text-[#C9A66B] text-2xl">Partner Voice</p>
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-white italic leading-relaxed">
            &ldquo;Partnering with JXP Guide introduced our dining room to the most engaged, appreciative guests we&rsquo;ve welcomed all season. Their storytelling is second to none.&rdquo;
          </blockquote>
          <div>
            <div className="text-white font-bold text-sm uppercase tracking-wider">Chef Marcus V.</div>
            <div className="text-xs text-zinc-400">Founding Partner &bull; The Coastal Table</div>
          </div>
        </div>
      </section>

      {/* SECTION 5: REACH & INQUIRY FORM */}
      <section id="inquire" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Reach stats */}
          <div id="reach" className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-2">
                OUR AUDIENCE REACH
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Connect Where Quality Matters.
              </h2>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Monthly Visitors', value: '50,000+', desc: 'Across digital city guides & curated itineraries' },
                { label: 'Social Community', value: '25,000+', desc: 'Active tastemakers and hospitality enthusiasts' },
                { label: 'Newsletter Subscribers', value: '10,000+', desc: '48% average open rate on weekly recommendations' },
                { label: 'Direct Booking Actions', value: '14,200+', desc: 'Clicks generated directly to partner reservation portals' },
              ].map((stat, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#141414] border border-[#222222]">
                  <div className="text-2xl font-bold font-serif text-white">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-300 mt-0.5">{stat.label}</div>
                  <div className="text-xs text-zinc-500 mt-1">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-2xl p-8 sm:p-10 shadow-2xl">
            <div className="mb-8">
              <p className="font-script text-[#C9A66B] text-2xl mb-1">Let&rsquo;s Create What&rsquo;s Next.</p>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Request a Partnership Consultation
              </h3>
              <p className="text-xs text-zinc-400 mt-2">
                Fill out the brief profile below and our Partner Success team will contact you within 24 hours.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-zinc-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Hayes"
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#B3231C]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-zinc-400 mb-2">
                    Business / Property Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. The Coastal Table"
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#B3231C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-zinc-400 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@coastaltable.com"
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#B3231C]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-zinc-400 mb-2">
                    Category / Vertical
                  </label>
                  <select
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B3231C]"
                  >
                    <option value="dining">Dining & Beverage</option>
                    <option value="living">Living & Boutique Stays</option>
                    <option value="events">Events & Experiences</option>
                    <option value="travel">Travel & Tourism</option>
                    <option value="community">Community & Non-Profit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-zinc-400 mb-2">
                  Tell Us About Your Brand & Vision
                </label>
                <textarea
                  rows={4}
                  placeholder="Share a brief overview of your property, upcoming offerings, or marketing goals..."
                  className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#B3231C]"
                />
              </div>

              <button
                type="submit"
                className="w-full font-sans uppercase font-bold tracking-[0.16em] text-xs py-4 rounded-full bg-[#B3231C] text-white hover:bg-[#8F1C16] shadow-xl shadow-red-950/40 transition-all duration-300"
              >
                SUBMIT PARTNERSHIP INQUIRY &rarr;
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
