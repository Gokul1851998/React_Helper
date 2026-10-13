import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBBtn,
  MDBBtnGroup,
  MDBBadge,
  MDBSpinner,
  MDBCard,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import { Zap, Sparkles, Check, RefreshCw } from 'lucide-react';

export default function MdbButtonsDemo() {
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setClickCount((c) => c + 1);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              MDBootstrap Buttons & Badges
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono">
              MDBBtn & MDBBadge
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Material 3 Ripple buttons, colored variants, outline pills, multi-size button groups, and async loading spinners.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl">
          <span className="text-slate-500">Clicks Tracked:</span>
          <span className="font-bold text-indigo-600">{clickCount}</span>
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Solid Colors */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
            1. Theme Color Palettes
          </h3>
          <div className="flex flex-wrap gap-2">
            <MDBBtn color="primary" onClick={() => setClickCount((c) => c + 1)}>Primary</MDBBtn>
            <MDBBtn color="secondary">Secondary</MDBBtn>
            <MDBBtn color="success">Success</MDBBtn>
            <MDBBtn color="danger">Danger</MDBBtn>
            <MDBBtn color="warning">Warning</MDBBtn>
            <MDBBtn color="info">Info</MDBBtn>
            <MDBBtn color="dark">Dark</MDBBtn>
            <MDBBtn color="light">Light</MDBBtn>
            <MDBBtn color="link">Link</MDBBtn>
          </div>
        </div>

        {/* Outline Variants */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
            2. Outline & Rounded Pill Shapes
          </h3>
          <div className="flex flex-wrap gap-2">
            <MDBBtn outline color="primary">Outline Primary</MDBBtn>
            <MDBBtn outline color="success">Outline Success</MDBBtn>
            <MDBBtn outline color="danger">Outline Danger</MDBBtn>
            <MDBBtn rounded color="primary">Rounded Pill</MDBBtn>
            <MDBBtn rounded color="success">Rounded Success</MDBBtn>
            <MDBBtn rounded outline color="info">Rounded Outline</MDBBtn>
          </div>
        </div>

        {/* Button Groups & Sizes */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
            3. Button Groups & Sizing
          </h3>
          <div className="space-y-3">
            <div>
              <MDBBtnGroup>
                <MDBBtn color="primary">Left</MDBBtn>
                <MDBBtn color="primary">Middle</MDBBtn>
                <MDBBtn color="primary">Right</MDBBtn>
              </MDBBtnGroup>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <MDBBtn size="sm" color="primary">Small (sm)</MDBBtn>
              <MDBBtn color="primary">Default</MDBBtn>
              <MDBBtn size="lg" color="primary">Large (lg)</MDBBtn>
            </div>
          </div>
        </div>

        {/* Loading Spinners & Badges */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
            4. Loading Spinners & Badges
          </h3>
          <div className="space-y-3">
            <div>
              <MDBBtn color="primary" disabled={loading} onClick={simulateLoading}>
                {loading ? (
                  <>
                    <MDBSpinner size="sm" role="status" tag="span" className="me-2" />
                    Processing...
                  </>
                ) : (
                  'Click to Trigger Spinner'
                )}
              </MDBBtn>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 items-center">
              <MDBBadge color="primary">MDBBadge Primary</MDBBadge>
              <MDBBadge color="success">Success</MDBBadge>
              <MDBBadge color="danger">Critical</MDBBadge>
              <MDBBadge pill color="info">Pill 99+</MDBBadge>
              <MDBBadge dot color="success" />
              <MDBBadge dot color="danger" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
