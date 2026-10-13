import React, { useState } from 'react';
import {
  GripVertical,
  ArrowUpDown,
  RotateCcw,
  Plus,
  Shuffle,
  CheckCircle2,
  Trash2,
  Layers,
  Sparkles,
  Award
} from 'lucide-react';

const INITIAL_ITEMS = [
  {
    id: 'item-1',
    title: 'Multi-Tenant Authentication & SSO',
    category: 'Security',
    tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    impact: 'High Impact',
    team: 'Identity Core',
    duration: '2 Weeks',
    completed: true,
  },
  {
    id: 'item-2',
    title: 'High-Throughput TanStack Virtualization',
    category: 'Performance',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    impact: 'Critical',
    team: 'Frontend Platform',
    duration: '1 Week',
    completed: true,
  },
  {
    id: 'item-3',
    title: 'Adobe React Aria WCAG AAA Forms',
    category: 'Accessibility',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
    impact: 'Compliance',
    team: 'Design Systems',
    duration: '3 Weeks',
    completed: false,
  },
  {
    id: 'item-4',
    title: 'Real-Time WebSocket Event Stream',
    category: 'Infrastructure',
    tagColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    impact: 'Scalability',
    team: 'Cloud Services',
    duration: '2 Weeks',
    completed: false,
  },
  {
    id: 'item-5',
    title: 'Automated CI/CD End-to-End Test Suite',
    category: 'Quality Assurance',
    tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
    impact: 'Reliability',
    team: 'Release Eng',
    duration: '1 Week',
    completed: false,
  },
  {
    id: 'item-6',
    title: 'Cross-Framework Component Exporter',
    category: 'Developer Tools',
    tagColor: 'bg-rose-50 text-rose-700 border-rose-200',
    impact: 'Growth',
    team: 'DevRel',
    duration: '4 Weeks',
    completed: false,
  },
];

export default function SortableListDragDropDemo() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [recentMove, setRecentMove] = useState(null);

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

    const updated = [...items];
    const [movedItem] = updated.splice(draggedIndex, 1);
    updated.splice(targetIndex, 0, movedItem);

    setItems(updated);
    setRecentMove({
      title: movedItem.title,
      from: draggedIndex + 1,
      to: targetIndex + 1,
    });

    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const shuffleList = () => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setRecentMove(null);
  };

  const resetList = () => {
    setItems(INITIAL_ITEMS);
    setRecentMove(null);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Sortable List Drag & Drop
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Vertical Reordering
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Grab any item using the grip handle to re-order priority. Live rank indexes update dynamically in 60fps.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={shuffleList}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Shuffle</span>
          </button>
          <button
            onClick={resetList}
            className="p-2 bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 rounded-xl transition shadow-sm"
            title="Reset to default order"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Move Confirmation Alert */}
      {recentMove && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center justify-between animate-sub-slide">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>
              Moved <strong>"{recentMove.title}"</strong> from position <strong>#{recentMove.from}</strong> to <strong>#{recentMove.to}</strong>.
            </span>
          </div>
          <button
            onClick={() => setRecentMove(null)}
            className="text-emerald-700 hover:text-emerald-900 font-bold"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Reorderable List Container */}
      <div className="max-w-3xl mx-auto space-y-2.5">
        {items.map((item, index) => {
          const isDragging = draggedIndex === index;
          const isOver = dragOverIndex === index;

          return (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              onDragEnd={handleDragEnd}
              className={`bg-white rounded-2xl p-4 border transition-all flex items-center gap-4 select-none cursor-grab active:cursor-grabbing ${
                isDragging
                  ? 'opacity-30 scale-95 border-dashed border-indigo-400 bg-indigo-50/20'
                  : isOver
                  ? 'border-indigo-500 bg-indigo-50/40 translate-y-1 shadow-md ring-2 ring-indigo-500/20'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              {/* Grip Handle */}
              <div className="text-slate-400 hover:text-indigo-600 cursor-grab transition-colors">
                <GripVertical className="w-5 h-5" />
              </div>

              {/* Dynamic Rank Badge */}
              <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                #{index + 1}
              </div>

              {/* Content info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-slate-900 text-sm truncate">
                    {item.title}
                  </h3>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.tagColor}`}
                  >
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                  <span>Team: <strong>{item.team}</strong></span>
                  <span>•</span>
                  <span>Est: <strong>{item.duration}</strong></span>
                  <span>•</span>
                  <span className="font-semibold text-indigo-600">{item.impact}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                  title="Remove Item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
