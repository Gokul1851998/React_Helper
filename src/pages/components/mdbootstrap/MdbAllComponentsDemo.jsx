import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBBtn,
  MDBBtnGroup,
  MDBBadge,
  MDBSpinner,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBCardImage,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBInput,
  MDBCheckbox,
  MDBRadio,
  MDBSwitch,
  MDBRange,
  MDBFile,
  MDBTextArea,
  MDBAccordion,
  MDBAccordionItem,
  MDBProgress,
  MDBProgressBar,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';
import {
  Sparkles,
  Layers,
  CheckCircle,
  ExternalLink,
  Zap,
  Box,
  Sliders,
  Table as TableIcon,
  CreditCard,
  FormInput,
  Navigation,
  Bell
} from 'lucide-react';

export default function MdbAllComponentsDemo() {
  const [activeTab, setActiveTab] = useState('buttons');
  const [modalOpen, setModalOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [rangeVal, setRangeVal] = useState(65);
  const [switchVal, setSwitchVal] = useState(true);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleSimulateLoad = () => {
    setBtnLoading(true);
    setTimeout(() => setBtnLoading(false), 1200);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              MDBootstrap 5 UI Kit (mdb-react-ui-kit)
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
              v10.0.0 Installed
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Material Design for Bootstrap 5. Fully responsive components featuring buttons, cards, forms, tables, accordions, modals, and navigation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200">
            Bootstrap 5 + Material 3 Design
          </span>
        </div>
      </div>

      {/* Showcase Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
        {[
          { id: 'buttons', label: 'Buttons & Badges', icon: <Zap className="w-3.5 h-3.5" /> },
          { id: 'cards', label: 'Cards & Layout', icon: <CreditCard className="w-3.5 h-3.5" /> },
          { id: 'forms', label: 'Forms & Controls', icon: <FormInput className="w-3.5 h-3.5" /> },
          { id: 'tables', label: 'Tables & Progress', icon: <TableIcon className="w-3.5 h-3.5" /> },
          { id: 'accordion', label: 'Accordion & Modals', icon: <Layers className="w-3.5 h-3.5" /> },
          { id: 'nav', label: 'Navigation & Tabs', icon: <Navigation className="w-3.5 h-3.5" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* 1. BUTTONS & BADGES TAB */}
      {activeTab === 'buttons' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-600" />
              MDB Buttons & Color Schemes
            </h3>

            <div className="flex flex-wrap gap-2.5">
              <MDBBtn color="primary">Primary</MDBBtn>
              <MDBBtn color="secondary">Secondary</MDBBtn>
              <MDBBtn color="success">Success</MDBBtn>
              <MDBBtn color="danger">Danger</MDBBtn>
              <MDBBtn color="warning">Warning</MDBBtn>
              <MDBBtn color="info">Info</MDBBtn>
              <MDBBtn color="light">Light</MDBBtn>
              <MDBBtn color="dark">Dark</MDBBtn>
              <MDBBtn color="link">Link Button</MDBBtn>
            </div>

            <h4 className="text-sm font-bold text-slate-800 pt-2">Outlined & Rounded Pill Variants</h4>
            <div className="flex flex-wrap gap-2.5">
              <MDBBtn outline color="primary">Primary Outline</MDBBtn>
              <MDBBtn outline color="success">Success Outline</MDBBtn>
              <MDBBtn outline color="danger">Danger Outline</MDBBtn>
              <MDBBtn rounded color="primary">Rounded Primary</MDBBtn>
              <MDBBtn rounded color="secondary">Rounded Secondary</MDBBtn>
              <MDBBtn rounded outline color="info">Rounded Outline</MDBBtn>
            </div>

            <h4 className="text-sm font-bold text-slate-800 pt-2">Button Groups & Sizing</h4>
            <div className="flex flex-wrap items-center gap-4">
              <MDBBtnGroup>
                <MDBBtn color="primary">Left</MDBBtn>
                <MDBBtn color="primary">Middle</MDBBtn>
                <MDBBtn color="primary">Right</MDBBtn>
              </MDBBtnGroup>

              <MDBBtn size="sm" color="primary">Small</MDBBtn>
              <MDBBtn color="primary">Regular</MDBBtn>
              <MDBBtn size="lg" color="primary">Large Size</MDBBtn>

              <MDBBtn color="primary" disabled={btnLoading} onClick={handleSimulateLoad}>
                {btnLoading ? (
                  <>
                    <MDBSpinner size="sm" role="status" tag="span" className="me-2" />
                    Loading...
                  </>
                ) : (
                  'Click for Spinner'
                )}
              </MDBBtn>
            </div>

            <h4 className="text-sm font-bold text-slate-800 pt-2">MDB Badges & Notification Pills</h4>
            <div className="flex flex-wrap items-center gap-3">
              <MDBBadge color="primary">Primary Badge</MDBBadge>
              <MDBBadge color="secondary">Secondary</MDBBadge>
              <MDBBadge color="success">Verified Success</MDBBadge>
              <MDBBadge color="danger">Critical Alert</MDBBadge>
              <MDBBadge color="warning">Pending Review</MDBBadge>
              <MDBBadge color="info">Information</MDBBadge>
              <MDBBadge pill color="primary">Pill 99+</MDBBadge>
              <MDBBadge pill color="danger">14 Unread</MDBBadge>
              <MDBBadge dot color="success" />
              <MDBBadge dot color="danger" />
            </div>
          </div>
        </div>
      )}

      {/* 2. CARDS & LAYOUT TAB */}
      {activeTab === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <MDBCard className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden">
            <MDBCardImage
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
              position="top"
              alt="Analytics Dashboard"
              style={{ height: '180px', objectFit: 'cover' }}
            />
            <MDBCardBody>
              <MDBCardTitle className="font-bold text-slate-900">Real-Time Data Streams</MDBCardTitle>
              <MDBCardText className="text-xs text-slate-500 mt-2">
                High-throughput distributed telemetry processing with automatic Kafka partition failover.
              </MDBCardText>
              <MDBBtn color="primary" size="sm" className="mt-2">
                Explore Metrics
              </MDBBtn>
            </MDBCardBody>
            <MDBCardFooter className="text-muted text-xs bg-slate-50 border-t border-slate-100">
              Updated 2 mins ago
            </MDBCardFooter>
          </MDBCard>

          {/* Card 2 */}
          <MDBCard className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden">
            <MDBCardHeader className="bg-indigo-600 text-white font-bold text-sm py-3">
              Featured Plan: Enterprise
            </MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle className="text-2xl font-black text-slate-900">$299<span className="text-xs font-normal text-slate-500">/mo</span></MDBCardTitle>
              <MDBCardText className="text-xs text-slate-500 mt-2">
                Full access to all 700+ Material Design for Bootstrap components, SVG assets, and dedicated SLA support.
              </MDBCardText>
              <MDBListGroup flush className="my-3 text-xs">
                <MDBListGroupItem>99.99% Uptime Guarantee</MDBListGroupItem>
                <MDBListGroupItem>Unlimited Team Seats</MDBListGroupItem>
                <MDBListGroupItem>Audit Logs & SOC2 Compliance</MDBListGroupItem>
              </MDBListGroup>
              <MDBBtn color="success" size="sm" className="w-100">
                Activate Subscription
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          {/* Card 3 */}
          <MDBCard className="shadow-sm border border-slate-200 rounded-2xl overflow-hidden bg-slate-900 text-white">
            <MDBCardBody className="p-5">
              <span className="badge bg-indigo-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
                Dark Mode Card
              </span>
              <MDBCardTitle className="font-bold text-white text-lg mt-3">
                Material You Elevation
              </MDBCardTitle>
              <MDBCardText className="text-xs text-slate-300 mt-2">
                MDBootstrap components seamlessly adapt to light and dark themes with smooth ripple micro-interactions.
              </MDBCardText>
              <div className="mt-4 flex gap-2">
                <MDBBtn outline color="light" size="sm">
                  Documentation
                </MDBBtn>
                <MDBBtn color="primary" size="sm">
                  Get Started
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      )}

      {/* 3. FORMS & CONTROLS TAB */}
      {activeTab === 'forms' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <FormInput className="w-4 h-4 text-indigo-600" />
            MDB Form Inputs & Controls
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">Full Name</label>
              <MDBInput label="Your Name" id="nameInput" type="text" defaultValue="John Developer" />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">Work Email</label>
              <MDBInput label="Corporate Email" id="emailInput" type="email" defaultValue="john.dev@enterprise.io" />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">Secure Password</label>
              <MDBInput label="Password" id="passwordInput" type="password" defaultValue="SecretPass123!" />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">File Attachment</label>
              <MDBFile id="customFile" />
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-bold text-slate-700 mb-1 block">Project Requirements Description</label>
              <MDBTextArea label="Message / Description" id="textAreaMsg" rows={3} defaultValue="We are upgrading our enterprise web portal to Material Design for Bootstrap." />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div>
              <div className="text-xs font-bold text-slate-700 mb-2">Checkboxes & Radios</div>
              <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Enable API Rate Limiting" defaultChecked />
              <MDBCheckbox name="flexCheck" value="" id="flexCheckChecked" label="Send weekly metric summaries" />
            </div>

            <div>
              <div className="text-xs font-bold text-slate-700 mb-2">Radio Options</div>
              <MDBRadio name="inlineRadio" id="inlineRadio1" value="option1" label="Production Cluster" defaultChecked />
              <MDBRadio name="inlineRadio" id="inlineRadio2" value="option2" label="Staging Sandbox" />
            </div>

            <div>
              <div className="text-xs font-bold text-slate-700 mb-2">Switch & Range ({rangeVal}%)</div>
              <MDBSwitch id="flexSwitchCheckDefault" label="Automated Backups" checked={switchVal} onChange={() => setSwitchVal(!switchVal)} />
              <div className="mt-3">
                <MDBRange
                  min={0}
                  max={100}
                  value={rangeVal}
                  onChange={(e) => setRangeVal(e.target.value)}
                  id="customRange"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. TABLES & PROGRESS TAB */}
      {activeTab === 'tables' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <TableIcon className="w-4 h-4 text-indigo-600" />
              MDB Responsive Striped Table
            </h3>

            <MDBTable hover responsive className="text-xs">
              <MDBTableHead dark>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Microservice</th>
                  <th scope="col">Version</th>
                  <th scope="col">Health Status</th>
                  <th scope="col">Response Time</th>
                  <th scope="col">Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">SVC-01</th>
                  <td><strong>Auth & Token Exchange</strong></td>
                  <td>v2.4.1</td>
                  <td><MDBBadge color="success">Healthy 100%</MDBBadge></td>
                  <td>24ms</td>
                  <td><MDBBtn size="sm" color="primary">Inspect</MDBBtn></td>
                </tr>
                <tr>
                  <th scope="row">SVC-02</th>
                  <td><strong>Payment Gateway Worker</strong></td>
                  <td>v3.1.0</td>
                  <td><MDBBadge color="success">Operational</MDBBadge></td>
                  <td>48ms</td>
                  <td><MDBBtn size="sm" color="primary">Inspect</MDBBtn></td>
                </tr>
                <tr>
                  <th scope="row">SVC-03</th>
                  <td><strong>Elasticsearch Indexer</strong></td>
                  <td>v7.17</td>
                  <td><MDBBadge color="warning">High Memory</MDBBadge></td>
                  <td>110ms</td>
                  <td><MDBBtn size="sm" color="warning">Restart</MDBBtn></td>
                </tr>
                <tr>
                  <th scope="row">SVC-04</th>
                  <td><strong>Kafka Event Streaming</strong></td>
                  <td>v3.5</td>
                  <td><MDBBadge color="danger">Rebalancing</MDBBadge></td>
                  <td>320ms</td>
                  <td><MDBBtn size="sm" color="danger">Logs</MDBBtn></td>
                </tr>
              </MDBTableBody>
            </MDBTable>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h4 className="text-xs font-bold text-slate-800">MDB Progress Bars</h4>
              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>CPU Allocation: 45%</span>
                  <span>45/100 Cores</span>
                </div>
                <MDBProgress height="10">
                  <MDBProgressBar width="45" valuemin={0} valuemax={100} bgColor="primary" />
                </MDBProgress>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>RAM Storage: 78% (High load)</span>
                  <span>24.8/32 GB</span>
                </div>
                <MDBProgress height="10">
                  <MDBProgressBar width="78" valuemin={0} valuemax={100} bgColor="warning" animated striped />
                </MDBProgress>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. ACCORDION & MODALS TAB */}
      {activeTab === 'accordion' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Accordion */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600" />
              MDB Collapse Accordion
            </h3>

            <MDBAccordion initialActive={1}>
              <MDBAccordionItem collapseId={1} headerTitle="What is MDBootstrap (MDB5)?">
                Material Design for Bootstrap (MDB) is an open-source UI kit based on Bootstrap 5 and Google Material Design, providing over 700+ responsive components.
              </MDBAccordionItem>
              <MDBAccordionItem collapseId={2} headerTitle="Does MDBootstrap support React 19?">
                Yes! `mdb-react-ui-kit` v10 offers full compatibility with modern React versions including full Vite HMR integration and JSX support.
              </MDBAccordionItem>
              <MDBAccordionItem collapseId={3} headerTitle="How do I style MDBootstrap components?">
                MDBootstrap components utilize semantic classes (`color="primary"`, `size="sm"`) and can be easily styled with custom CSS or combined with Tailwind CSS utilities.
              </MDBAccordionItem>
            </MDBAccordion>
          </div>

          {/* Modal Trigger & Demo */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              MDB Modal Dialog
            </h3>

            <p className="text-xs text-slate-500">
              Interactive modal overlays with customizable headers, body, action footers, and backdrop dismiss triggers.
            </p>

            <MDBBtn color="primary" onClick={toggleModal}>
              Launch MDB Modal Dialog
            </MDBBtn>

            {/* MDB Modal Component */}
            <MDBModal open={modalOpen} onClose={toggleModal} tabIndex="-1">
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle className="font-bold text-base">Confirm Deployment</MDBModalTitle>
                    <MDBBtn className="btn-close" color="none" onClick={toggleModal}></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody className="text-xs text-slate-600">
                    Are you sure you want to promote the <strong>v2.0-release</strong> candidate directly to the US-East production cluster? All pending migrations will execute automatically.
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="secondary" size="sm" onClick={toggleModal}>
                      Cancel
                    </MDBBtn>
                    <MDBBtn color="success" size="sm" onClick={toggleModal}>
                      Confirm & Deploy
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </div>
        </div>
      )}

      {/* 6. NAVIGATION & TABS TAB */}
      {activeTab === 'nav' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Navigation className="w-4 h-4 text-indigo-600" />
            MDB Breadcrumb, Pagination & Navigations
          </h3>

          <div>
            <div className="text-xs font-bold text-slate-700 mb-2">MDB Breadcrumb</div>
            <MDBBreadcrumb className="text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <MDBBreadcrumbItem>
                <a href="#home">Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#components">Components</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>
                MDBootstrap Showcase
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </div>

          <div>
            <div className="text-xs font-bold text-slate-700 mb-2">MDB Pagination Controls</div>
            <MDBPagination className="mb-0">
              <MDBPaginationItem disabled>
                <MDBPaginationLink href="#">Previous</MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem active>
                <MDBPaginationLink href="#">1</MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem>
                <MDBPaginationLink href="#">2</MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem>
                <MDBPaginationLink href="#">3</MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem>
                <MDBPaginationLink href="#">Next</MDBPaginationLink>
              </MDBPaginationItem>
            </MDBPagination>
          </div>
        </div>
      )}
    </div>
  );
}
