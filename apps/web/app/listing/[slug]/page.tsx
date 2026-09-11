import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  wpClient,
  GET_LISTING_BY_SLUG_QUERY,
  GET_ALL_LISTINGS_QUERY,
  Listing,
} from '@jxp/graphql-client';

export const revalidate = 60;

interface ListingPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Fallback listings if offline or database lookup fails
const FALLBACK_LISTINGS: Record<string, Partial<Listing>> = {
  'the-glasshouse-eco-resort': {
    title: 'The Glasshouse Eco-Resort',
    slug: 'the-glasshouse-eco-resort',
    excerpt: 'Luxury sustainable sanctuary nestled in the lush tropical hills of Ubud.',
    content:
      '<p>A luxury sustainable sanctuary nestled in the lush tropical hills, offering panoramic forest views, organic dining, and private infinity plunge pools.</p><p>Designed in harmonious dialog with surrounding rice terraces, the retreat employs solar architecture, rainwater harvesting, and biodynamic permaculture gardens that supply the daily culinary menu.</p>',
    listingDetails: {
      tagline: 'Sustainable architecture meets ultra-luxury in Ubud.',
      priceTier: '$$$$',
      rating: 4.95,
      reviewCount: 142,
      address: 'Jl. Raya Sayan No. 88, Ubud',
      city: 'Bali, Indonesia',
      coordinates: '-8.5193, 115.2435',
      contactPhone: '+62 361 889900',
      contactEmail: 'concierge@glasshouseresort.com',
      websiteUrl: 'https://glasshouseresort.com',
      bookingUrl: 'https://glasshouseresort.com/reserve',
      verificationStatus: 'verified',
    },
    verticals: { nodes: [{ id: '1', name: 'Living', slug: 'living' }] },
    locations: { nodes: [{ id: '1', name: 'Bali', slug: 'bali' }] },
  },
  'osteria-del-mare': {
    title: 'Osteria Del Mare',
    slug: 'osteria-del-mare',
    excerpt: 'Michelin-starred seaside dining celebrating heritage coastal Italian gastronomy.',
    content:
      '<p>Michelin-starred seaside dining celebrating heritage coastal Italian gastronomy, fresh daily catch, and biodynamic natural wines.</p><p>Perched high on the dramatic cliffs of Positano, Osteria Del Mare sources seafood directly from generational local artisanal fishermen each morning.</p>',
    listingDetails: {
      tagline: 'Coastal gastronomy with cliffside Mediterranean vistas.',
      priceTier: '$$$',
      rating: 4.88,
      reviewCount: 215,
      address: 'Via Panoramica 12',
      city: 'Positano, Italy',
      coordinates: '40.6281, 14.4850',
      contactPhone: '+39 089 875000',
      contactEmail: 'reservations@osteriadelmare.it',
      websiteUrl: 'https://osteriadelmare.it',
      bookingUrl: 'https://osteriadelmare.it/table',
      verificationStatus: 'verified',
    },
    verticals: { nodes: [{ id: '2', name: 'Dining', slug: 'dining' }] },
    locations: { nodes: [{ id: '2', name: 'Amalfi', slug: 'amalfi' }] },
  },
  'komorebi-forest-onsen': {
    title: 'Komorebi Forest Onsen',
    slug: 'komorebi-forest-onsen',
    excerpt: 'Traditional Japanese ryokan with geothermal open-air cedar onsen baths.',
    content:
      '<p>Traditional Japanese ryokan with geothermal open-air cedar onsen baths, kaiseki multi-course dinners, and zen forest architecture.</p><p>Nestled deep within the bamboo groves of Arashiyama, this sanctuary has welcomed travelers seeking quiet contemplation and restorative mineral hot springs for over a century.</p>',
    listingDetails: {
      tagline: 'Centuries-old healing waters and minimalist sanctuary.',
      priceTier: '$$$$',
      rating: 4.98,
      reviewCount: 98,
      address: 'Arashiyama Sagatenryuji',
      city: 'Kyoto, Japan',
      coordinates: '35.0116, 135.6778',
      contactPhone: '+81 75 871 0000',
      contactEmail: 'stay@komorebi-onsen.jp',
      websiteUrl: 'https://komorebi-onsen.jp',
      bookingUrl: 'https://komorebi-onsen.jp/book',
      verificationStatus: 'verified',
    },
    verticals: { nodes: [{ id: '3', name: 'Travel', slug: 'travel' }] },
    locations: { nodes: [{ id: '3', name: 'Kyoto', slug: 'kyoto' }] },
  },
};

