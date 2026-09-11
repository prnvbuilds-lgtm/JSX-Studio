import React from 'react';
import Link from 'next/link';
import { wpClient, GET_LISTINGS_BY_VERTICAL_QUERY, Listing } from '@jxp/graphql-client';

export const revalidate = 60;

export const metadata = {
  title: 'Travel & Itineraries — JXP Guide',
  description: 'Uncommon journeys, intentional travel, and restorative retreats.',
};

async function getTravelListings(): Promise<Listing[]> {
  try {
    const res = await wpClient.request<{ vertical?: { listings?: { nodes: Listing[] } } }>(
      GET_LISTINGS_BY_VERTICAL_QUERY,
      { verticalSlug: 'travel' }
    );
    if (res.vertical?.listings?.nodes && res.vertical.listings.nodes.length > 0) {
      return res.vertical.listings.nodes;
    }
  } catch (err) {
    console.warn('[GraphQL] Travel query error, falling back:', err);
  }

  return [
    {
      id: 'travel-1',
      databaseId: 301,
      title: 'Komorebi Forest Onsen',
      slug: 'komorebi-forest-onsen',
      excerpt: 'Traditional Japanese ryokan with geothermal open-air cedar onsen baths.',
      date: new Date().toISOString(),
      listingDetails: { city: 'Kyoto, Japan', priceTier: '$$$$', rating: 4.98, verificationStatus: 'verified' },
    },
    {
      id: 'travel-2',
      databaseId: 302,
      title: 'The Coastal Highlands of Big Sur',
      slug: 'komorebi-forest-onsen',
      excerpt: 'Curated coastal sanctuary, private transfers, and redwood forest immersion.',
      date: new Date().toISOString(),
      listingDetails: { city: 'California, USA', priceTier: '$$$$', rating: 4.92, verificationStatus: 'featured' },
    },
  ];
}

export default async function TravelPage() {
  const listings = await getTravelListings();

  return (
    <div className="w-full bg-[#0D0D0D] py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12 border-b border-[#222222] pb-8">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-2">
          EXPEDITIONS &amp; RETREATS
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
          Travel &amp; Perspectives
        </h1>
        <p className="text-zinc-400 text-sm max-w-2xl">
          Journeys designed to awaken wonder. Explore slow travel itineraries, wellness sanctuaries, and pristine remote escapes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    "url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="p-6">
                <div className="flex justify-between items-center text-xs font-bold text-[#C9A66B] uppercase tracking-wider mb-2">
                  <span>{item.listingDetails?.city || 'Kyoto'}</span>
                  <span>{item.listingDetails?.priceTier || '$$$$'}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-semibold text-amber-400">&starf; {item.listingDetails?.rating || 4.9} Rating</span>
                  <span className="text-zinc-500 uppercase text-[10px] tracking-wider">JXP Verified</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
