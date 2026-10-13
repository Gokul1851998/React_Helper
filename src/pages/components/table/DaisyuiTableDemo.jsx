import React, { useState } from 'react';
import { usePostsQuery } from '../../../api/useApiData';
import { MessageSquare, ThumbsUp, ThumbsDown, Eye, Search } from 'lucide-react';

export default function DaisyuiTableDemo() {
  const { data: posts = [], isLoading } = usePostsQuery();
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('ALL');

  // Extract all distinct tags from posts
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags || []))).slice(0, 10);

  const filtered = posts.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.body.toLowerCase().includes(search.toLowerCase());
    const matchTag = selectedTag === 'ALL' || p.tags?.includes(selectedTag);
    return matchSearch && matchTag;
  });

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">DaisyUI & Tailwind Table</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              DaisyUI Components
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Component table crafted with DaisyUI utility classes & real live posts data from DummyJSON.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-sm input-bordered pl-9 rounded-xl w-64 bg-slate-50 focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Filter Tag Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setSelectedTag('ALL')}
          className={`badge cursor-pointer px-3 py-2 text-xs font-medium transition ${
            selectedTag === 'ALL' ? 'badge-primary text-white' : 'badge-ghost'
          }`}
        >
          All Topics
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`badge cursor-pointer px-3 py-2 text-xs font-medium capitalize transition ${
              selectedTag === tag ? 'badge-primary text-white' : 'badge-ghost'
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* DaisyUI Responsive Table */}
      <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
        {isLoading ? (
          <div className="p-12 text-center flex flex-col items-center justify-center gap-3">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <span className="text-sm text-slate-500">Loading articles feed...</span>
          </div>
        ) : (
          <table className="table table-zebra table-pin-rows">
            <thead>
              <tr className="bg-slate-100/80 text-slate-700 text-xs uppercase font-bold">
                <th className="w-12">#</th>
                <th>Article Title & Summary</th>
                <th>Tags</th>
                <th className="text-center">Reactions</th>
                <th className="text-right">Views</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 20).map((post, idx) => (
                <tr key={post.id} className="hover:bg-slate-50 transition">
                  <th className="text-slate-400 font-mono text-xs">{post.id}</th>
                  <td>
                    <div className="font-semibold text-slate-800 line-clamp-1">{post.title}</div>
                    <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">{post.body}</div>
                  </td>
                  <td>
                    <div className="flex flex-wrap gap-1">
                      {post.tags?.map((t) => (
                        <span key={t} className="badge badge-sm badge-outline text-[11px] capitalize text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center gap-3 text-xs">
                      <span className="flex items-center gap-1 text-emerald-600 font-medium">
                        <ThumbsUp className="w-3.5 h-3.5" />
                        {post.reactions?.likes ?? (post.id * 7) % 85}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <ThumbsDown className="w-3.5 h-3.5" />
                        {post.reactions?.dislikes ?? (post.id * 3) % 12}
                      </span>
                    </div>
                  </td>
                  <td className="text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600">
                      <Eye className="w-3.5 h-3.5 text-slate-400" />
                      {(post.views || (post.id * 312) % 4500 + 120).toLocaleString()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
