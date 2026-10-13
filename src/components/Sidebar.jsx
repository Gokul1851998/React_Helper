import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  Sparkles,
  Search,
  X,
  ChevronsUpDown,
  ChevronsDownUp,
  LayoutDashboard,
  Boxes,
  Compass,
  Zap,
  Check
} from 'lucide-react';
import {
  componentCategories,
  dashboardItem,
  totalComponentsCount
} from '../data/menuItems';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Search filter query
  const [searchQuery, setSearchQuery] = useState('');

  // Main 'Components' parent section is open by default
  const [componentsMenuOpen, setComponentsMenuOpen] = useState(true);

  // Set of opened component category IDs (e.g., ['charts', 'tree', 'core-controls', 'mdbootstrap', 'dragdrop'])
  const [openCategories, setOpenCategories] = useState(['charts', 'tree', 'core-controls', 'mdbootstrap', 'dragdrop', 'table', 'button']);

  const isActive = (path) => location.pathname === path;

  // Find active category based on current pathname
  const currentActiveCategory = useMemo(() => {
    return componentCategories.find((cat) =>
      cat.children?.some((child) => child.path === location.pathname)
    );
  }, [location.pathname]);

  // Find active child demo item
  const currentActiveChild = useMemo(() => {
    for (const cat of componentCategories) {
      const found = cat.children?.find((c) => c.path === location.pathname);
      if (found) return { category: cat, child: found };
    }
    return null;
  }, [location.pathname]);

  // Auto-expand active category when route changes
  useEffect(() => {
    if (currentActiveCategory) {
      setComponentsMenuOpen(true);
      setOpenCategories((prev) => {
        if (!prev.includes(currentActiveCategory.id)) {
          return [...prev, currentActiveCategory.id];
        }
        return prev;
      });
    }
  }, [currentActiveCategory]);

  // Toggle category open/closed
  const toggleCategory = (catId) => {
    setOpenCategories((prev) =>
      prev.includes(catId) ? prev.filter((id) => id !== catId) : [...prev, catId]
    );
  };

  // Expand all / Collapse all categories
  const toggleAllCategories = () => {
    if (openCategories.length === componentCategories.length) {
      setOpenCategories([]);
    } else {
      setOpenCategories(componentCategories.map((c) => c.id));
    }
  };

  // Filtered categories and submenus when searching
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return componentCategories;

    return componentCategories
      .map((cat) => {
        const matchesCategory =
          cat.label.toLowerCase().includes(query) ||
          cat.description?.toLowerCase().includes(query);

        const matchingChildren = cat.children?.filter(
          (child) =>
            child.label.toLowerCase().includes(query) ||
            child.library?.toLowerCase().includes(query) ||
            child.description?.toLowerCase().includes(query)
        );

        if (matchesCategory) {
          return cat;
        }

        if (matchingChildren && matchingChildren.length > 0) {
          return {
            ...cat,
            children: matchingChildren,
          };
        }

        return null;
      })
      .filter(Boolean);
  }, [searchQuery]);

  // Auto-expand all matching categories when user types a search query
  useEffect(() => {
    if (searchQuery.trim()) {
      setComponentsMenuOpen(true);
      setOpenCategories(filteredCategories.map((c) => c.id));
    }
  }, [searchQuery, filteredCategories]);

  const isAllExpanded = openCategories.length === componentCategories.length;
  const isDashboardActive = location.pathname === '/home' || location.pathname === '/';
  const isComponentsActive = Boolean(currentActiveCategory) || location.pathname.startsWith('/components');

  return (
    <aside className="fixed inset-y-0 left-0 w-72 bg-slate-900 border-r border-slate-800/80 flex flex-col z-30 select-none shadow-2xl">
      {/* Brand logo header */}
      <div className="p-4 border-b border-slate-800/80 bg-slate-950/40">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate('/home')}
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-extrabold text-white text-base tracking-tight flex items-center gap-1.5">
                ReactHelper
                <span className="text-[10px] font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-1.5 py-0.2 rounded-md">
                  v2.0
                </span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">UI Multi-Framework Hub</div>
            </div>
          </div>
        </div>

        {/* Search Bar for user friendliness */}
        <div className="mt-3 relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter components, libraries..."
            className="w-full pl-8 pr-7 py-1.5 text-xs bg-slate-800/70 hover:bg-slate-800 focus:bg-slate-950 border border-slate-700/60 focus:border-indigo-500 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/40 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation menu list */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1.5 custom-scrollbar-dark">
        {/* Quick section title & expand/collapse all control */}
        <div className="flex items-center justify-between px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
          <span>Main Navigation</span>
          {componentsMenuOpen && !searchQuery && (
            <button
              onClick={toggleAllCategories}
              className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-indigo-400 transition lowercase"
              title={isAllExpanded ? 'Collapse all categories' : 'Expand all categories'}
            >
              {isAllExpanded ? (
                <>
                  <ChevronsDownUp className="w-3 h-3" />
                  <span>collapse</span>
                </>
              ) : (
                <>
                  <ChevronsUpDown className="w-3 h-3" />
                  <span>expand all</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* 1. Dashboard (Top-level Direct Item) */}
        <button
          onClick={() => navigate(dashboardItem.path)}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition group ${
            isDashboardActive
              ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold shadow-lg shadow-indigo-600/30'
              : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
          }`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className={`p-1 rounded-lg transition ${isDashboardActive ? 'bg-white/20 text-white' : 'text-indigo-400 group-hover:scale-110'}`}>
              <LayoutDashboard className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold">{dashboardItem.label}</span>
          </div>

          <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
            isDashboardActive ? 'bg-white/20 text-white' : 'text-slate-500 bg-slate-800'
          }`}>
            Live
          </span>
        </button>

        {/* 2. MAIN COMPONENT PARENT MENU ("Components" - under that show all menus) */}
        <div className="pt-1">
          {/* Main Components Header Button with Smooth Accordion Toggle */}
          <button
            onClick={() => setComponentsMenuOpen(!componentsMenuOpen)}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition group ${
              isComponentsActive && !componentsMenuOpen
                ? 'bg-indigo-600/20 text-indigo-300 font-bold border border-indigo-500/30'
                : 'text-slate-200 hover:bg-slate-800/80'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-1 rounded-lg bg-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                <Boxes className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  Components
                </div>
                <div className="text-[10px] text-slate-400 font-normal">
                  UI Framework Catalog
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {searchQuery ? `${filteredCategories.length} Found` : `${componentCategories.length} Modules`}
              </span>
              <div
                className={`transition-transform duration-300 ease-in-out text-slate-400 group-hover:text-white ${
                  componentsMenuOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </button>

          {/* Under "Components", show all these menus with smooth height/opacity animation */}
          <div className={`accordion-collapse ${componentsMenuOpen ? 'expanded' : ''}`}>
            <div className="accordion-collapse-inner pl-2 pt-1 space-y-1">
              {filteredCategories.length === 0 ? (
                <div className="px-3 py-4 text-center text-xs text-slate-500 bg-slate-950/30 rounded-xl my-1 border border-slate-800/50">
                  No components match "{searchQuery}"
                </div>
              ) : (
                filteredCategories.map((cat) => {
                  const isCatOpen = openCategories.includes(cat.id);
                  const isCatActive = cat.children?.some((c) => isActive(c.path));
                  const childCount = cat.children ? cat.children.length : 0;

                  return (
                    <div key={cat.id} className="rounded-xl overflow-hidden bg-slate-950/20 border border-slate-800/40 my-1">
                      {/* Component Category Header Toggle Button */}
                      <button
                        onClick={() => toggleCategory(cat.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition ${
                          isCatActive
                            ? 'bg-slate-800/90 text-white font-semibold'
                            : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="shrink-0 transition-transform hover:scale-110">
                            {cat.icon}
                          </div>
                          <span className="text-xs font-semibold truncate text-slate-200">
                            {cat.label}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {cat.badge && (
                            <span className="text-[8px] font-bold px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                              {cat.badge}
                            </span>
                          )}
                          <span className="text-[9px] font-mono text-slate-500 px-1 py-0.2 rounded bg-slate-800/60">
                            {childCount}
                          </span>
                          <div
                            className={`transition-transform duration-300 ease-in-out text-slate-500 ${
                              isCatOpen ? 'rotate-180' : 'rotate-0'
                            }`}
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </button>

                      {/* Submenu with Smooth Animated Accordion Collapse */}
                      <div className={`accordion-collapse ${isCatOpen ? 'expanded' : ''}`}>
                        <div className="accordion-collapse-inner px-2 py-1 space-y-1 bg-slate-950/40 border-t border-slate-800/50">
                          {cat.children?.map((child) => {
                            const isChildActive = isActive(child.path);
                            return (
                              <button
                                key={child.id}
                                onClick={() => navigate(child.path)}
                                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left transition group/child ${
                                  isChildActive
                                    ? 'bg-indigo-600/30 text-indigo-200 font-bold border border-indigo-500/40 shadow-sm'
                                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                                }`}
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  {/* Active dot indicator */}
                                  <span
                                    className={`w-1.5 h-1.5 rounded-full transition-all shrink-0 ${
                                      isChildActive
                                        ? 'bg-indigo-400 ring-2 ring-indigo-400/30 scale-125'
                                        : 'bg-slate-600 group-hover/child:bg-slate-400'
                                    }`}
                                  />
                                  <span className="text-[11px] truncate">{child.label}</span>
                                </div>

                                {child.library && (
                                  <span
                                    className={`text-[8px] font-mono px-1.5 py-0.5 rounded transition ${
                                      isChildActive
                                        ? 'bg-indigo-500/40 text-indigo-100 font-bold'
                                        : 'bg-slate-800 text-slate-400 group-hover/child:text-slate-300'
                                    }`}
                                  >
                                    {child.library}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Footer system status & active item indicator */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-950/60 text-[11px] text-slate-400 space-y-2">
        {currentActiveChild ? (
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <Compass className="w-3 h-3 text-indigo-400" /> Current View
            </div>
            <div className="text-xs font-semibold text-slate-200 truncate mt-0.5">
              {currentActiveChild.child.label}
            </div>
            <div className="text-[10px] text-indigo-400 font-mono">
              {currentActiveChild.category.label} • {currentActiveChild.child.library}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Vite 5173</span>
            </span>
            <span className="font-mono text-indigo-400 font-semibold">{totalComponentsCount} Demos</span>
          </div>
        )}
      </div>
    </aside>
  );
}
