import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBInput,
  MDBCheckbox,
  MDBRadio,
  MDBSwitch,
  MDBRange,
  MDBFile,
  MDBTextArea,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { FormInput, Sparkles, CheckCircle2 } from 'lucide-react';

export default function MdbFormsDemo() {
  const [rangeVal, setRangeVal] = useState(72);
  const [switchVal, setSwitchVal] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              MDBootstrap Forms & Controls
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 font-mono">
              MDBInput & Form Controls
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Material floating inputs, textareas, checkboxes, radios, range sliders, and switch toggles.
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-xl text-xs font-bold animate-sub-slide">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Form settings saved!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
          <FormInput className="w-4 h-4 text-indigo-600" />
          General Account & Profile Form
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 block">Full Name</label>
            <MDBInput label="First and Last Name" id="nameField" type="text" defaultValue="Alex Rivera" />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 block">Work Email</label>
            <MDBInput label="Corporate Email" id="emailField" type="email" defaultValue="alex.rivera@enterprise.com" />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 block">Account Password</label>
            <MDBInput label="Password" id="passwordField" type="password" defaultValue="SuperSecurePass123!" />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 mb-1 block">Avatar / Document Upload</label>
            <MDBFile id="fileUploadMdb" />
          </div>

          <div className="md:col-span-2">
            <label className="text-xs font-bold text-slate-700 mb-1 block">Bio / System Requirements</label>
            <MDBTextArea label="Description" id="bioField" rows={3} defaultValue="Senior Staff Engineer leading React design system migrations." />
          </div>
        </div>

        {/* Toggles, Checkboxes, Radios */}
        <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <div className="text-xs font-bold text-slate-700 mb-2">Checkboxes</div>
            <MDBCheckbox name="cb1" id="cb1" label="Two-factor auth (2FA)" defaultChecked />
            <MDBCheckbox name="cb2" id="cb2" label="Email login notifications" defaultChecked />
            <MDBCheckbox name="cb3" id="cb3" label="Beta features preview" />
          </div>

          <div>
            <div className="text-xs font-bold text-slate-700 mb-2">Deployment Environment</div>
            <MDBRadio name="envRadio" id="env1" value="prod" label="Production (US-East)" defaultChecked />
            <MDBRadio name="envRadio" id="env2" value="staging" label="Staging (EU-West)" />
            <MDBRadio name="envRadio" id="env3" value="dev" label="Local Dev Sandbox" />
          </div>

          <div>
            <div className="text-xs font-bold text-slate-700 mb-2">Switches & Range Slider</div>
            <MDBSwitch id="switchAuto" label="Automated Backups" checked={switchVal} onChange={() => setSwitchVal(!switchVal)} />
            <div className="mt-3">
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span>Memory Allocation:</span>
                <span className="font-bold text-indigo-600">{rangeVal}%</span>
              </div>
              <MDBRange
                min={0}
                max={100}
                value={rangeVal}
                onChange={(e) => setRangeVal(e.target.value)}
                id="rangeMdb"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <MDBBtn type="submit" color="primary" className="font-bold px-4">
            Save Changes
          </MDBBtn>
        </div>
      </form>
    </div>
  );
}
