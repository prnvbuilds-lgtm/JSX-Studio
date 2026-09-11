import React from 'react';
import Link from 'next/link';
import { wpClient, GET_ALL_LISTINGS_QUERY, Listing } from '@jxp/graphql-client';

export const revalidate = 60; // SSG with Incremental Static Regeneration

async function getFeaturedListings(): Promise<Listing[]> {
  try {
    const res = await wpClient.request<{ listings: { nodes: Listing[] } }>(
      GET_ALL_LISTINGS_QUERY,
      { first: 6 }
    );
    return res.listings?.nodes || [];
  } catch (_err) {
    // Return curated fallback items if WordPress is not running yet
    return [
      {
        id: 'mock-1',
        databaseId: 1,
        title: 'The Coastal Table & Raw Bar',
        slug: 'the-coastal-table',
        excerpt: 'Oceanfront sustainable seafood, wood-fired seasonal plates, and sunset cocktails.',
        date: new Date().toISOString(),
        listingDetails: {
          city: 'West Palm Beach',
          priceTier: '$$$',
          rating: 4.9,
          reviewCount: 182,
          verificationStatus: 'verified',
        },
      },
      {
        id: 'mock-2',
        databaseId: 2,
        title: 'Miramar Botanical Villa',
        slug: 'miramar-botanical-villa',
        excerpt: 'Secluded architectural sanctuary nestled among tropical flora with private infinity plunge.',
        date: new Date().toISOString(),
        listingDetails: {
          city: 'Sedona Highlands',
          priceTier: '$$$$',
          rating: 5.0,
          reviewCount: 94,
          verificationStatus: 'featured',
        },
      },
      {
        id: 'mock-3',
        databaseId: 3,
        title: 'Atelier Noir Wine & Vinyl Salon',
        slug: 'atelier-noir',
        excerpt: 'Low-intervention natural wines paired with rare vintage soul on analog sound system.',
        date: new Date().toISOString(),
        listingDetails: {
          city: 'New York City',
          priceTier: '$$',
          rating: 4.8,
          reviewCount: 230,
          verificationStatus: 'verified',
        },
      },
    ];
  }
}

export default async function HomePage() {
  const listings = await getFeaturedListings();

  return (
    <div className="w-full bg-[#0D0D0D] text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6 py-28 overflow-hidden border-b border-[#222222]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#B3231C] px-4 py-1.5 rounded-full border border-red-900/50 bg-red-950/30 backdrop-blur-md">
            JOURNALING EXPERIENCES
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Different Places. <br />
            <span className="font-script text-[#C9A66B] font-normal lowercase tracking-normal text-5xl sm:text-7xl md:text-8xl">
              a fuller you.
            </span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            An editorial guide connecting discerning seekers with boutique hospitality, intimate dining, and transformative cultural experiences.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/dining"
              className="inline-flex items-center justify-center font-sans uppercase font-bold tracking-[0.14em] text-xs px-8 py-4 rounded-full bg-[#B3231C] text-white hover:bg-[#8F1C16] shadow-xl shadow-red-950/50 transition-all duration-300"
            >
              EXPLORE CURATIONS &rarr;
            </Link>
            <Link
              href="/partner-with-jxp"
              className="inline-flex items-center justify-center font-sans uppercase font-bold tracking-[0.14em] text-xs px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              PARTNER WITH JXP
            </Link>
          </div>
        </div>
      </section>

      {/* VERTICALS CATEGORY SELECTOR */}
      <section className="py-16 bg-[#121212] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Living', href: '/living', desc: 'Spaces to stay & love' },
              { label: 'Dining', href: '/dining', desc: 'Cuisine & conversation' },
              { label: 'Events', href: '/events', desc: 'Things to do & feel' },
              { label: 'Travel', href: '/travel', desc: 'Getaways & perspectives' },
              { label: 'Community', href: '/community', desc: 'People & purpose' },
            ].map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                className="p-5 rounded-xl bg-[#181818] border border-[#282828] hover:border-[#B3231C] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-white group-hover:text-[#B3231C] transition-colors">
                  {cat.label}
                </div>
                <div className="text-[11px] text-zinc-400 mt-1">{cat.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CURATED LISTINGS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-2">
              CURATED EXPERIENCES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Featured Partners & Spots
            </h2>
          </div>
          <Link
            href="/living"
            className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400 hover:text-white transition-colors"
          >
            View All Guides &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listings.map((item) => (
            <article
              key={item.id}
              className="bg-[#181818] border border-[#2A2A2A] rounded-2xl overflow-hidden card-hover-transition group"
            >
              <div className="h-56 bg-zinc-800 relative overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/70 text-white backdrop-blur-sm">
                    {item.listingDetails?.city || 'Featured'}
                  </span>
                </div>
                {item.listingDetails?.priceTier && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-[#B3231C] text-white">
                      {item.listingDetails.priceTier}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                  {item.excerpt}
                </p>

                <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1 font-semibold text-amber-400">
                    &starf; {item.listingDetails?.rating || 4.9} ({item.listingDetails?.reviewCount || 100}+ reviews)
                  </span>
                  <span className="text-zinc-500 uppercase tracking-wider text-[10px]">JXP Verified</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-red-950 via-[#1A1A1A] to-black py-20 border-y border-[#262626]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Are You a Boutique Hospitality Brand?
          </h2>
          <p className="text-zinc-300 text-sm max-w-xl mx-auto leading-relaxed">
            Gain exposure with our community of high-intent travelers and culinary enthusiasts. Partner with JXP Guide today.
          </p>
          <div>
            <Link
              href="/partner-with-jxp"
              className="inline-flex items-center justify-center font-sans uppercase font-bold tracking-[0.14em] text-xs px-8 py-4 rounded-full bg-[#B3231C] text-white hover:bg-[#8F1C16] shadow-xl shadow-red-950/60 transition-all duration-300"
            >
              LEARN ABOUT PARTNERSHIP &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
