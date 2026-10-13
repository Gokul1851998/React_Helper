import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { Cpu, Database, Network, Shield, CheckCircle } from 'lucide-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function HeadlessTabsDemo() {
  const categories = {
    'Compute Infrastructure': [
      { id: 1, title: 'Cluster worker auto-scaler v4', time: '5h ago', load: '64% GPU Load' },
      { id: 2, title: 'Ephemeral runner nodes in Oregon', time: '2h ago', load: '12% CPU Load' },
    ],
    'Database Shards': [
      { id: 1, title: 'PostgreSQL Read Replica 01 (Frankfurt)', time: '1d ago', load: '0.8ms Query Latency' },
      { id: 2, title: 'Redis Distributed Cache Pool', time: '2d ago', load: '99.4% Hit Ratio' },
    ],
    'Security Perimeter': [
      { id: 1, title: 'Mutual TLS (mTLS) Mesh Enforcement', time: 'Active', load: 'Zero-Trust Protocol' },
      { id: 2, title: 'Automated Vulnerability Scanner', time: 'Last run: 15m ago', load: 'Zero CVEs detected' },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Headless UI Animated Tabs</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              @headlessui/react Tab
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Accessible, smooth animated tabs by Tailwind Labs with keyboard arrows navigation.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-3xl mx-auto">
        <Tab.Group>
          <Tab.List className="flex space-x-2 rounded-2xl bg-slate-100 p-1.5">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-xl py-2.5 text-xs font-bold leading-5 transition-all outline-none',
                    selected
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-6">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className="rounded-xl focus:outline-none space-y-3 animate-fadeIn"
              >
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-slate-50 transition"
                  >
                    <div>
                      <div className="text-sm font-bold text-slate-800">{post.title}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{post.time}</div>
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg">
                      {post.load}
                    </span>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
