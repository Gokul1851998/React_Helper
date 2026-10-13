import React from 'react';
import { usePostsQuery } from '../../../api/useApiData';
import { MessageSquare, ThumbsUp, HelpCircle } from 'lucide-react';

export default function DaisyuiAccordionDemo() {
  const { data: posts = [], isLoading } = usePostsQuery();

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">DaisyUI Collapse & Accordion</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              DaisyUI Collapse
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            CSS-only accordion functionality using HTML radio inputs, DaisyUI collapse-arrow classes, and live articles.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-base font-bold text-slate-800 mb-4">Knowledge Base Articles (DaisyUI Radio Accordion)</h2>

          {isLoading ? (
            <div className="p-8 text-center">
              <span className="loading loading-spinner text-primary"></span>
            </div>
          ) : (
            <div className="space-y-3">
              {posts.slice(0, 5).map((post, idx) => (
                <div
                  key={post.id}
                  className="collapse collapse-arrow bg-slate-50 border border-slate-200 rounded-2xl transition-all"
                >
                  <input type="radio" name="my-accordion-2" defaultChecked={idx === 0} />
                  <div className="collapse-title text-sm font-bold text-slate-800 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs shrink-0">
                      #{post.id}
                    </span>
                    <span className="line-clamp-1">{post.title}</span>
                  </div>
                  <div className="collapse-content text-xs text-slate-600 leading-relaxed border-t border-slate-200/50 pt-3">
                    <p>{post.body}</p>
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100">
                      <div className="flex gap-1">
                        {post.tags?.map((t) => (
                          <span key={t} className="badge badge-sm badge-ghost text-[10px] capitalize">
                            #{t}
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-slate-400">
                        <ThumbsUp className="w-3.5 h-3.5 text-emerald-500" />
                        {post.reactions?.likes || 42} helpful votes
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
