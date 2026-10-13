import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('developer@enterprise.io');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('auth_token', 'mock_jwt_token_react_helper');
      navigate('/home');
    }, 700);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-900 text-slate-100">
      {/* Left visual branding hero */}
      <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border-b lg:border-b-0 lg:border-r border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Brand */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-indigo-500/25">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl font-extrabold tracking-tight text-white">ReactHelper</div>
            <div className="text-xs text-indigo-400 font-mono">Design System Showcase</div>
          </div>
        </div>

        {/* Hero description */}
        <div className="my-12 relative z-10 max-w-lg">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 inline-flex items-center gap-1.5 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" /> Multi-UI Component Lab
          </span>
          <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            Explore 7 Premier UI Frameworks in One Project.
          </h1>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Experience Material UI, Ant Design, TanStack Virtualization, DaisyUI, Radix UI Primitives, Headless UI, and Adobe React Aria with live real-world API data.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/60">
              <div className="font-bold text-white">Switchable Layout</div>
              <div className="text-slate-400 text-[11px] mt-0.5">Toggle Sidebar vs Navbar</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/60">
              <div className="font-bold text-white">10k Virtual Rows</div>
              <div className="text-slate-400 text-[11px] mt-0.5">TanStack Virtual 60fps</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs text-slate-500 relative z-10">
          Running on Vite port <strong>5173</strong> • TanStack Query Active
        </div>
      </div>

      {/* Right Login Card */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-slate-950">
        <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Access Lab Console</h2>
            <p className="text-xs text-slate-400 mt-1">Sign in with your developer credentials</p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Work Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Password
                </label>
                <a href="#forgot" className="text-xs text-indigo-400 hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-800/80 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Enter Dashboard <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-500">
            Click Sign In to explore the dashboard and switch layouts.
          </div>
        </div>
      </div>
    </div>
  );
}
