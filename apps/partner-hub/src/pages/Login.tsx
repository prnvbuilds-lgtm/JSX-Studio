import React, { useState } from 'react';
import { partnerApi } from '../services/api-client';

export const Login: React.FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('concierge@thecoastaltable.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await partnerApi.login(email, password);
    setLoading(false);
    onLoginSuccess();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D0D] px-6 py-12">
      <div className="w-full max-w-md bg-[#141414] border border-[#242424] rounded-2xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 mx-auto rounded-full border border-red-500/50 bg-gradient-to-br from-red-950 via-black to-red-900 flex items-center justify-center p-0.5 shadow-lg shadow-red-950/40">
            <span className="font-serif font-black tracking-tighter text-red-500 text-lg italic">
              JXP
            </span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-white tracking-wide">
            Partner Hub Portal
          </h2>
          <p className="text-xs text-zinc-400">
            Sign in to manage your JXP Guide listings, campaigns, and analytics.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-400 mb-2">
              Partner Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#1C1C1C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B3231C]"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-400 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#1C1C1C] border border-[#2C2C2C] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B3231C]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full font-sans uppercase font-bold tracking-[0.16em] text-xs py-3.5 rounded-full bg-[#B3231C] text-white hover:bg-[#8F1C16] shadow-xl shadow-red-950/50 transition-all duration-300"
          >
            {loading ? 'Authenticating...' : 'Sign In to Partner Hub →'}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-[#222222]">
          <span className="text-xs text-zinc-500">
            Need partner access?{' '}
            <a href="http://localhost:3000/partner-with-jxp" className="text-[#C9A66B] hover:underline">
              Inquire here
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
