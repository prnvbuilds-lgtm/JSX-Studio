import React from 'react';

export const metadata = {
  title: 'Contact & Inquiries — JXP Guide',
  description: 'Reach the JXP Guide editorial and partnership team.',
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#0D0D0D] py-20 px-6 max-w-3xl mx-auto text-white">
      <div className="text-center space-y-3 mb-12">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase">
          DIRECT LINE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold">
          Get in Touch
        </h1>
        <p className="text-xs text-zinc-400">
          Editorial tips, brand collaborations, and general inquiries.
        </p>
      </div>

      <div className="bg-[#141414] border border-[#242424] rounded-2xl p-8 sm:p-10">
        <form className="space-y-6">
          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-zinc-400 mb-2">
              Your Name
            </label>
            <input
              type="text"
              required
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B3231C]"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-zinc-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B3231C]"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-zinc-400 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              required
              className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-4 text-sm text-white focus:outline-none focus:border-[#B3231C]"
            />
          </div>
          <button
            type="submit"
            className="w-full font-sans uppercase font-bold tracking-[0.16em] text-xs py-4 rounded-full bg-[#B3231C] text-white hover:bg-[#8F1C16] shadow-xl shadow-red-950/40 transition-all duration-300"
          >
            Send Message &rarr;
          </button>
        </form>
      </div>
    </div>
  );
}
