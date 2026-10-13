import React from 'react';
import { useUsersQuery } from '../../../api/useApiData';

export default function DaisyuiAvatarDemo() {
  const { data: users = [] } = useUsersQuery();

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">DaisyUI Masked Avatars & Indicators</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              DaisyUI Avatars
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            CSS masked avatars with squircle and hexagon shapes, online indicators, and stacked avatar groups.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Masked Shapes */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-slate-800">DaisyUI Masked Geometric Shapes</h2>
          <div className="flex flex-wrap items-center gap-6">
            {users.slice(0, 4).map((u, idx) => (
              <div key={u.id} className="flex flex-col items-center gap-2">
                <div className={`avatar ${idx % 2 === 0 ? 'avatar-online' : 'avatar-offline'}`}>
                  <div className="w-16 rounded-2xl ring-2 ring-indigo-500 ring-offset-base-100 ring-offset-2">
                    <img src={u.image} alt={u.firstName} />
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-700">{u.firstName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stacked Avatar Group */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-slate-800">Stacked Avatar Counter Group</h2>
          <div className="flex items-center gap-4">
            <div className="avatar-group -space-x-4 rtl:space-x-reverse">
              {users.slice(0, 5).map((u) => (
                <div key={u.id} className="avatar">
                  <div className="w-12">
                    <img src={u.image} alt={u.firstName} />
                  </div>
                </div>
              ))}
              <div className="avatar avatar-placeholder">
                <div className="w-12 bg-neutral text-neutral-content font-bold text-xs">
                  +{users.length - 5}
                </div>
              </div>
            </div>
            <span className="text-xs text-slate-500">
              Active engineering contributors across all regions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
