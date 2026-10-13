import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Navigation, Sparkles } from 'lucide-react';

export default function MdbNavigationDemo() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              MDBootstrap Navigation & Tabs
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-700 border border-cyan-200 font-mono">
              MDBTabs & MDBPagination
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Material sliding tabs, active pane content, dynamic breadcrumbs, and pagination links.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tabs & Tab Content */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
            1. MDB Tabs & Dynamic Panes
          </h3>

          <MDBTabs className="mb-3">
            <MDBTabsItem>
              <MDBTabsLink onClick={() => setActiveTab('tab1')} active={activeTab === 'tab1'}>
                Overview
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => setActiveTab('tab2')} active={activeTab === 'tab2'}>
                API Endpoints
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => setActiveTab('tab3')} active={activeTab === 'tab3'}>
                Settings
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent className="text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <MDBTabsPane open={activeTab === 'tab1'}>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Architecture Overview</h4>
              Material Design for Bootstrap combines flexbox navigation with accessible WAI-ARIA tab list controls and smooth pane fading.
            </MDBTabsPane>
            <MDBTabsPane open={activeTab === 'tab2'}>
              <h4 className="font-bold text-slate-800 text-sm mb-1">REST & GraphQL Endpoints</h4>
              Connect to <code>https://api.enterprise.io/v1/telemetry</code> with Bearer JWT tokens.
            </MDBTabsPane>
            <MDBTabsPane open={activeTab === 'tab3'}>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Environment Preferences</h4>
              Configure CORS origin headers, rate limit buffers, and Redis caching TTL.
            </MDBTabsPane>
          </MDBTabsContent>
        </div>

        {/* Breadcrumb & Pagination */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <div>
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 mb-3">
              2. MDB Breadcrumbs
            </h3>
            <MDBBreadcrumb className="text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <MDBBreadcrumbItem>
                <a href="#home">Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#components">Components</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#mdbootstrap">MDBootstrap</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>
                Navigation
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 mb-3">
              3. MDB Pagination (Page {activePage})
            </h3>
            <MDBPagination className="mb-0">
              <MDBPaginationItem disabled={activePage === 1}>
                <MDBPaginationLink href="#" onClick={() => setActivePage((p) => Math.max(1, p - 1))}>
                  Previous
                </MDBPaginationLink>
              </MDBPaginationItem>
              {[1, 2, 3, 4].map((page) => (
                <MDBPaginationItem key={page} active={activePage === page}>
                  <MDBPaginationLink href="#" onClick={() => setActivePage(page)}>
                    {page}
                  </MDBPaginationLink>
                </MDBPaginationItem>
              ))}
              <MDBPaginationItem disabled={activePage === 4}>
                <MDBPaginationLink href="#" onClick={() => setActivePage((p) => Math.min(4, p + 1))}>
                  Next
                </MDBPaginationLink>
              </MDBPaginationItem>
            </MDBPagination>
          </div>
        </div>
      </div>
    </div>
  );
}
