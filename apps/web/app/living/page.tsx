import React from 'react';
import Link from 'next/link';
import { wpClient, GET_LISTINGS_BY_VERTICAL_QUERY, Listing } from '@jxp/graphql-client';

export const revalidate = 60;

export const metadata = {
  title: 'Living & Boutique Stays — JXP Guide',
  description: 'Handcrafted architectural sanctuaries, eco-villas, and boutique stays.',
};

async function getLivingListings(): Promise<Listing[]> {
  try {
    const res = await wpClient.request<{ vertical?: { listings?: { nodes: Listing[] } } }>(
      GET_LISTINGS_BY_VERTICAL_QUERY,
      { verticalSlug: 'living' }
    );
    if (res.vertical?.listings?.nodes && res.vertical.listings.nodes.length > 0) {
      return res.vertical.listings.nodes;
    }
  } catch (err) {
    console.warn('[GraphQL] Living query error, falling back:', err);
  }

  return [
    {
      id: 'living-1',
      databaseId: 101,
      title: 'The Glasshouse Eco-Resort',
      slug: 'the-glasshouse-eco-resort',
      excerpt: 'Luxury sustainable sanctuary nestled in the lush tropical hills of Ubud.',
      date: new Date().toISOString(),
      listingDetails: { city: 'Bali, Indonesia', priceTier: '$$$$', rating: 4.95, verificationStatus: 'verified' },
    },
    {
      id: 'living-2',
      databaseId: 102,
      title: 'Miramar Botanical Villa & Sanctuary',
      slug: 'the-glasshouse-eco-resort',
      excerpt: 'An architecturally celebrated sanctuary immersed in lush private gardens.',
      date: new Date().toISOString(),
      listingDetails: { city: 'Sedona', priceTier: '$$$$', rating: 5.0, verificationStatus: 'featured' },
    },
  ];
}

export default async function LivingPage() {
  const listings = await getLivingListings();

  return (
    <div className="w-full bg-[#0D0D0D] py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12 border-b border-[#222222] pb-8">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-2">
          CURATED STAYS
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
          Living &amp; Sanctuaries
        </h1>
        <p className="text-zinc-400 text-sm max-w-2xl">
          From secluded coastal pavilions to historic urban lofts, explore stays that redefine comfort, design, and presence.
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
                      "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/70 text-white backdrop-blur-sm">
                    {item.listingDetails?.city || 'Bali'}
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
                  <span className="font-mono text-[#B3231C] font-bold">{item.listingDetails?.priceTier || '$$$$'}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