async function getListing(slug: string): Promise<Listing | null> {
  try {
    const res = await wpClient.request<{ listing: Listing | null }>(
      GET_LISTING_BY_SLUG_QUERY,
      { slug }
    );
    if (res.listing) {
      return res.listing;
    }
  } catch (err) {
    console.warn(`[GraphQL] Failed to fetch listing "${slug}", checking fallback:`, err);
  }

  if (FALLBACK_LISTINGS[slug]) {
    return FALLBACK_LISTINGS[slug] as Listing;
  }

  return null;
}

async function getRelatedListings(currentSlug: string): Promise<Listing[]> {
  try {
    const res = await wpClient.request<{ listings: { nodes: Listing[] } }>(
      GET_ALL_LISTINGS_QUERY,
      { first: 4 }
    );
    return (res.listings?.nodes || []).filter((item) => item.slug !== currentSlug).slice(0, 3);
  } catch (_e) {
    return Object.values(FALLBACK_LISTINGS)
      .filter((item) => item.slug !== currentSlug)
      .slice(0, 3) as Listing[];
  }
}

export async function generateStaticParams() {
  try {
    const res = await wpClient.request<{ listings?: { nodes?: { slug: string }[] } }>(
      GET_ALL_LISTINGS_QUERY,
      { first: 50 }
    );
    if (res.listings?.nodes && res.listings.nodes.length > 0) {
      return res.listings.nodes.map((item) => ({ slug: item.slug }));
    }
  } catch (_e) {
    // fallback if WordPress is offline during static export
  }

  return [
    { slug: 'the-glasshouse-eco-resort' },
    { slug: 'osteria-del-mare' },
    { slug: 'komorebi-forest-onsen' },
    { slug: 'equinox-harvest-salon' },
    { slug: 'blue-ridge-weaver-collective' },
  ];
}

export async function generateMetadata({ params }: ListingPageProps) {
  const { slug } = await params;
  const listing = await getListing(slug);

  if (!listing) {
    return {
      title: 'Listing Not Found — JXP Guide',
    };
  }

  return {
    title: `${listing.title} — JXP Guide`,
    description:
      listing.listingDetails?.tagline ||
      listing.excerpt ||
      `Discover ${listing.title} on JXP Guide.`,
  };
}

