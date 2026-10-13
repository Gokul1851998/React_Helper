import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBBadge,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Layers, Sparkles, HelpCircle } from 'lucide-react';

export default function MdbAccordionDemo() {
  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              MDBootstrap Accordion & Collapse
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 font-mono">
              MDBAccordion
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Collapsible FAQ accordion drawers with initial active index control, smooth height transitions, and customized headers.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-indigo-600" />
              Frequently Asked Questions (FAQ) Accordion
            </h3>
            <MDBBadge color="primary">MDB5 Accordion</MDBBadge>
          </div>

          <MDBAccordion initialActive={1}>
            <MDBAccordionItem collapseId={1} headerTitle="What makes MDBootstrap unique?">
              MDBootstrap combines the solid responsiveness of Bootstrap 5 with the clean, elegant visual guidelines of Google Material Design 3. It includes over 700+ UI components, utility classes, and pre-built templates.
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={2} headerTitle="Is MDBootstrap fully compatible with React 19 and Vite?">
              Yes! `mdb-react-ui-kit` v10 operates seamlessly in Vite, supporting fast ES module imports, JSX syntax, and modern build optimizations.
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={3} headerTitle="Can I combine MDBootstrap with Tailwind CSS?">
              Absolutely! As demonstrated in this project, MDBootstrap components can coexist alongside Tailwind CSS layout utilities and other design systems like Material UI and Ant Design.
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={4} headerTitle="Does MDBootstrap provide dark mode support?">
              Yes, MDBootstrap provides a dedicated dark theme mode (`mdb.dark.min.css`) that automatically adjusts component contrast, text colors, and elevated shadows.
            </MDBAccordionItem>
          </MDBAccordion>
        </div>
      </div>
    </div>
  );
}
