import React, { useState } from 'react';
import { Sparkles, ArrowRight, Zap, Check, Copy } from 'lucide-react';

export default function ModernButtonDemo() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">NextUI / HeroUI Modern Buttons</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-700 border border-cyan-200">
              HeroUI Style System
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Modern UI aesthetic buttons with glowing backdrops, frosted glassmorphic borders, and smooth scaling physics.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Glow & Gradient Buttons */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white space-y-6 shadow-xl">
          <div>
            <h2 className="text-base font-bold">Luminous Glow & Shimmer Triggers</h2>
            <p className="text-xs text-slate-400 mt-1">Buttons engineered with radial gradients and hover bloom effects.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Ambient Glow Button */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300 group-hover:duration-200" />
              <button className="relative px-6 py-3 bg-slate-900 rounded-2xl leading-none flex items-center gap-2 text-white font-bold text-xs">
                <Sparkles className="w-4 h-4 text-pink-400" /> Luminous Pulse
              </button>
            </div>

            {/* Shimmering Button */}
            <button className="relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-6 py-1 text-xs font-bold text-white backdrop-blur-3xl gap-2">
                <Zap className="w-3.5 h-3.5 text-indigo-400" /> Border Conic Beam
              </span>
            </button>

            {/* Frosted Glass Button */}
            <button className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xl text-white font-semibold text-xs transition duration-200 shadow-sm flex items-center gap-2">
              Frosted Glass Pill <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Micro-Interactions */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-slate-800">Micro-Interaction Triggers</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleCopy}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs transition duration-200 flex items-center gap-2 ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied to Clipboard!' : 'Copy Code Snippet'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
