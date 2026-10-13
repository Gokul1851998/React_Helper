import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Shield, Terminal, Zap, Lock } from 'lucide-react';

export default function RadixAccordionDemo() {
  const faqData = [
    {
      id: 'item-1',
      icon: <Shield className="w-4 h-4 text-indigo-500" />,
      title: 'How does TanStack Virtual manage 10,000 DOM rows?',
      content:
        'TanStack Virtual dynamically calculates scroll coordinates and only mounts the 15–20 rows visible within the viewport container. As you scroll, row DOM elements are recycled with translateY transform offsets, keeping memory footprint minuscule and rendering at consistent 60fps.',
    },
    {
      id: 'item-2',
      icon: <Terminal className="w-4 h-4 text-emerald-500" />,
      title: 'How does the dynamic Layout switcher toggle without reload?',
      content:
        'React Context (LayoutContext) provides global layout state ("sidebar" or "navbar"). Both layouts consume the exact same route tree via React Router children. When you switch modes, CSS grid and margin transitions execute seamlessly while preserving component state.',
    },
    {
      id: 'item-3',
      icon: <Lock className="w-4 h-4 text-purple-500" />,
      title: 'What accessibility standards are enforced across primitives?',
      content:
        'Radix UI Primitives and Adobe React Aria adhere to W3C WAI-ARIA design patterns. All triggers maintain appropriate aria-expanded, aria-controls, keyboard focus traps, and screen-reader live announcements.',
    },
    {
      id: 'item-4',
      icon: <Zap className="w-4 h-4 text-amber-500" />,
      title: 'Are API responses cached across page transitions?',
      content:
        'Yes. TanStack Query (QueryClientProvider) caches API responses with a 5-minute stale-time. Navigating between different component pages reuses cached data without triggering redundant network requests.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Radix UI Primitives Accordion</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-200">
              @radix-ui/react-accordion
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            WAI-ARIA compliant unstyled accordion primitive with keyboard navigation and animated height transitions.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-base font-bold text-slate-800 mb-4">Architecture FAQ (Radix Accordion)</h2>

          <Accordion.Root type="single" defaultValue="item-1" collapsible className="space-y-3">
            {faqData.map((faq) => (
              <Accordion.Item
                key={faq.id}
                value={faq.id}
                className="border border-slate-200 rounded-2xl overflow-hidden data-[state=open]:border-indigo-300 transition-colors"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="group flex flex-1 items-center justify-between p-4 text-sm font-bold text-slate-800 hover:bg-slate-50 transition text-left cursor-pointer outline-none">
                    <span className="flex items-center gap-3">
                      {faq.icon}
                      <span>{faq.title}</span>
                    </span>
                    <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180 shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100/60 bg-slate-50/50">
                  {faq.content}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
}
