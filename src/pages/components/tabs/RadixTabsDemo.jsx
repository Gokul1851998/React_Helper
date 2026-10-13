import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Code, Terminal, Settings, ShieldCheck, Sparkles } from 'lucide-react';

export default function RadixTabsDemo() {
  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Radix UI Primitives Tabs</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-200">
              @radix-ui/react-tabs
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            WAI-ARIA compliant unstyled Tabs primitive with full keyboard arrow controls and animated content panels.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-3xl mx-auto">
        <Tabs.Root defaultValue="tab1" className="flex flex-col">
          <Tabs.List className="flex border-b border-slate-200 gap-6">
            <Tabs.Trigger
              value="tab1"
              className="flex items-center gap-2 pb-3 text-sm font-bold text-slate-500 border-b-2 border-transparent data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 outline-none transition"
            >
              <Terminal className="w-4 h-4" /> CLI Terminal
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab2"
              className="flex items-center gap-2 pb-3 text-sm font-bold text-slate-500 border-b-2 border-transparent data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 outline-none transition"
            >
              <Code className="w-4 h-4" /> TypeScript Config
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab3"
              className="flex items-center gap-2 pb-3 text-sm font-bold text-slate-500 border-b-2 border-transparent data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600 outline-none transition"
            >
              <Settings className="w-4 h-4" /> Environment Flags
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="tab1" className="pt-6 outline-none animate-fadeIn">
            <div className="p-4 bg-slate-900 rounded-2xl text-slate-100 font-mono text-xs space-y-2">
              <div className="text-slate-400"># Start Vite dev server on port 5173</div>
              <div className="text-emerald-400">$ npm run dev</div>
              <div className="text-slate-500">  VITE v6.1.2 ready in 184 ms</div>
              <div className="text-slate-500">  ➜ Local: http://localhost:5173/</div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="tab2" className="pt-6 outline-none animate-fadeIn">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 font-mono">
              <pre>{`{
  "compilerOptions": {
    "target": "ESNext",
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "strict": true
  }
}`}</pre>
            </div>
          </Tabs.Content>

          <Tabs.Content value="tab3" className="pt-6 outline-none animate-fadeIn">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200 text-sm">
                <span className="font-semibold text-slate-700">ENABLE_VIRTUALIZATION</span>
                <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">true</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200 text-sm">
                <span className="font-semibold text-slate-700">STRICT_ARIA_COMPLIANCE</span>
                <span className="text-xs font-mono bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">true</span>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}
