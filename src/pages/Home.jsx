import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLayout } from '../context/LayoutContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import {
  Table,
  CreditCard,
  Layers,
  FormInput,
  Navigation,
  Bell,
  ArrowRight,
  Zap,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Boxes,
  Search,
  X
} from 'lucide-react';
import { useProductsQuery, useUsersQuery, usePostsQuery } from '../api/useApiData';
import { componentCategories, totalComponentsCount } from '../data/menuItems';

export default function Home({ children }) {
  const { layout } = useLayout();
  const navigate = useNavigate();
  const [hubSearch, setHubSearch] = useState('');

  const { data: products = [] } = useProductsQuery();
  const { data: users = [] } = useUsersQuery();
  const { data: posts = [] } = usePostsQuery();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* If layout is Sidebar, show Sidebar */}
      {layout === 'sidebar' && <Sidebar />}

      {/* Main Content Area: adjusts margin when Sidebar is active */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${layout === 'sidebar' ? 'lg:pl-72' : ''}`}>
        <Header />

        {/* If layout is Navbar, show horizontal Navbar */}
        {layout === 'navbar' && <Navbar />}

        <main className="flex-1 p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children ? (
            children
          ) : (
            <div className="space-y-8">
              {/* Hero Banner */}
              <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-800">
                <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-2xl relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Multi-Framework Design System Hub
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
                    Welcome to ReactHelper Lab
                  </h1>
                  <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                    Explore live component demos across <strong>Material UI</strong>, <strong>Ant Design</strong>, <strong>TanStack Virtual</strong>, <strong>DaisyUI</strong>, <strong>Radix UI</strong>, <strong>Headless UI</strong>, and <strong>Adobe React Aria</strong>. Switch layout anytime via the header settings.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      onClick={() => navigate('/components/table/tanstack-virtual')}
                      className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
                    >
                      <Zap className="w-4 h-4" /> 10,000 Rows Virtual Table
                    </button>
                    <button
                      onClick={() => navigate('/components/table/mui')}
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition flex items-center gap-2"
                    >
                      <Table className="w-4 h-4 text-indigo-400" /> Material UI Table
                    </button>
                    <button
                      onClick={() => navigate('/components/table/antd')}
                      className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition flex items-center gap-2"
                    >
                      <Table className="w-4 h-4 text-blue-400" /> Ant Design Table
                    </button>
                  </div>
                </div>
              </div>

              {/* Real API Status Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">DummyJSON Products</div>
                  <div className="text-2xl font-black text-slate-900 mt-2">{products.length} Products</div>
                  <div className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Live API Connected
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">DummyJSON Users</div>
                  <div className="text-2xl font-black text-slate-900 mt-2">{users.length} User Records</div>
                  <div className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Live Profiles Ready
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">DummyJSON Posts</div>
                  <div className="text-2xl font-black text-slate-900 mt-2">{posts.length} Articles</div>
                  <div className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Real Reactions & Tags
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">TanStack Virtual Stream</div>
                  <div className="text-2xl font-black text-indigo-600 mt-2">10,000 Rows</div>
                  <div className="text-xs text-indigo-600 font-medium mt-1 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> High-Volume 60fps
                  </div>
                </div>
              </div>

              {/* Component Categories Grid */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-lg bg-indigo-100 text-indigo-700">
                        <Boxes className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-black text-slate-900 tracking-tight">
                        UI Components & Framework Catalog
                      </h2>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {totalComponentsCount} interactive component demos across Material UI, Ant Design, Radix UI, TanStack Virtual, and DaisyUI.
                    </p>
                  </div>

                  {/* Component Filter Input */}
                  <div className="relative max-w-xs w-full">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={hubSearch}
                      onChange={(e) => setHubSearch(e.target.value)}
                      placeholder="Filter all menus & libraries..."
                      className="w-full pl-9 pr-8 py-2 text-xs bg-white border border-slate-200 focus:border-indigo-500 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 shadow-sm transition"
                    />
                    {hubSearch && (
                      <button
                        onClick={() => setHubSearch('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* All 10 Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {componentCategories
                    .filter((cat) => {
                      if (!hubSearch.trim()) return true;
                      const q = hubSearch.toLowerCase();
                      const matchCat =
                        cat.label.toLowerCase().includes(q) ||
                        cat.description?.toLowerCase().includes(q);
                      const matchChild = cat.children?.some(
                        (c) =>
                          c.label.toLowerCase().includes(q) ||
                          c.library?.toLowerCase().includes(q) ||
                          c.description?.toLowerCase().includes(q)
                      );
                      return matchCat || matchChild;
                    })
                    .map((cat) => {
                      return (
                        <div
                          key={cat.id}
                          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                        >
                          <div>
                            {/* Card Header */}
                            <div className="flex items-start justify-between mb-3">
                              <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                                {cat.icon}
                              </div>
                              <div className="flex items-center gap-1.5">
                                {cat.badge && (
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                                    {cat.badge}
                                  </span>
                                )}
                                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                  {cat.children?.length} Demos
                                </span>
                              </div>
                            </div>

                            <h3 className="font-bold text-slate-900 text-base">
                              {cat.label}
                            </h3>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                              {cat.description}
                            </p>
                          </div>

                          {/* Submenu Children List */}
                          <div className="mt-5 space-y-1.5 border-t border-slate-100 pt-3">
                            {cat.children?.map((child) => (
                              <button
                                key={child.id}
                                onClick={() => navigate(child.path)}
                                className="w-full flex items-center justify-between text-slate-700 hover:text-indigo-600 font-medium p-1.5 rounded-lg hover:bg-slate-50 transition text-xs text-left group"
                              >
                                <span className="truncate group-hover:translate-x-0.5 transition-transform">
                                  {child.label}
                                </span>
                                <div className="flex items-center gap-2 shrink-0 ml-2">
                                  {child.library && (
                                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition">
                                      {child.library}
                                    </span>
                                  )}
                                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition" />
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