export default async function ListingDetailPage({ params }: ListingPageProps) {
  const { slug } = await params;
  const listing = await getListing(slug);

  if (!listing) {
    notFound();
  }

  const related = await getRelatedListings(slug);
  const vertical = listing.verticals?.nodes?.[0]?.name || 'Editorial';
  const verticalSlug = listing.verticals?.nodes?.[0]?.slug || 'living';
  const location = listing.locations?.nodes?.[0]?.name || listing.listingDetails?.city || 'Worldwide';
  const details = listing.listingDetails || {};

  return (
    <div className="w-full bg-[#0D0D0D] text-white">
      {/* 1. BREADCRUMBS & TOP NAV */}
      <section className="border-b border-[#1E1E1E] bg-[#121212]/70 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs text-zinc-400">
          <nav className="flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href={`/${verticalSlug}`} className="hover:text-white transition-colors capitalize">
              {vertical}
            </Link>
            <span>/</span>
            <span className="text-zinc-200 truncate max-w-xs">{listing.title}</span>
          </nav>
          <Link
            href={`/${verticalSlug}`}
            className="text-[11px] font-bold tracking-widest text-[#B3231C] hover:text-white uppercase transition-colors"
          >
            &larr; Back to {vertical}
          </Link>
        </div>
      </section>

      {/* 2. HERO GALLERY BANNER */}
      <section className="relative h-[420px] sm:h-[520px] w-full bg-zinc-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-12 z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#B3231C] text-white">
              {vertical}
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/20 text-white backdrop-blur-md">
              {location}
            </span>
            {details.priceTier && (
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-black/60 text-white border border-white/20 backdrop-blur-md">
                {details.priceTier}
              </span>
            )}
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 bg-amber-950/40 border border-amber-500/30 px-3 py-1 rounded-full flex items-center gap-1">
              &starf; {details.rating || 4.9} ({details.reviewCount || 100}+ Curated Reviews)
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            {listing.title}
          </h1>

          {details.tagline && (
            <p className="font-script text-[#C9A66B] text-2xl sm:text-3xl max-w-3xl">
              &ldquo;{details.tagline}&rdquo;
            </p>
          )}
        </div>
      </section>

      {/* 3. CONTENT & BOOKING INFO GRID */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left 8 Cols: Story, Overview & Details */}
        <div className="lg:col-span-8 space-y-12">
          {/* About / Editorial Story */}
          <div className="bg-[#141414] border border-[#222222] rounded-2xl p-8 sm:p-10 space-y-6">
            <div className="border-b border-[#242424] pb-4">
              <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-1">
                CURATOR&rsquo;S NOTE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                The Experience &amp; Story
              </h2>
            </div>

            {listing.content ? (
              <div
                className="prose prose-invert max-w-none text-zinc-300 text-sm sm:text-base leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: listing.content }}
              />
            ) : (
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {listing.excerpt ||
                  'An exceptional boutique hospitality destination celebrated for architectural intention, sensory detail, and restorative encounters.'}
              </p>
            )}
          </div>

          {/* Key Specs & Highlights */}
          <div className="bg-[#141414] border border-[#222222] rounded-2xl p-8 sm:p-10">
            <h3 className="font-serif text-xl font-bold text-white mb-6">Spot Highlights &amp; Specs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Destination</div>
                <div className="text-white font-semibold mt-1">{details.city || location}</div>
              </div>
              <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Price Tier</div>
                <div className="text-white font-semibold mt-1">{details.priceTier || '$$$'}</div>
              </div>
              <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Verification</div>
                <div className="text-emerald-400 font-semibold mt-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  JXP Verified Partner
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#262626]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Rating</div>
                <div className="text-amber-400 font-semibold mt-1">
                  &starf; {details.rating || 4.9} / 5.0
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right 4 Cols: Sticky Reservation & Contact Box */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-[#141414] border border-[#262626] rounded-2xl p-8 shadow-2xl space-y-6">
            <div className="border-b border-[#242424] pb-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C9A66B]">
                BOUTIQUE RESERVATION
              </span>
              <div className="text-2xl font-serif font-bold text-white mt-1">
                Reserve or Inquire
              </div>
              <p className="text-xs text-zinc-400 mt-1">
                Direct booking access with verified priority privileges.
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <a
                href={details.bookingUrl || details.websiteUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center font-sans uppercase font-bold tracking-[0.14em] text-xs py-4 rounded-full bg-[#B3231C] text-white hover:bg-[#8F1C16] shadow-xl shadow-red-950/50 transition-all duration-300"
              >
                BOOK DIRECT WITH SPOT &rarr;
              </a>

              {details.websiteUrl && (
                <a
                  href={details.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center font-sans uppercase font-bold tracking-[0.14em] text-xs py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                >
                  VISIT OFFICIAL WEBSITE &nearr;
                </a>
              )}
            </div>

            {/* Contact details */}
            <div className="pt-4 border-t border-[#222222] space-y-3 text-xs text-zinc-400">
              {details.address && (
                <div>
                  <span className="text-zinc-500 uppercase font-semibold text-[10px] block">Address</span>
                  <span className="text-zinc-300">{details.address}</span>
                </div>
              )}
              {details.contactPhone && (
                <div>
                  <span className="text-zinc-500 uppercase font-semibold text-[10px] block">Telephone</span>
                  <a href={`tel:${details.contactPhone}`} className="text-zinc-300 hover:text-white">
                    {details.contactPhone}
                  </a>
                </div>
              )}
              {details.contactEmail && (
                <div>
                  <span className="text-zinc-500 uppercase font-semibold text-[10px] block">Email</span>
                  <a href={`mailto:${details.contactEmail}`} className="text-zinc-300 hover:text-white">
                    {details.contactEmail}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. RELATED CURATIONS */}
      {related.length > 0 && (
        <section className="border-t border-[#222222] bg-[#101010] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-1">
                  CONTINUE EXPLORING
                </span>
                <h2 className="font-serif text-3xl font-bold text-white">More Curated Stays &amp; Spots</h2>
              </div>
              <Link
                href={`/${verticalSlug}`}
                className="text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
              >
                View All {vertical} &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/listing/${item.slug}`}
                  className="bg-[#161616] border border-[#262626] rounded-xl overflow-hidden hover:border-[#B3231C] hover:-translate-y-1 transition-all duration-300 group block"
                >
                  <div className="h-48 bg-zinc-800 relative overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80')",
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-sm">
                        {item.listingDetails?.city || 'Curated'}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-serif text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 line-clamp-2">{item.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
