import React, { useState } from 'react';
import {
  GripVertical,
  RotateCcw,
  LayoutGrid,
  TrendingUp,
  Users,
  Server,
  Zap,
  ShieldCheck,
  CreditCard,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

const INITIAL_WIDGETS = [
  {
    id: 'w-revenue',
    title: 'Gross Revenue',
    value: '$142,890',
    change: '+18.4%',
    changeType: 'positive',
    icon: <CreditCard className="w-5 h-5 text-indigo-600" />,
    iconBg: 'bg-indigo-50',
    desc: 'Real-time billing throughput from Stripe webhooks.',
    meta: 'Target: $150k',
  },
  {
    id: 'w-users',
    title: 'Active Concurrent Users',
    value: '24,510',
    change: '+8.2%',
    changeType: 'positive',
    icon: <Users className="w-5 h-5 text-blue-600" />,
    iconBg: 'bg-blue-50',
    desc: 'Global distributed sessions across 4 continents.',
    meta: 'Peak: 31,200',
  },
  {
    id: 'w-uptime',
    title: 'Server SLA Uptime',
    value: '99.98%',
    change: 'Zero Outages',
    changeType: 'positive',
    icon: <Server className="w-5 h-5 text-emerald-600" />,
    iconBg: 'bg-emerald-50',
    desc: 'Kubernetes multi-cluster health monitoring.',
    meta: 'Latency: 28ms',
  },
  {
    id: 'w-conversions',
    title: 'Funnel Conversion Rate',
    value: '3.84%',
    change: '+0.6%',
    changeType: 'positive',
    icon: <TrendingUp className="w-5 h-5 text-amber-600" />,
    iconBg: 'bg-amber-50',
    desc: 'Checkout onboarding step completion rate.',
    meta: 'Benchmark: 3.2%',
  },
  {
    id: 'w-security',
    title: 'Security Compliance',
    value: '100% Passed',
    change: 'SOC2 & HIPAA',
    changeType: 'positive',
    icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
    iconBg: 'bg-purple-50',
    desc: 'Continuous container vulnerability scans.',
    meta: 'Last scan: 10m ago',
  },
  {
    id: 'w-speed',
    title: 'Vite HMR Speed',
    value: '42ms',
    change: 'Sub-second',
    changeType: 'positive',
    icon: <Zap className="w-5 h-5 text-rose-600" />,
    iconBg: 'bg-rose-50',
    desc: 'Instant module hot replacement benchmark.',
    meta: 'Vite 8 Rolldown',
  },
];

export default function GridWidgetsDragDropDemo() {
  const [widgets, setWidgets] = useState(INITIAL_WIDGETS);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.setData('text/plain', index.toString());
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (dragOverIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const updated = [...widgets];
    // Swap the two widgets in the 2D grid
    const temp = updated[draggedIndex];
    updated[draggedIndex] = updated[targetIndex];
    updated[targetIndex] = temp;

    setWidgets(updated);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const resetWidgets = () => {
    setWidgets(INITIAL_WIDGETS);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Grid Widgets Drag & Drop
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
              2D Dashboard Layout
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Reorganize your executive dashboard tiles in a 2D responsive grid by dragging cards over one another.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={resetWidgets}
            className="flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-xl border border-slate-200 shadow-sm transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Grid Layout</span>
          </button>
        </div>
      </div>

      {/* Grid of Modular Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {widgets.map((widget, index) => {
          const isDragging = draggedIndex === index;
          const isOver = dragOverIndex === index;

          return (
            <div
              key={widget.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              onDragEnd={handleDragEnd}
              className={`bg-white rounded-3xl p-6 border transition-all select-none cursor-grab active:cursor-grabbing flex flex-col justify-between ${
                isDragging
                  ? 'opacity-30 scale-95 border-dashed border-indigo-500 bg-indigo-50/20'
                  : isOver
                  ? 'border-indigo-500 bg-indigo-50/40 ring-4 ring-indigo-500/20 scale-[1.02] shadow-xl'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div>
                {/* Header of widget */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl ${widget.iconBg} flex items-center justify-center shadow-sm`}>
                      {widget.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {widget.title}
                      </div>
                      <div className="text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                        {widget.value}
                      </div>
                    </div>
                  </div>

                  {/* Grip Icon */}
                  <div className="text-slate-300 hover:text-indigo-600 transition p-1">
                    <GripVertical className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {widget.desc}
                </p>
              </div>

              {/* Footer info */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                  <ArrowUpRight className="w-3 h-3" /> {widget.change}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {widget.meta}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
