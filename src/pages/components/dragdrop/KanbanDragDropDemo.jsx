import React, { useState } from 'react';
import {
  GripVertical,
  Plus,
  RotateCcw,
  CheckCircle2,
  Clock,
  MessageSquare,
  AlertCircle,
  Tag,
  Sparkles,
  Move
} from 'lucide-react';

const INITIAL_BOARD = {
  todo: {
    id: 'todo',
    title: 'To Do / Backlog',
    color: 'border-slate-300 text-slate-700 bg-slate-50',
    badgeColor: 'bg-slate-200 text-slate-700',
    items: [
      {
        id: 'task-1',
        title: 'Design System Tokens Audit',
        desc: 'Review HSL color spaces and spacing variables across Tailwind v4.',
        tag: 'Design',
        priority: 'Medium',
        priorityColor: 'bg-amber-100 text-amber-700 border-amber-200',
        estimate: '4h',
        comments: 3,
        avatar: 'DS',
        avatarBg: 'bg-purple-600',
      },
      {
        id: 'task-2',
        title: 'OAuth2 PKCE Login Flow',
        desc: 'Implement authorization code exchange with token rotation.',
        tag: 'Security',
        priority: 'High',
        priorityColor: 'bg-rose-100 text-rose-700 border-rose-200',
        estimate: '8h',
        comments: 5,
        avatar: 'AL',
        avatarBg: 'bg-rose-600',
      },
    ],
  },
  inProgress: {
    id: 'inProgress',
    title: 'In Progress',
    color: 'border-indigo-300 text-indigo-700 bg-indigo-50/50',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    items: [
      {
        id: 'task-3',
        title: 'TanStack Virtual 10,000 Table',
        desc: 'Optimize dynamic row heights and smooth 60fps scroll virtualization.',
        tag: 'Frontend',
        priority: 'Urgent',
        priorityColor: 'bg-red-100 text-red-700 border-red-200',
        estimate: '12h',
        comments: 8,
        avatar: 'JD',
        avatarBg: 'bg-indigo-600',
      },
      {
        id: 'task-4',
        title: 'Radix Dialog Spring Animations',
        desc: 'Tune cubic bezier entry transitions with keyboard ESC traps.',
        tag: 'UI/UX',
        priority: 'Medium',
        priorityColor: 'bg-amber-100 text-amber-700 border-amber-200',
        estimate: '3h',
        comments: 2,
        avatar: 'MK',
        avatarBg: 'bg-cyan-600',
      },
    ],
  },
  review: {
    id: 'review',
    title: 'Under Review',
    color: 'border-amber-300 text-amber-700 bg-amber-50/50',
    badgeColor: 'bg-amber-100 text-amber-700',
    items: [
      {
        id: 'task-5',
        title: 'WCAG AAA Accessibility Audit',
        desc: 'Verify Adobe React Aria form controls with screen readers NVDA.',
        tag: 'Accessibility',
        priority: 'High',
        priorityColor: 'bg-rose-100 text-rose-700 border-rose-200',
        estimate: '6h',
        comments: 4,
        avatar: 'SC',
        avatarBg: 'bg-emerald-600',
      },
    ],
  },
  done: {
    id: 'done',
    title: 'Completed',
    color: 'border-emerald-300 text-emerald-700 bg-emerald-50/50',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    items: [
      {
        id: 'task-6',
        title: 'Vite 8 Rolldown Bundler Setup',
        desc: 'Achieved sub-second HMR updates across 18,000 modules.',
        tag: 'DevOps',
        priority: 'Normal',
        priorityColor: 'bg-slate-100 text-slate-700 border-slate-200',
        estimate: '2h',
        comments: 6,
        avatar: 'TS',
        avatarBg: 'bg-teal-600',
      },
    ],
  },
};

