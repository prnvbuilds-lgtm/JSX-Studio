import React from 'react';

export const Settings: React.FC = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="border-b border-[#222222] pb-6">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-1">
          CONFIGURATION
        </span>
        <h1 className="font-serif text-3xl font-bold text-white">Partner Settings</h1>
      </div>

      <div className="bg-[#181818] border border-[#282828] rounded-xl p-6 space-y-6 shadow-lg">
        <div>
          <h4 className="font-bold text-sm text-white mb-2">Notification Preferences</h4>
          <div className="space-y-3 text-xs text-zinc-300">
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="rounded bg-zinc-800 border-zinc-700 text-[#B3231C]" />
              <span>Email me when a new editorial placement or feature story goes live</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="rounded bg-zinc-800 border-zinc-700 text-[#B3231C]" />
              <span>Weekly performance digest (+clicks, +impressions)</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="rounded bg-zinc-800 border-zinc-700 text-[#B3231C]" />
              <span>Direct messages from Partner Success Lead</span>
            </label>
          </div>
        </div>

        <div className="pt-6 border-t border-[#262626]">
          <h4 className="font-bold text-sm text-white mb-2">API &amp; Webhook Credentials</h4>
          <p className="text-xs text-zinc-400 mb-4">
            Connect your custom reservation engine or CRM with JXP Studio.
          </p>
          <button className="px-5 py-2.5 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-xs font-semibold text-white border border-[#2E2E2E] transition-colors">
            Generate API Key &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
