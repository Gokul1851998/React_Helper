import React, { useState } from 'react';
import {
  Timeline,
  QRCode,
  Segmented,
  Watermark,
  FloatButton,
  Button,
  Tag,
  Space,
  Card,
  Input,
  Switch
} from 'antd';
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  CustomerServiceOutlined,
  CommentOutlined,
  QrcodeOutlined
} from '@ant-design/icons';
import {
  Sparkles,
  Layers,
  QrCode,
  Sliders,
  History,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export default function AdvancedAntdDemo() {
  const [qrText, setQrText] = useState('https://reacthelper.enterprise.io/v2');
  const [segmentedVal, setSegmentedVal] = useState('Monthly');
  const [watermarkEnabled, setWatermarkEnabled] = useState(true);

  return (
    <Watermark content={watermarkEnabled ? ['ReactHelper Lab', 'CONFIDENTIAL'] : ''}>
      <div className="space-y-6">
        {/* Header bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                Advanced UI Elements & Widgets
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono">
                Ant Design v5 Suite
              </span>
            </div>
            <p className="text-slate-500 text-xs mt-1">
              Interactive modern components: Audit Timeline, Live QR Code Generator, Segmented Slider, Floating Action Buttons, and Security Watermark.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Watermark:</span>
            <Switch
              checked={watermarkEnabled}
              onChange={setWatermarkEnabled}
              checkedChildren="On"
              unCheckedChildren="Off"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1. Interactive Timeline */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <History className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    1. Deployment & Release Timeline
                  </h3>
                  <span className="text-[11px] text-slate-400">Step-by-step audit trail</span>
                </div>
              </div>
              <Tag color="processing">Live Tracking</Tag>
            </div>

            <div className="pt-2">
              <Timeline
                mode="left"
                items={[
                  {
                    color: 'green',
                    children: (
                      <div>
                        <div className="font-bold text-xs text-slate-800">Production Build Passed</div>
                        <div className="text-[11px] text-slate-500">18,604 modules transformed in 3.8s</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">2026-10-12 17:15</div>
                      </div>
                    ),
                  },
                  {
                    color: 'green',
                    children: (
                      <div>
                        <div className="font-bold text-xs text-slate-800">Docker Image Published</div>
                        <div className="text-[11px] text-slate-500">Digest sha256:7f3b49 signed via Cosign</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">2026-10-12 17:18</div>
                      </div>
                    ),
                  },
                  {
                    dot: <SyncOutlined spin style={{ fontSize: '14px', color: '#1677ff' }} />,
                    color: 'blue',
                    children: (
                      <div>
                        <div className="font-bold text-xs text-blue-600">Canary Traffic Routing (25%)</div>
                        <div className="text-[11px] text-slate-500">Zero HTTP 500 errors recorded on US-East</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">In Progress</div>
                      </div>
                    ),
                  },
                  {
                    color: 'gray',
                    children: (
                      <div>
                        <div className="font-bold text-xs text-slate-400">Full Global Cutover</div>
                        <div className="text-[11px] text-slate-400">Pending automated health check clearance</div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>

          {/* 2. Dynamic QR Code Generator */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <QrCode className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    2. Live QR Code Generator
                  </h3>
                  <span className="text-[11px] text-slate-400">Instant scan to connect / payload encoding</span>
                </div>
              </div>
              <Tag color="purple">QRCode</Tag>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center py-2">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
                <QRCode
                  value={qrText || 'https://antigravity.ai'}
                  color="#1e1b4b"
                  icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                  size={150}
                />
              </div>

              <div className="space-y-3 flex-1 w-full">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Payload Content / URL</label>
                  <Input
                    value={qrText}
                    onChange={(e) => setQrText(e.target.value)}
                    placeholder="Enter URL to generate QR code..."
                    className="rounded-xl text-xs py-2"
                  />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <Button size="small" onClick={() => setQrText('https://vite.dev')}>Vite Docs</Button>
                  <Button size="small" onClick={() => setQrText('WIFI:S:Enterprise_5G;T:WPA;P:SecretPass;;')}>WiFi Config</Button>
                  <Button size="small" onClick={() => setQrText('tel:+18005550199')}>Support Phone</Button>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Segmented Control */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    3. Segmented Control Slider
                  </h3>
                  <span className="text-[11px] text-slate-400">Smooth animated pill selector</span>
                </div>
              </div>
              <Tag color="green">{segmentedVal}</Tag>
            </div>

            <p className="text-xs text-slate-500">
              Modern linear alternative to radio buttons and tabs with sliding indicator animations.
            </p>

            <div className="space-y-3">
              <div>
                <div className="text-xs font-bold text-slate-700 mb-1.5">Billing Cadence:</div>
                <Segmented
                  options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Annual (Save 20%)']}
                  value={segmentedVal}
                  onChange={setSegmentedVal}
                  block
                  className="bg-slate-100 p-1 rounded-xl text-xs"
                />
              </div>

              <div>
                <div className="text-xs font-bold text-slate-700 mb-1.5">Layout Mode:</div>
                <Segmented
                  options={[
                    { label: 'Grid View', value: 'grid' },
                    { label: 'Table View', value: 'table' },
                    { label: 'Kanban Board', value: 'kanban' },
                  ]}
                  defaultValue="kanban"
                  className="bg-slate-100 p-1 rounded-xl text-xs"
                />
              </div>
            </div>
          </div>

          {/* 4. Floating Action Trigger */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    4. Floating Action Group (FloatButton)
                  </h3>
                  <span className="text-[11px] text-slate-400">Bottom-corner speed dial triggers</span>
                </div>
              </div>
              <Tag color="gold">FloatButton</Tag>
            </div>

            <p className="text-xs text-slate-500">
              Float buttons float above screen content for primary global actions (Customer Support, Live Chat, Back to top).
            </p>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-around">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-indigo-600/30">
                  <CustomerServiceOutlined style={{ fontSize: '20px' }} />
                </div>
                <span className="text-[11px] font-bold text-slate-700 block mt-2">Support Dial</span>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/30">
                  <CommentOutlined style={{ fontSize: '20px' }} />
                </div>
                <span className="text-[11px] font-bold text-slate-700 block mt-2">Live Chat</span>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center mx-auto shadow-lg">
                  <QrcodeOutlined style={{ fontSize: '20px' }} />
                </div>
                <span className="text-[11px] font-bold text-slate-700 block mt-2">Scan QR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Watermark>
  );
}
