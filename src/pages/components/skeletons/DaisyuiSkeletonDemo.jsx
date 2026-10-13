import React, { useState } from 'react';
import { usePostsQuery } from '../../../api/useApiData';
import { RefreshCw, ThumbsUp, MessageCircle } from 'lucide-react';

export default function DaisyuiSkeletonDemo() {
  const { data: posts = [] } = usePostsQuery();
  const [loading, setLoading] = useState(false);

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">DaisyUI & Tailwind Skeletons</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              DaisyUI Skeleton
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Pure CSS Tailwind animation skeletons mimicking article feeds, author badges, and metric cards.
          </p>
        </div>

        <button
          onClick={simulateLoading}
          className="btn btn-primary btn-sm rounded-xl text-white font-semibold gap-2"
        >
          <RefreshCw className="w-4 h-4" /> Simulate 2s Fetch
        </button>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {(loading ? Array.from(new Array(4)) : posts.slice(0, 4)).map((post, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            {post ? (
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                    #{post.id}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">{post.title}</h3>
                    <div className="text-[11px] text-slate-400">Published in Technical Digest</div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">{post.body}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-400 border-t border-slate-100 pt-3">
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <ThumbsUp className="w-3.5 h-3.5" /> {post.reactions?.likes || 24} Upvotes
                  </span>
                  <span>{post.tags?.join(' • ')}</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-4">
                  <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="skeleton h-4 w-1/3"></div>
                    <div className="skeleton h-3 w-1/4"></div>
                  </div>
                </div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-4/5"></div>
                <div className="skeleton h-4 w-2/3"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
