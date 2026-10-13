import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Send, CheckCircle2, User, Mail, Sparkles } from 'lucide-react';

export default function HeadlessModalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Frontend Engineer' });
  const [invited, setInvited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInvited(true);
    setIsOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Headless UI Modal Dialog</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              @headlessui/react
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Tailwind Labs Headless UI component dialog with spring transitions, backdrop filtering, and keyboard control.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center max-w-xl mx-auto py-16">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
          <Sparkles className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Headless UI Transition Modal</h2>
        <p className="text-slate-500 text-sm max-w-md mt-2">
          Experience transition enter & leave choreography with form inputs managed effortlessly.
        </p>

        {invited && (
          <div className="mt-4 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Invitation dispatched to {formData.email || 'developer@company.io'}!
          </div>
        )}

        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl transition shadow-sm"
        >
          Invite Team Member
        </button>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-6 text-left align-middle shadow-2xl transition-all border border-slate-200">
                    <Dialog.Title as="h3" className="text-lg font-bold text-slate-900">
                      Invite Collaborator
                    </Dialog.Title>
                    <p className="text-xs text-slate-500 mt-1">
                      Send an organization invite link with predefined role access permissions.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="Sarah Connor"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            required
                            placeholder="sarah@skynet-research.org"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Role & Scope
                        </label>
                        <select
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                        >
                          <option>Frontend Engineer</option>
                          <option>Backend Architect</option>
                          <option>DevOps / SRE Lead</option>
                          <option>Product Manager</option>
                        </select>
                      </div>

                      <div className="mt-6 flex justify-end gap-3 pt-3 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-5 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition shadow-sm flex items-center gap-1.5"
                        >
                          <Send className="w-3.5 h-3.5" /> Send Invitation
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
}
