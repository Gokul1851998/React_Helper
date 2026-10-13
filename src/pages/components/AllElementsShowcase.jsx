import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Star,
  Tag,
  Bell,
  Loader2,
  MessageSquare,
  Compass,
  AlertCircle,
  ListOrdered,
  Hash,
  List,
  Minus,
  Type,
  Sparkles,
  ArrowRight
} from 'lucide-react';

import StepperDemo from './StepperDemo';
import RatingDemo from './RatingDemo';
import ChipDemo from './ChipDemo';
import BadgeDemo from './BadgeDemo';
import ProgressDemo from './ProgressDemo';
import TooltipDemo from './TooltipDemo';
import BreadcrumbsDemo from './BreadcrumbsDemo';
import AlertDemo from './AlertDemo';
import SnackbarDemo from './SnackbarDemo';
import PaginationDemo from './PaginationDemo';
import ListDemo from './ListDemo';
import DividerDemo from './DividerDemo';
import TypographyDemo from './TypographyDemo';

const ELEMENTS_TABS = [
  { id: 'stepper', label: 'Stepper', icon: <ListOrdered className="w-4 h-4" />, path: '/components/elements/stepper', desc: 'Linear, non-linear & vertical step-by-step progress wizards' },
  { id: 'rating', label: 'Rating', icon: <Star className="w-4 h-4" />, path: '/components/elements/rating', desc: 'Interactive star ratings, half-star precision, heart icons & feedback' },
  { id: 'chip', label: 'Chips & Tags', icon: <Tag className="w-4 h-4" />, path: '/components/elements/chip', desc: 'Deletable badges, filter pills, avatar tags & clickable chips' },
  { id: 'badge', label: 'Badge', icon: <Bell className="w-4 h-4" />, path: '/components/elements/badge', desc: 'Notification counter badges, dot status, colors & max count caps' },
  { id: 'progress', label: 'Progress', icon: <Loader2 className="w-4 h-4" />, path: '/components/elements/progress', desc: 'Linear progress bars, circular spinners, indeterminate & buffered' },
  { id: 'tooltip', label: 'Tooltip', icon: <MessageSquare className="w-4 h-4" />, path: '/components/elements/tooltip', desc: 'Positioned hover tooltips, arrow indicators & transition delays' },
  { id: 'breadcrumbs', label: 'Breadcrumbs', icon: <Compass className="w-4 h-4" />, path: '/components/elements/breadcrumbs', desc: 'Navigation trails, icon breadcrumbs & collapsible path hierarchies' },
  { id: 'alert', label: 'Alert Banners', icon: <AlertCircle className="w-4 h-4" />, path: '/components/elements/alert', desc: 'Standard, filled & outlined severity banners with close actions' },
  { id: 'snackbar', label: 'Snackbar', icon: <Bell className="w-4 h-4" />, path: '/components/elements/snackbar', desc: 'Slide-in floating toast notifications with auto-dismiss timers' },
  { id: 'pagination', label: 'Pagination', icon: <Hash className="w-4 h-4" />, path: '/components/elements/pagination', desc: 'Rounded, outlined, sized page indexers with controlled state' },
  { id: 'list', label: 'Interactive List', icon: <List className="w-4 h-4" />, path: '/components/elements/list', desc: 'Nested expandable lists, avatar rows & selection states' },
  { id: 'divider', label: 'Divider', icon: <Minus className="w-4 h-4" />, path: '/components/elements/divider', desc: 'Full-width, inset, middle, vertical & sub-header dividing lines' },
  { id: 'typography', label: 'Typography', icon: <Type className="w-4 h-4" />, path: '/components/elements/typography', desc: 'Heading scales H1-H6, body copy, subtitles & caption font styles' },
];

export default function AllElementsShowcase() {
  const [activeTab, setActiveTab] = useState('stepper');
  const navigate = useNavigate();

  const currentTabObj = ELEMENTS_TABS.find((t) => t.id === activeTab) || ELEMENTS_TABS[0];

  const renderActiveElement = () => {
    switch (activeTab) {
      case 'stepper':
        return <StepperDemo />;
      case 'rating':
        return <RatingDemo />;
      case 'chip':
        return <ChipDemo />;
      case 'badge':
        return <BadgeDemo />;
      case 'progress':
        return <ProgressDemo />;
      case 'tooltip':
        return <TooltipDemo />;
      case 'breadcrumbs':
        return <BreadcrumbsDemo />;
      case 'alert':
        return <AlertDemo />;
      case 'snackbar':
        return <SnackbarDemo />;
      case 'pagination':
        return <PaginationDemo />;
      case 'list':
        return <ListDemo />;
      case 'divider':
        return <DividerDemo />;
      case 'typography':
        return <TypographyDemo />;
      default:
        return <StepperDemo />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Essential UI Elements Suite
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
              13 Component Modules
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Production-ready UI elements: Stepper, Rating, Chip, Badge, Progress, Tooltip, Breadcrumbs, Alert, Snackbar, Pagination, List, Divider & Typography.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Active:</span>
          <span className="px-3 py-1 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
            {currentTabObj.label}
          </span>
        </div>
      </div>

      {/* Tab Selector Strip */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin">
          {ELEMENTS_TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-[1.02]'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span className={isActive ? 'text-emerald-400' : 'text-slate-400'}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab description bar */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="font-medium text-slate-700">{currentTabObj.label}:</span>
            <span>{currentTabObj.desc}</span>
          </div>
          <button
            onClick={() => navigate(currentTabObj.path)}
            className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-bold hover:underline cursor-pointer"
          >
            Direct URL <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Active Element Content */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm min-h-[500px]">
        {renderActiveElement()}
      </div>
    </div>
  );
}
