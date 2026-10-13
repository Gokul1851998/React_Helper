import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Settings,
  Layout,
  Menu,
  Sidebar as SidebarIcon,
  Check,
  Search,
  Bell,
  LogOut,
  User,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useLayout } from '../context/LayoutContext';

export default function Header() {
  const { layout, toggleLayout } = useLayout();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const settingsRef = useRef(null);
  const userRef = useRef(null);
  const navigate = useNavigate();

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setSettingsOpen(false);
      }
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 py-3 transition-all">
      <div className="flex items-center justify-between gap-4">
        {/* Left branding / title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate('/home')}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-1.5">
                ReactHelper <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">Vite 5173</span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">Multi-UI Component Architecture</div>
            </div>
          </div>
        </div>

        {/* Center search */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search components, APIs, props..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-100/70 hover:bg-slate-100 focus:bg-white border border-transparent focus:border-indigo-500/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-800 transition"
            />
          </div>
        </div>

        {/* Right action controls */}
        <div className="flex items-center gap-2">
          {/* Notification Button */}
          <button className="relative p-2.5 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full" />
          </button>

          {/* Settings / Layout Switcher Dropdown */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => {
                setSettingsOpen(!settingsOpen);
                setUserMenuOpen(false);
              }}
              className={`p-2.5 rounded-xl transition flex items-center gap-1.5 ${
                settingsOpen
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title="Layout & System Settings"
            >
              <Settings className={`w-4 h-4 ${settingsOpen ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline text-xs font-bold">Settings</span>
            </button>

            {settingsOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-scaleIn">
                <div className="px-3 py-2 border-b border-slate-100">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Layout Navigation Mode
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Switch how you browse component libraries
                  </div>
                </div>

                <div className="p-1.5 space-y-1">
                  {/* Option 1: Sidebar Layout */}
                  <button
                    onClick={() => {
                      toggleLayout('sidebar');
                      setSettingsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition ${
                      layout === 'sidebar'
                        ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-200/60'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${layout === 'sidebar' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <SidebarIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold">Sidebar Layout</div>
                        <div className="text-[10px] text-slate-400 font-normal">Collapsible vertical side menu</div>
                      </div>
                    </div>
                    {layout === 'sidebar' && <Check className="w-4 h-4 text-indigo-600 shrink-0" />}
                  </button>

                  {/* Option 2: Navbar Layout */}
                  <button
                    onClick={() => {
                      toggleLayout('navbar');
                      setSettingsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition ${
                      layout === 'navbar'
                        ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-200/60'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${layout === 'navbar' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <Menu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold">Navbar Layout</div>
                        <div className="text-[10px] text-slate-400 font-normal">Top horizontal dropdown navbar</div>
                      </div>
                    </div>
                    {layout === 'navbar' && <Check className="w-4 h-4 text-indigo-600 shrink-0" />}
                  </button>
                </div>

                <div className="pt-2 px-3 pb-1 border-t border-slate-100 text-[11px] text-slate-400 text-center">
                  Port: <strong>5173</strong> • Vite HMR Active
                </div>
              </div>
            )}
          </div>

          {/* User Profile & Logout */}
          <div className="relative" ref={userRef}>
            <button
              onClick={() => {
                setUserMenuOpen(!userMenuOpen);
                setSettingsOpen(false);
              }}
              className="flex items-center gap-2 p-1 pl-2 rounded-xl hover:bg-slate-100 transition"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                JD
              </div>
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-scaleIn">
                <div className="px-3 py-2 border-b border-slate-100">
                  <div className="text-xs font-bold text-slate-800">John Developer</div>
                  <div className="text-[11px] text-slate-400">john.dev@enterprise.io</div>
                </div>

                <div className="p-1 space-y-0.5">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition"
                  >
                    <LogOut className="w-4 h-4 text-rose-500" /> Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
