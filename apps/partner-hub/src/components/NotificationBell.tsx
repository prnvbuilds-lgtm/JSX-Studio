import React, { useState } from 'react';

export const NotificationBell: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setUnreadCount(0);
        }}
        aria-label="View notifications"
        className="relative p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-[#B3231C] rounded-full ring-2 ring-[#0D0D0D]" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-[#1A1A1A] border border-[#2E2E2E] rounded-xl shadow-2xl p-4 z-50 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-[#282828] mb-3">
            <span className="text-xs uppercase font-bold tracking-wider text-white">Notifications</span>
            <span className="text-[10px] text-zinc-400 font-semibold">Latest updates</span>
          </div>
          <div className="space-y-3 text-xs">
            <div className="p-2.5 rounded-lg bg-[#222222] border border-zinc-800">
              <p className="text-white font-semibold mb-1">New Feature Guide Live</p>
              <p className="text-zinc-400 text-[11px]">Your listing was added to &ldquo;Top Brunch Spots in West Palm Beach&rdquo;.</p>
            </div>
            <div className="p-2.5 rounded-lg bg-[#222222] border border-zinc-800">
              <p className="text-white font-semibold mb-1">Campaign Performance</p>
              <p className="text-zinc-400 text-[11px]">+24% profile views recorded this week.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
