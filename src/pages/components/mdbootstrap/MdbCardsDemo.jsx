import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBCardImage,
  MDBBtn,
  MDBBadge,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';
import { CreditCard, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function MdbCardsDemo() {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              MDBootstrap Cards & Media
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
              MDBCard Ecosystem
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Material cards with image headers, pricing tables, action buttons, list groups, and dark mode elevation.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Product / Media Card */}
        <MDBCard className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition">
          <MDBCardImage
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
            position="top"
            alt="Telemetry Platform"
            style={{ height: '170px', objectFit: 'cover' }}
          />
          <MDBCardBody>
            <div className="flex items-center justify-between mb-2">
              <MDBBadge color="primary">Analytics Suite</MDBBadge>
              <span className="text-[11px] text-slate-400 font-mono">v4.8 Ready</span>
            </div>
            <MDBCardTitle className="font-bold text-slate-900 text-base">
              Performance Observability
            </MDBCardTitle>
            <MDBCardText className="text-xs text-slate-500 mt-2">
              Continuous distributed trace logging across microservices with latency heatmap distribution.
            </MDBCardText>
            <MDBBtn color="primary" size="sm" className="mt-3">
              View Metrics
            </MDBBtn>
          </MDBCardBody>
          <MDBCardFooter className="text-xs text-slate-400 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <span>Last sync: 1m ago</span>
            <span className="text-emerald-600 font-semibold">● 99.9% Uptime</span>
          </MDBCardFooter>
        </MDBCard>

        {/* Card 2: Pricing / Plan Card */}
        <MDBCard className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition">
          <MDBCardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold text-sm py-3 text-center">
            Professional Cloud Plan
          </MDBCardHeader>
          <MDBCardBody className="text-center">
            <div className="text-3xl font-black text-slate-900 my-2">
              $79<span className="text-xs font-normal text-slate-500">/month</span>
            </div>
            <MDBCardText className="text-xs text-slate-500">
              Ideal for growing engineering teams needing high concurrency and automated backups.
            </MDBCardText>
            <MDBListGroup flush className="my-3 text-xs text-left">
              <MDBListGroupItem>✓ Up to 25 Team Developers</MDBListGroupItem>
              <MDBListGroupItem>✓ 10,000 Rows TanStack Virtual</MDBListGroupItem>
              <MDBListGroupItem>✓ Dedicated CDN & SSL Edge</MDBListGroupItem>
              <MDBListGroupItem>✓ Automated Daily Snapshots</MDBListGroupItem>
            </MDBListGroup>
            <MDBBtn color="success" size="sm" className="w-100 font-bold">
              Upgrade Now
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        {/* Card 3: Modern Dark Mode Card */}
        <MDBCard className="shadow-sm border border-slate-800 rounded-2xl overflow-hidden bg-slate-900 text-white hover:shadow-md transition">
          <MDBCardBody className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="badge bg-indigo-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
                  Dark Mode UI
                </span>
                <span className="text-[10px] font-mono text-indigo-300">MDB5 Dark</span>
              </div>
              <MDBCardTitle className="font-bold text-white text-base">
                Glassmorphic Elevation
              </MDBCardTitle>
              <MDBCardText className="text-xs text-slate-300 mt-2">
                Built-in Material elevation system providing rich contrast, dark backgrounds, and subtle borders.
              </MDBCardText>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-800 flex gap-2">
              <MDBBtn outline color="light" size="sm">
                Docs
              </MDBBtn>
              <MDBBtn color="primary" size="sm">
                Preview Code
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}
