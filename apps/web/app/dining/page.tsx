import React from 'react';
import Link from 'next/link';
import { wpClient, GET_LISTINGS_BY_VERTICAL_QUERY, Listing } from '@jxp/graphql-client';

export const revalidate = 60;

export const metadata = {
  title: 'Dining & Culinary Curations — JXP Guide',
  description: 'Exceptional kitchens, intimate tasting counters, and artisanal cocktail bars.',
};

async function getDiningListings(): Promise<Listing[]> {
  try {
    const res = await wpClient.request<{ vertical?: { listings?: { nodes: Listing[] } } }>(
      GET_LISTINGS_BY_VERTICAL_QUERY,
      { verticalSlug: 'dining' }
    );
    if (res.vertical?.listings?.nodes && res.vertical.listings.nodes.length > 0) {
      return res.vertical.listings.nodes;
    }
  } catch (err) {
    console.warn('[GraphQL] Dining query error, falling back:', err);
  }

  return [
    {
      id: 'dining-1',
      databaseId: 201,
      title: 'Osteria Del Mare',
      slug: 'osteria-del-mare',
      excerpt: 'Michelin-starred seaside dining celebrating heritage coastal Italian gastronomy.',
      date: new Date().toISOString(),
      listingDetails: { city: 'Positano, Italy', priceTier: '$$$', rating: 4.88, verificationStatus: 'verified' },
    },
    {
      id: 'dining-2',
      databaseId: 202,
      title: 'The Coastal Table & Raw Bar',
      slug: 'osteria-del-mare',
      excerpt: 'Sustainable ocean harvest paired with wood-fired seasonal gastronomy.',
      date: new Date().toISOString(),
      listingDetails: { city: 'West Palm Beach', priceTier: '$$$', rating: 4.9, verificationStatus: 'verified' },
    },
  ];
}

export default async function DiningPage() {
  const listings = await getDiningListings();

  return (
    <div className="w-full bg-[#0D0D0D] py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12 border-b border-[#222222] pb-8">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-2">
          CULINARY JOURNAL
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
          Dining &amp; Gastronomy
        </h1>
        <p className="text-zinc-400 text-sm max-w-2xl">
          Where cuisine meets conversation. Explore independent restaurants, intimate counters, and master sommeliers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((item) => (
          <Link
            key={item.id}
            href={`/listing/${item.slug}`}
            className="block group"
          >
            <article className="h-full bg-[#181818] border border-[#282828] rounded-xl overflow-hidden card-hover-transition group-hover:border-[#B3231C] group-hover:-translate-y-1 transition-all duration-300">
              <div className="h-56 bg-zinc-800 relative overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/70 text-white backdrop-blur-sm">
                    {item.listingDetails?.city || 'Amalfi'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">{item.excerpt}</p>
                <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-semibold text-amber-400">&starf; {item.listingDetails?.rating || 4.9} Rating</span>
                  <span className="font-mono text-[#B3231C] font-bold">{item.listingDetails?.priceTier || '$$$'}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