export default function KanbanDragDropDemo() {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [draggedItem, setDraggedItem] = useState(null); // { taskId, sourceColId }
  const [dragOverCol, setDragOverCol] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // Handle Drag Start
  const handleDragStart = (e, taskId, sourceColId) => {
    setDraggedItem({ taskId, sourceColId });
    e.dataTransfer.setData('text/plain', JSON.stringify({ taskId, sourceColId }));
    e.dataTransfer.effectAllowed = 'move';
  };

  // Handle Drag Over Column
  const handleDragOver = (e, colId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (dragOverCol !== colId) {
      setDragOverCol(colId);
    }
  };

  // Handle Drag Leave
  const handleDragLeave = (e, colId) => {
    if (dragOverCol === colId) {
      setDragOverCol(null);
    }
  };

  // Handle Drop on Column
  const handleDrop = (e, targetColId) => {
    e.preventDefault();
    setDragOverCol(null);

    if (!draggedItem) return;
    const { taskId, sourceColId } = draggedItem;

    if (sourceColId === targetColId) {
      setDraggedItem(null);
      return;
    }

    setBoard((prev) => {
      const sourceCol = prev[sourceColId];
      const targetCol = prev[targetColId];

      const itemToMove = sourceCol.items.find((it) => it.id === taskId);
      if (!itemToMove) return prev;

      return {
        ...prev,
        [sourceColId]: {
          ...sourceCol,
          items: sourceCol.items.filter((it) => it.id !== taskId),
        },
        [targetColId]: {
          ...targetCol,
          items: [itemToMove, ...targetCol.items],
        },
      };
    });

    setDraggedItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setDragOverCol(null);
  };

  const resetBoard = () => {
    setBoard(INITIAL_BOARD);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: `task-${Date.now()}`,
      title: newTaskTitle.trim(),
      desc: 'Created via interactive board interface.',
      tag: 'Feature',
      priority: 'Medium',
      priorityColor: 'bg-amber-100 text-amber-700 border-amber-200',
      estimate: '4h',
      comments: 0,
      avatar: 'ME',
      avatarBg: 'bg-indigo-600',
    };

    setBoard((prev) => ({
      ...prev,
      todo: {
        ...prev.todo,
        items: [newTask, ...prev.todo.items],
      },
    }));

    setNewTaskTitle('');
    setShowAddModal(false);
  };

  const totalTasks = Object.values(board).reduce((acc, col) => acc + col.items.length, 0);
  const doneTasks = board.done.items.length;
  const progressPercent = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Kanban Board Drag & Drop
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              HTML5 Drag & Drop API
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Drag cards smoothly between columns or reorder tasks. Supports live drop target visual feedback and task creation.
          </p>
        </div>

        {/* Action buttons & Stats */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs">
            <span className="text-slate-500">Progress:</span>
            <span className="font-bold text-indigo-600">{progressPercent}%</span>
            <div className="w-16 bg-slate-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-indigo-600 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-sm transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Task</span>
          </button>

          <button
            onClick={resetBoard}
            className="p-2 bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 rounded-xl transition shadow-sm"
            title="Reset Board"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add Task Modal / Bar */}
      {showAddModal && (
        <form
          onSubmit={handleAddTask}
          className="bg-indigo-50/70 border border-indigo-200 p-4 rounded-2xl flex flex-col sm:flex-row items-center gap-3 animate-sub-slide"
        >
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Type task name (e.g., Integrate Stripe Webhooks)..."
            className="flex-1 w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            autoFocus
          />
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl hover:bg-indigo-500 transition"
            >
              Save Card
            </button>
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="px-3 py-2 bg-white text-slate-600 font-bold text-xs rounded-xl border border-slate-200 hover:bg-slate-100 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Kanban Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
        {Object.values(board).map((col) => {
          const isOver = dragOverCol === col.id;

          return (
            <div
              key={col.id}
              onDragOver={(e) => handleDragOver(e, col.id)}
              onDragLeave={(e) => handleDragLeave(e, col.id)}
              onDrop={(e) => handleDrop(e, col.id)}
              className={`rounded-2xl p-3 border transition-all min-h-[460px] flex flex-col ${
                isOver
                  ? 'border-indigo-500 bg-indigo-50/60 ring-2 ring-indigo-500/20 scale-[1.01]'
                  : 'border-slate-200 bg-slate-100/60'
              }`}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-xs tracking-tight">
                    {col.title}
                  </h3>
                  <span
                    className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-md ${col.badgeColor}`}
                  >
                    {col.items.length}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  Drop target
                </div>
              </div>

              {/* Tasks Cards Container */}
              <div className="flex-1 space-y-2.5">
                {col.items.length === 0 ? (
                  <div
                    className={`h-32 border-2 border-dashed rounded-xl flex items-center justify-center text-xs transition ${
                      isOver
                        ? 'border-indigo-400 text-indigo-600 bg-indigo-100/30'
                        : 'border-slate-300 text-slate-400 bg-white/40'
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <Move className="w-3.5 h-3.5" /> Drop task here
                    </span>
                  </div>
                ) : (
                  col.items.map((item) => {
                    const isBeingDragged = draggedItem?.taskId === item.id;

                    return (
                      <div
                        key={item.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item.id, col.id)}
                        onDragEnd={handleDragEnd}
                        className={`bg-white rounded-xl p-3.5 border shadow-sm cursor-grab active:cursor-grabbing select-none transition group hover:shadow-md ${
                          isBeingDragged
                            ? 'opacity-40 scale-95 border-dashed border-indigo-400'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {/* Tags and Priority */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {item.tag}
                          </span>
                          <span
                            className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${item.priorityColor}`}
                          >
                            {item.priority}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                          {item.desc}
                        </p>

                        {/* Card Footer: Assignee, Estimate, Comments */}
                        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <div
                              className={`w-5 h-5 rounded-full ${item.avatarBg} text-white flex items-center justify-center text-[9px] font-bold`}
                            >
                              {item.avatar}
                            </div>
                            <span className="flex items-center gap-0.5 text-slate-500 font-mono text-[10px]">
                              <Clock className="w-3 h-3" /> {item.estimate}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-[10px] text-slate-400">
                            <MessageSquare className="w-3 h-3" />
                            <span>{item.comments}</span>
                            <GripVertical className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 ml-1" />
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
