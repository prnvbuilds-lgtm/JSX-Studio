import React from 'react';
import Link from 'next/link';
import { wpClient, GET_LISTINGS_BY_VERTICAL_QUERY, Listing } from '@jxp/graphql-client';

export const revalidate = 60;

export const metadata = {
  title: 'Community & Purpose — JXP Guide',
  description: 'Hospitality brands that give back, champion sustainability, and empower local artisans.',
};

async function getCommunityListings(): Promise<Listing[]> {
  try {
    const res = await wpClient.request<{ vertical?: { listings?: { nodes: Listing[] } } }>(
      GET_LISTINGS_BY_VERTICAL_QUERY,
      { verticalSlug: 'community' }
    );
    if (res.vertical?.listings?.nodes && res.vertical.listings.nodes.length > 0) {
      return res.vertical.listings.nodes;
    }
  } catch (err) {
    console.warn('[GraphQL] Community query error, falling back:', err);
  }

  return [
    {
      id: 'comm-1',
      databaseId: 501,
      title: 'Blue Ridge Heritage Weaver Collective',
      slug: 'blue-ridge-weaver-collective',
      excerpt: 'Regenerative artisan cooperative preserving heirloom handloom weaving and natural dyeing.',
      date: new Date().toISOString(),
      listingDetails: { city: 'Asheville, North Carolina', priceTier: '$$', rating: 5.0, verificationStatus: 'verified' },
    },
    {
      id: 'comm-2',
      databaseId: 502,
      title: 'Regenerative Agriculture in Hospitality',
      slug: 'blue-ridge-weaver-collective',
      excerpt: 'Boutique restaurants partnering with regional family farms to establish zero-waste composting.',
      date: new Date().toISOString(),
      listingDetails: { city: 'Hudson Valley Soil Collective', priceTier: '$$', rating: 4.9, verificationStatus: 'featured' },
    },
  ];
}

export default async function CommunityPage() {
  const listings = await getCommunityListings();

  return (
    <div className="w-full bg-[#0D0D0D] py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-12 border-b border-[#222222] pb-8">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-2">
          PEOPLE &amp; PURPOSE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
          Community &amp; Local Impact
        </h1>
        <p className="text-zinc-400 text-sm max-w-2xl">
          Hospitality is profoundly human. We celebrate purveyors who safeguard biodiversity, nurture generational crafts, and lift their communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {listings.map((item) => (
          <Link
            key={item.id}
            href={`/listing/${item.slug}`}
            className="block group"
          >
            <div className="h-full p-8 rounded-xl bg-[#181818] border border-[#282828] hover:border-[#B3231C] hover:-translate-y-1 transition-all duration-300">
              <span className="text-xs uppercase tracking-widest text-[#B3231C] font-bold block mb-2">
                {item.listingDetails?.city || 'Local Initiative'}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white group-hover:text-red-400 transition-colors mb-3">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">{item.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                <span className="text-xs text-amber-400 font-semibold">
                  &starf; {item.listingDetails?.rating || 5.0} Verified Impact
                </span>
                <span className="text-xs font-semibold text-white underline underline-offset-4 group-hover:text-red-400">
                  Explore Journal &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
