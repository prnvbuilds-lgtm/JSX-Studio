import React from 'react';
import Link from 'next/link';
import { wpClient, GET_LISTINGS_BY_VERTICAL_QUERY, Listing } from '@jxp/graphql-client';

export const revalidate = 60;

export const metadata = {
  title: 'Events & Experiences — JXP Guide',
  description: 'Intimate salons, cultural gatherings, and curated festivals.',
};

async function getEventListings(): Promise<Listing[]> {
  try {
    const res = await wpClient.request<{ vertical?: { listings?: { nodes: Listing[] } } }>(
      GET_LISTINGS_BY_VERTICAL_QUERY,
      { verticalSlug: 'events' }
    );
    if (res.vertical?.listings?.nodes && res.vertical.listings.nodes.length > 0) {
      return res.vertical.listings.nodes;
    }
  } catch (err) {
    console.warn('[GraphQL] Events query error, falling back:', err);
  }

  return [
    {
      id: 'event-1',
      databaseId: 401,
      title: 'Equinox Harvest Salon & Dinner',
      slug: 'equinox-harvest-salon',
      excerpt: 'Intimate six-course culinary salon paired with live acoustic strings and organic wines.',
      date: new Date().toISOString(),
      listingDetails: { city: 'Hudson Valley, New York', priceTier: '$$$', rating: 4.96, verificationStatus: 'verified' },
    },
    {
      id: 'event-2',
      databaseId: 402,
      title: 'The Art of Wine & Architectural Solitude',
      slug: 'equinox-harvest-salon',
      excerpt: 'An immersive salon exploring architectural design philosophy with leading California vintners.',
      date: new Date().toISOString(),
      listingDetails: { city: 'Sonoma Heights', priceTier: '$$$$', rating: 4.98, verificationStatus: 'featured' },
    },
  ];
}

export default async function EventsPage() {
  const listings = await getEventListings();

  return (
    <div className="w-full bg-[#0D0D0D] py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12 border-b border-[#222222] pb-8">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-2">
          GATHERINGS &amp; SALONS
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
          Events &amp; Cultural Gatherings
        </h1>
        <p className="text-zinc-400 text-sm max-w-2xl">
          Curated culinary salons, acoustic performances, harvest dinners, and retreat weekends.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {listings.map((item) => (
          <Link
            key={item.id}
            href={`/listing/${item.slug}`}
            className="block group"
          >
            <article className="h-full bg-[#181818] border border-[#282828] rounded-xl overflow-hidden card-hover-transition group-hover:border-[#B3231C] group-hover:-translate-y-1 transition-all duration-300">
              <div
                className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs font-bold text-[#B3231C] mb-2 uppercase tracking-wider">
                  <span>{item.listingDetails?.city || 'Special Event'}</span> &bull;{' '}
                  <span>{item.listingDetails?.priceTier || 'Curated'}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">{item.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                  <span className="text-xs text-amber-400 font-semibold">
                    &starf; {item.listingDetails?.rating || 4.9} Verified
                  </span>
                  <span className="px-5 py-2 rounded-full bg-[#B3231C] text-white text-[11px] font-bold uppercase tracking-wider group-hover:bg-[#8F1C16] transition-colors">
                    Reserve Attendance &rarr;
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
