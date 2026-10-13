import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Sparkles,
  LayoutDashboard,
  Boxes,
  Search,
  X,
  ArrowRight,
  Zap,
  ListFilter,
  Check,
  Grid
} from 'lucide-react';
import {
  componentCategories,
  dashboardItem,
  totalComponentsCount
} from '../data/menuItems';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Components dropdown open state
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);

  // Active selected category inside the mega dropdown
  const [selectedCategoryId, setSelectedCategoryId] = useState('charts');

  // Search filter query
  const [searchQuery, setSearchQuery] = useState('');

  // Dropdown mode: 'mega' (side-by-side interactive) or 'accordion' (expanding list like sidebar)
  const [viewMode, setViewMode] = useState('mega');

  // For accordion mode inside navbar dropdown: set of open category IDs
  const [openAccordionIds, setOpenAccordionIds] = useState(['charts', 'tree', 'core-controls', 'mdbootstrap', 'dragdrop', 'button', 'table']);

  const dropdownRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  // Find active category based on current route
  const currentActiveCategory = useMemo(() => {
    return componentCategories.find((cat) =>
      cat.children?.some((child) => child.path === location.pathname)
    );
  }, [location.pathname]);

  // Set selected category to current active category when opening or on route change
  useEffect(() => {
    if (currentActiveCategory) {
      setSelectedCategoryId(currentActiveCategory.id);
      if (!openAccordionIds.includes(currentActiveCategory.id)) {
        setOpenAccordionIds((prev) => [...prev, currentActiveCategory.id]);
      }
    }
  }, [currentActiveCategory]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsComponentsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered categories for search
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return componentCategories;

    return componentCategories
      .map((cat) => {
        const matchesCategory =
          cat.label.toLowerCase().includes(q) ||
          cat.description?.toLowerCase().includes(q);

        const matchingChildren = cat.children?.filter(
          (c) =>
            c.label.toLowerCase().includes(q) ||
            c.library?.toLowerCase().includes(q) ||
            c.description?.toLowerCase().includes(q)
        );

        if (matchesCategory) return cat;
        if (matchingChildren && matchingChildren.length > 0) {
          return { ...cat, children: matchingChildren };
        }
        return null;
      })
      .filter(Boolean);
  }, [searchQuery]);

  // Active category object in mega menu
  const activeCategory = useMemo(() => {
    return (
      filteredCategories.find((c) => c.id === selectedCategoryId) ||
      filteredCategories[0] ||
      componentCategories[0]
    );
  }, [filteredCategories, selectedCategoryId]);

  const toggleAccordionCategory = (catId) => {
    setOpenAccordionIds((prev) =>
      prev.includes(catId) ? prev.filter((id) => id !== catId) : [...prev, catId]
    );
  };

  const isDashboardActive = location.pathname === '/home' || location.pathname === '/';
  const isComponentsActive = Boolean(currentActiveCategory) || location.pathname.startsWith('/components');

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-6 py-2 sticky top-[61px] z-30 select-none shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Navigation Items */}
        <div className="flex items-center gap-2">
          {/* 1. Dashboard Tab */}
          <button
            onClick={() => {
              navigate(dashboardItem.path);
              setIsComponentsOpen(false);
            }}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              isDashboardActive
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 text-indigo-400" />
            <span>Dashboard</span>
          </button>

          {/* 2. MAIN COMPONENT MENU TRIGGER */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsComponentsOpen(!isComponentsOpen)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition group ${
                isComponentsOpen || isComponentsActive
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Boxes className="w-4 h-4 text-indigo-300 group-hover:scale-110 transition-transform" />
              <span>Components</span>
              <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-md ${
                isComponentsOpen || isComponentsActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-indigo-300'
              }`}>
                {componentCategories.length} Modules
              </span>
              <div
                className={`transition-transform duration-300 ease-in-out ${
                  isComponentsOpen ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </div>
            </button>

            {/* Dropdown Menu with Smooth Animation */}
            {isComponentsOpen && (
              <div className="absolute left-0 mt-2 w-[850px] max-w-[92vw] bg-slate-900/98 backdrop-blur-xl rounded-2xl border border-slate-700/80 shadow-2xl z-50 animate-dropdown-fade overflow-hidden">
                {/* Header bar of the Dropdown */}
                <div className="p-3 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center">
                      <Boxes className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-2">
                        UI Components Showcase
                        <span className="text-[10px] font-mono text-indigo-400 font-normal">
                          ({totalComponentsCount} Demos)
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Multi-Framework Design System Library
                      </div>
                    </div>
                  </div>

                  {/* Filter & View Switcher */}
                  <div className="flex items-center gap-2">
                    {/* Search Input */}
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search menu..."
                        className="w-48 pl-7 pr-6 py-1 text-xs bg-slate-800/80 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    {/* View mode toggle */}
                    <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700/60">
                      <button
                        onClick={() => setViewMode('mega')}
                        className={`px-2 py-1 rounded text-[10px] font-semibold transition flex items-center gap-1 ${
                          viewMode === 'mega'
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                        title="Interactive Mega Menu view"
                      >
                        <Grid className="w-3 h-3" /> Mega
                      </button>
                      <button
                        onClick={() => setViewMode('accordion')}
                        className={`px-2 py-1 rounded text-[10px] font-semibold transition flex items-center gap-1 ${
                          viewMode === 'accordion'
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                        title="Accordion collapsing view"
                      >
                        <ListFilter className="w-3 h-3" /> Accordion
                      </button>
                    </div>
                  </div>
                </div>

                {/* MODE 1: Interactive Mega Menu (Left: Categories, Right: Animated Submenus) */}
                {viewMode === 'mega' ? (
                  <div className="grid grid-cols-12 min-h-[380px] max-h-[500px]">
                    {/* Left Column: All Component Categories */}
                    <div className="col-span-5 border-r border-slate-800/80 p-2 overflow-y-auto custom-scrollbar-dark bg-slate-950/30 space-y-1">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-2 py-1">
                        Categories ({filteredCategories.length})
                      </div>
                      {filteredCategories.length === 0 ? (
                        <div className="text-xs text-slate-500 p-4 text-center">
                          No category matches "{searchQuery}"
                        </div>
                      ) : (
                        filteredCategories.map((cat) => {
                          const isSelected = activeCategory?.id === cat.id;
                          const isCurrentActive = cat.children?.some((c) => isActive(c.path));

                          return (
                            <button
                              key={cat.id}
                              onMouseEnter={() => setSelectedCategoryId(cat.id)}
                              onClick={() => setSelectedCategoryId(cat.id)}
                              className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition group ${
                                isSelected
                                  ? 'bg-indigo-600/20 text-white font-bold border border-indigo-500/40 shadow-sm'
                                  : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className={`shrink-0 transition-transform ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`}>
                                  {cat.icon}
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs truncate flex items-center gap-1.5">
                                    <span>{cat.label}</span>
                                    {isCurrentActive && (
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                    )}
                                  </div>
                                  <div className="text-[10px] text-slate-400 truncate font-normal">
                                    {cat.children?.length} framework variants
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-1 shrink-0">
                                {cat.badge && (
                                  <span className="text-[8px] font-bold px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                    {cat.badge}
                                  </span>
                                )}
                                <ArrowRight
                                  className={`w-3.5 h-3.5 transition-transform ${
                                    isSelected
                                      ? 'text-indigo-400 translate-x-0.5'
                                      : 'text-slate-600 group-hover:text-slate-400'
                                  }`}
                                />
                              </div>
                            </button>
                          );
                        })
                      )}
                    </div>

                    {/* Right Column: Animated Submenu Items for Selected Category */}
                    <div className="col-span-7 p-4 overflow-y-auto custom-scrollbar-dark bg-slate-900/60">
                      {activeCategory ? (
                        <div key={activeCategory.id} className="animate-sub-slide space-y-3">
                          {/* Selected Category Header Banner */}
                          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                            <div className="flex items-center gap-2.5">
                              <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                                {activeCategory.icon}
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-white">
                                  {activeCategory.label}
                                </h4>
                                <p className="text-[11px] text-slate-400">
                                  {activeCategory.description}
                                </p>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/20 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                              {activeCategory.children?.length} Demos
                            </span>
                          </div>

                          {/* Submenu Grid Cards with Live Animation */}
                          <div className="grid grid-cols-1 gap-2 pt-1">
                            {activeCategory.children?.map((child) => {
                              const isChildActive = isActive(child.path);
                              return (
                                <button
                                  key={child.id}
                                  onClick={() => {
                                    navigate(child.path);
                                    setIsComponentsOpen(false);
                                  }}
                                  className={`w-full p-2.5 rounded-xl border text-left transition group ${
                                    isChildActive
                                      ? 'bg-indigo-600/30 border-indigo-500/60 shadow-md text-white'
                                      : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/60 text-slate-200'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <span className={`w-2 h-2 rounded-full ${isChildActive ? 'bg-indigo-400 ring-2 ring-indigo-400/40' : 'bg-slate-600'}`} />
                                      <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                                        {child.label}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      {child.badge && (
                                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                          {child.badge}
                                        </span>
                                      )}
                                      {child.library && (
                                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-indigo-300 border border-slate-700">
                                          {child.library}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  {child.description && (
                                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1 pl-4">
                                      {child.description}
                                    </p>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <div className="text-xs text-slate-500 p-8 text-center">
                          Select a category to view framework demos
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* MODE 2: Accordion Mode inside Navbar Dropdown */
                  <div className="p-3 max-h-[460px] overflow-y-auto custom-scrollbar-dark space-y-1.5">
                    {filteredCategories.map((cat) => {
                      const isCatOpen = openAccordionIds.includes(cat.id);
                      const isCatActive = cat.children?.some((c) => isActive(c.path));

                      return (
                        <div key={cat.id} className="rounded-xl overflow-hidden bg-slate-950/30 border border-slate-800/80">
                          <button
                            onClick={() => toggleAccordionCategory(cat.id)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition ${
                              isCatActive
                                ? 'bg-slate-800 text-white font-semibold'
                                : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              {cat.icon}
                              <span className="text-xs font-semibold">{cat.label}</span>
                            </div>

                            <div className="flex items-center gap-2">
                              {cat.badge && (
                                <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                  {cat.badge}
                                </span>
                              )}
                              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.2 rounded">
                                {cat.children?.length} Demos
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

                          {/* Accordion Collapse for Navbar */}
                          <div className={`accordion-collapse ${isCatOpen ? 'expanded' : ''}`}>
                            <div className="accordion-collapse-inner px-2 py-1.5 bg-slate-950/50 border-t border-slate-800/50 grid grid-cols-2 gap-1.5">
                              {cat.children?.map((child) => {
                                const isChildActive = isActive(child.path);
                                return (
                                  <button
                                    key={child.id}
                                    onClick={() => {
                                      navigate(child.path);
                                      setIsComponentsOpen(false);
                                    }}
                                    className={`flex items-center justify-between p-2 rounded-lg text-left transition ${
                                      isChildActive
                                        ? 'bg-indigo-600/30 text-indigo-200 font-bold border border-indigo-500/40'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                                    }`}
                                  >
                                    <span className="text-xs truncate">{child.label}</span>
                                    {child.library && (
                                      <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">
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
                    })}
                  </div>
                )}

                {/* Dropdown Footer */}
                <div className="p-2.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 px-4">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Select any component framework demo to launch live interactive playground</span>
                  </div>
                  <button
                    onClick={() => {
                      navigate('/home');
                      setIsComponentsOpen(false);
                    }}
                    className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
                  >
                    <span>View Component Hub</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side info pill in Navbar */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-400 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-slate-300">Port: 5173</span>
            <span className="text-slate-600">•</span>
            <span>{totalComponentsCount} Component Demos</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
