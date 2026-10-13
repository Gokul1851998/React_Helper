import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBadge,
  MDBBtn,
  MDBProgress,
  MDBProgressBar,
} from 'mdb-react-ui-kit';
import { Table as TableIcon, Sparkles } from 'lucide-react';

const SERVICES = [
  { id: 'SVC-101', name: 'Identity Service', lang: 'Go 1.22', version: 'v3.2.0', uptime: '99.99%', status: 'Healthy', badge: 'success', latency: '18ms' },
  { id: 'SVC-102', name: 'Order Processing', lang: 'Node.js', version: 'v18.4', uptime: '99.95%', status: 'Healthy', badge: 'success', latency: '42ms' },
  { id: 'SVC-103', name: 'Inventory Stream', lang: 'Java 21', version: 'v2.1.0', uptime: '98.50%', status: 'Degraded', badge: 'warning', latency: '180ms' },
  { id: 'SVC-104', name: 'Billing Webhook', lang: 'Python 3.12', version: 'v4.0.1', uptime: '99.99%', status: 'Healthy', badge: 'success', latency: '35ms' },
  { id: 'SVC-105', name: 'Elastic Search Node', lang: 'Java', version: 'v8.11', uptime: '94.20%', status: 'Reindexing', badge: 'danger', latency: '410ms' },
];

export default function MdbTableDemo() {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              MDBootstrap Table & Grids
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 font-mono">
              MDBTable
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Material styled responsive tables with dark headers, status badges, hover interactions, and progress metrics.
          </p>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <TableIcon className="w-4 h-4 text-indigo-600" />
            Microservice Fleet Status
          </h3>
          <span className="text-xs text-slate-400 font-mono">5 Active Services</span>
        </div>

        <MDBTable hover responsive className="text-xs">
          <MDBTableHead dark>
            <tr>
              <th scope="col">Service ID</th>
              <th scope="col">Service Name</th>
              <th scope="col">Runtime</th>
              <th scope="col">Version</th>
              <th scope="col">Health</th>
              <th scope="col">Latency</th>
              <th scope="col">Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {SERVICES.map((s) => (
              <tr key={s.id}>
                <th scope="row" className="font-mono text-slate-500">{s.id}</th>
                <td className="font-bold text-slate-800">{s.name}</td>
                <td><span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-mono">{s.lang}</span></td>
                <td className="font-mono text-slate-600">{s.version}</td>
                <td><MDBBadge color={s.badge}>{s.status}</MDBBadge></td>
                <td className="font-mono text-slate-700">{s.latency}</td>
                <td><MDBBtn size="sm" color="primary" outline>Logs</MDBBtn></td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>

        {/* Progress Bars */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <h4 className="text-xs font-bold text-slate-800">Cluster Capacity & Throughput</h4>
          <div>
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>Overall Fleet Load (Normal)</span>
              <span className="font-bold text-slate-700">62%</span>
            </div>
            <MDBProgress height="8">
              <MDBProgressBar width="62" valuemin={0} valuemax={100} bgColor="primary" />
            </MDBProgress>
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>Network I/O Saturation</span>
              <span className="font-bold text-amber-600">84%</span>
            </div>
            <MDBProgress height="8">
              <MDBProgressBar width="84" valuemin={0} valuemax={100} bgColor="warning" animated striped />
            </MDBProgress>
          </div>
        </div>
      </div>
    </div>
  );
}
