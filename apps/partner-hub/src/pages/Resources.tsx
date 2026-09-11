import React from 'react';

export const Resources: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="border-b border-[#222222] pb-6">
        <span className="text-[11px] font-bold tracking-[0.24em] text-[#B3231C] uppercase block mb-1">
          KNOWLEDGE BASE &amp; ASSETS
        </span>
        <h1 className="font-serif text-3xl font-bold text-white">Partner Resources</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { title: 'Brand Guidelines & Digital Badges', size: 'PDF &bull; 4.2 MB' },
          { title: 'JXP Media Kit & Q4 Audience Demographics', size: 'PDF &bull; 8.1 MB' },
          { title: 'Photo Submission Standards for Tastemakers', size: 'PDF &bull; 2.4 MB' },
          { title: 'Hospitality Partner Agreement & Terms', size: 'PDF &bull; 1.1 MB' },
        ].map((item, idx) => (
          <div key={idx} className="p-5 rounded-xl bg-[#181818] border border-[#282828] hover:border-[#383838] transition-colors flex items-center justify-between">
            <div>
              <h4 className="font-bold text-sm text-white mb-1">{item.title}</h4>
              <span className="text-[11px] text-zinc-500" dangerouslySetInnerHTML={{ __html: item.size }} />
            </div>
            <button className="px-3 py-1.5 rounded bg-[#242424] hover:bg-[#2E2E2E] text-xs font-semibold text-zinc-300 transition-colors">
              Download &darr;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
