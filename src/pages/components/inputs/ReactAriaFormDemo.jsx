import React, { useState } from 'react';
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button as AriaButton,
  Switch,
  Slider,
} from 'react-aria-components';
import { CheckCircle2, ShieldAlert, Sparkles, Send } from 'lucide-react';

export default function ReactAriaFormDemo() {
  const [submitted, setSubmitted] = useState(null);
  const [syncRate, setSyncRate] = useState(60);
  const [autoSave, setAutoSave] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSubmitted(data);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">React Aria (Adobe) Form</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
              react-aria-components
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Adobe's React Aria accessible form primitives featuring full ARIA state machine, internationalization, and screen reader announcements.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">WCAG AAA Accessible Form</h2>
            <p className="text-xs text-slate-500">Built with Adobe React Aria Component primitives</p>
          </div>
        </div>

        {submitted && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <div className="font-bold">Form validated and submitted via React Aria:</div>
              <pre className="text-xs mt-1 font-mono text-emerald-900 bg-white/60 p-2 rounded-lg">
                {JSON.stringify(submitted, null, 2)}
              </pre>
            </div>
          </div>
        )}

        <Form onSubmit={onSubmit} className="space-y-5">
          <TextField name="organization" isRequired className="flex flex-col gap-1.5">
            <Label className="text-xs font-bold text-slate-700">
              Organization Identifier <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="e.g. acme-aerospace-corp"
              className="px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition"
            />
            <FieldError className="text-xs text-rose-600 font-medium" />
          </TextField>

          <TextField name="contactEmail" type="email" isRequired className="flex flex-col gap-1.5">
            <Label className="text-xs font-bold text-slate-700">
              Security Compliance Email <span className="text-red-500">*</span>
            </Label>
            <Input
              placeholder="security@organization.com"
              className="px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 focus:bg-white transition"
            />
            <FieldError className="text-xs text-rose-600 font-medium" />
          </TextField>

          {/* Accessible Switch */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <div className="text-sm font-bold text-slate-800">Auto-Replication Engine</div>
              <div className="text-xs text-slate-500">Automatically replicate snapshots across backup zones</div>
            </div>
            <Switch
              isSelected={autoSave}
              onChange={setAutoSave}
              className="group inline-flex items-center cursor-pointer"
            >
              <div className={`w-11 h-6 rounded-full transition-colors flex items-center p-1 ${autoSave ? 'bg-indigo-600' : 'bg-slate-300'}`}>
                <div className={`w-4 h-4 rounded-full bg-white transition-transform ${autoSave ? 'translate-x-5' : 'translate-x-0'}`} />
              </div>
            </Switch>
          </div>

          <div className="pt-2">
            <AriaButton
              type="submit"
              className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" /> Validate & Save Configuration
            </AriaButton>
          </div>
        </Form>
      </div>
    </div>
  );
}
