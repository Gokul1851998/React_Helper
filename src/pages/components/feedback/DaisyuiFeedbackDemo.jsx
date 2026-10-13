import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, Info, XCircle, Bell, Sparkles } from 'lucide-react';

export default function DaisyuiFeedbackDemo() {
  const [showToast, setShowToast] = useState(false);

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">DaisyUI Toasts & Alert Banners</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 border border-pink-200">
              DaisyUI Feedback
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Tailwind DaisyUI alerts, radial progress dials, and floating screen corner toasts.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Trigger Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-800">Trigger DaisyUI Toast Overlay</h2>
            <p className="text-xs text-slate-500 mt-0.5">Spawns a floating bottom-right notification pill.</p>
          </div>
          <button
            onClick={triggerToast}
            className="btn btn-primary btn-sm rounded-xl text-white font-semibold gap-2"
          >
            <Bell className="w-4 h-4" /> Trigger Toast
          </button>
        </div>

        {/* DaisyUI Alert Elements */}
        <div className="space-y-3">
          <div className="alert alert-info rounded-2xl border border-info/20 shadow-sm">
            <Info className="w-5 h-5" />
            <div>
              <h3 className="font-bold text-sm">New Service Mesh Release Available</h3>
              <div className="text-xs opacity-90">Envoy proxy v1.32.0 is ready for deployment.</div>
            </div>
            <button className="btn btn-xs rounded-lg">Update</button>
          </div>

          <div className="alert alert-success rounded-2xl border border-success/20 shadow-sm text-white">
            <CheckCircle2 className="w-5 h-5" />
            <div>
              <h3 className="font-bold text-sm">Build Succeeded</h3>
              <div className="text-xs opacity-90">All 142 integration test suites passed in 24s.</div>
            </div>
          </div>

          <div className="alert alert-warning rounded-2xl border border-warning/20 shadow-sm">
            <AlertTriangle className="w-5 h-5" />
            <div>
              <h3 className="font-bold text-sm">Certificate Expiration Warning</h3>
              <div className="text-xs opacity-90">Staging SSL certificate will expire in 14 days.</div>
            </div>
          </div>

          <div className="alert alert-error rounded-2xl border border-error/20 shadow-sm text-white">
            <XCircle className="w-5 h-5" />
            <div>
              <h3 className="font-bold text-sm">Database Sync Error</h3>
              <div className="text-xs opacity-90">Replication lag exceeded 5000ms threshold.</div>
            </div>
          </div>
        </div>

        {/* Floating Toast */}
        {showToast && (
          <div className="toast toast-end toast-bottom z-50 animate-bounce">
            <div className="alert alert-success text-white shadow-xl rounded-2xl border border-emerald-400">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold text-sm">Telemetry event dispatched successfully!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
