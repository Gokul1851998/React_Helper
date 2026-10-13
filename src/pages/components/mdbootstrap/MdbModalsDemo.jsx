import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBBadge,
} from 'mdb-react-ui-kit';
import { Layers, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';

export default function MdbModalsDemo() {
  const [basicModal, setBasicModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [actionStatus, setActionStatus] = useState(null);

  const toggleBasic = () => setBasicModal(!basicModal);
  const toggleConfirm = () => setConfirmModal(!confirmModal);

  const handleConfirmAction = () => {
    toggleConfirm();
    setActionStatus('Deployment successfully initiated on Kubernetes cluster!');
    setTimeout(() => setActionStatus(null), 3500);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              MDBootstrap Modals & Overlays
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200 font-mono">
              MDBModal
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Material dialog overlays with customized header banners, action footers, and backdrop dismiss triggers.
          </p>
        </div>
      </div>

      {actionStatus && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2 animate-sub-slide font-semibold">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>{actionStatus}</span>
        </div>
      )}

      {/* Triggers Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
            1. Standard Dialog Modal
          </h3>
          <p className="text-xs text-slate-500">
            Click to launch an informative dialog displaying terms or feature details.
          </p>
          <MDBBtn color="primary" onClick={toggleBasic}>
            Open Information Modal
          </MDBBtn>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
            2. Destructive / Confirm Modal
          </h3>
          <p className="text-xs text-slate-500">
            A confirmation dialog with clear affirmative and cancellation actions.
          </p>
          <MDBBtn color="danger" onClick={toggleConfirm}>
            Open Confirm Action Modal
          </MDBBtn>
        </div>
      </div>

      {/* Basic Modal */}
      <MDBModal open={basicModal} onClose={toggleBasic} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className="font-bold text-base">System Telemetry Specs</MDBModalTitle>
              <MDBBtn className="btn-close" color="none" onClick={toggleBasic}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className="text-xs text-slate-600 space-y-2">
              <p>
                Our telemetry agents collect application metrics every 15 seconds, storing them in a distributed time-series database with 90-day retention.
              </p>
              <div className="p-2 rounded bg-slate-50 border border-slate-200 text-[11px] font-mono">
                Port: 9090 • Prometheus Exporter Active
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" size="sm" onClick={toggleBasic}>
                Close
              </MDBBtn>
              <MDBBtn color="primary" size="sm" onClick={toggleBasic}>
                Understand
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      {/* Confirm Modal */}
      <MDBModal open={confirmModal} onClose={toggleConfirm} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className="font-bold text-base text-rose-600 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Confirm Deployment
              </MDBModalTitle>
              <MDBBtn className="btn-close" color="none" onClick={toggleConfirm}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className="text-xs text-slate-600">
              You are about to roll out a canary build to <strong>100% of production traffic</strong>. Do you want to proceed with this deployment?
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" size="sm" onClick={toggleConfirm}>
                Cancel
              </MDBBtn>
              <MDBBtn color="danger" size="sm" onClick={handleConfirmAction}>
                Confirm & Deploy
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
