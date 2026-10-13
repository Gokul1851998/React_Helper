import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export default function RadixDialogDemo() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Radix UI Primitives Dialog</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-200">
              @radix-ui/react-dialog
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Fully accessible, unstyled dialog primitive with focus trap, WAI-ARIA compliance, and smooth Tailwind animations.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center max-w-xl mx-auto py-16">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Radix UI Dialog Primitive</h2>
        <p className="text-slate-500 text-sm max-w-md mt-2">
          Click below to open the Radix modal. It traps keyboard focus, closes on escape or outside click, and manages screen-reader announcements natively.
        </p>

        {submitted && (
          <div className="mt-4 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
            Action confirmed successfully!
          </div>
        )}

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl transition shadow-sm hover:shadow-indigo-500/20">
              Open Radix Dialog Modal
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-50 animate-fadeIn" />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl z-50 border border-slate-200 animate-scaleIn focus:outline-none">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <Dialog.Title className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" /> Confirm Deployment
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition">
                    <X className="w-5 h-5" />
                  </button>
                </Dialog.Close>
              </div>

              <Dialog.Description className="text-sm text-slate-500 mt-3">
                Are you sure you want to push production artifacts to the live Kubernetes cluster? This action triggers a rolling update for all worker pods.
              </Dialog.Description>

              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 text-xs text-amber-800">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Zero-downtime rolling update enabled. Pods will update sequentially.</span>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <Dialog.Close asChild>
                  <button className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition">
                    Cancel
                  </button>
                </Dialog.Close>
                <button
                  onClick={() => {
                    setSubmitted(true);
                    setOpen(false);
                  }}
                  className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition shadow-sm"
                >
                  Confirm & Deploy
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
}
