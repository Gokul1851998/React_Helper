import React, { useState } from 'react';
import { Sparkles, Heart, Zap, Play, Check, RefreshCw } from 'lucide-react';

export default function DaisyuiButtonDemo() {
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">DaisyUI & Tailwind Buttons</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              DaisyUI Utility Classes
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Component buttons built with Tailwind CSS and DaisyUI utility modifiers: themes, glass effects, and circle buttons.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Colors & Themes */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h2 className="text-base font-bold text-slate-800">DaisyUI Semantic Themes</h2>
          <div className="flex flex-wrap gap-3">
            <button className="btn btn-primary rounded-xl text-white">Primary</button>
            <button className="btn btn-secondary rounded-xl text-white">Secondary</button>
            <button className="btn btn-accent rounded-xl text-white">Accent</button>
            <button className="btn btn-info rounded-xl text-white">Info</button>
            <button className="btn btn-success rounded-xl text-white">Success</button>
            <button className="btn btn-warning rounded-xl text-white">Warning</button>
            <button className="btn btn-error rounded-xl text-white">Error</button>
          </div>
        </div>

        {/* Outline & Glass */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h2 className="text-base font-bold text-slate-800">Outline, Glass & Modifier Styles</h2>
          <div className="flex flex-wrap gap-3">
            <button className="btn btn-outline btn-primary rounded-xl">Outline Primary</button>
            <button className="btn btn-outline btn-secondary rounded-xl">Outline Secondary</button>
            <button className="btn btn-neutral rounded-xl text-white">Neutral</button>
            <button className="btn btn-ghost rounded-xl">Ghost Button</button>
            <button className="btn btn-link">Link Style</button>
          </div>
        </div>

        {/* Loading and Shapes */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h2 className="text-base font-bold text-slate-800">Sizes, Shapes & Loading States</h2>
          <div className="flex flex-wrap items-center gap-3">
            <button className="btn btn-lg btn-primary rounded-2xl text-white">Large Button</button>
            <button className="btn btn-sm btn-primary rounded-xl text-white">Small</button>
            <button className="btn btn-xs btn-primary rounded-lg text-white">Tiny (XS)</button>

            {/* Circle & Square */}
            <button
              onClick={() => setLiked(!liked)}
              className={`btn btn-circle ${liked ? 'btn-secondary text-white' : 'btn-outline'}`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={() => {
                setLoading(true);
                setTimeout(() => setLoading(false), 2000);
              }}
              className="btn btn-primary rounded-xl text-white"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span> Loading...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4" /> Trigger Loader
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
