import React from 'react';
import { useUsersQuery } from '../../../api/useApiData';
import { Mail, Phone, MapPin, Building2, Sparkles, ExternalLink } from 'lucide-react';

export default function ModernCardsDemo() {
  const { data: users = [], isLoading } = useUsersQuery();

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">NextUI / HeroUI Style Modern Cards</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-700 border border-cyan-200">
              HeroUI Design System
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Modern aesthetic cards featuring frosted backdrop blurs, luminous gradient borders, and sleek micro-interactions.
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center p-12">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.slice(0, 6).map((user) => (
            <div
              key={user.id}
              className="group relative rounded-3xl p-6 bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Top ambient highlight */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={user.image}
                    alt={user.firstName}
                    className="w-16 h-16 rounded-2xl object-cover bg-slate-100 ring-2 ring-indigo-500/20"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 truncate text-base">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 truncate mt-0.5">
                    {user.company?.title || 'Lead Architect'}
                  </p>
                  <p className="text-xs text-slate-400 truncate flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3" /> {user.company?.name}
                  </p>
                </div>
              </div>

              {/* Info chips */}
              <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{user.address?.city}, {user.address?.country || 'USA'}</span>
                </div>
              </div>

              {/* Action row */}
              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">
                  ID: #{user.id}
                </span>
                <button className="px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-indigo-600 rounded-xl transition-colors duration-200 shadow-sm flex items-center gap-1.5">
                  View Dossier <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
