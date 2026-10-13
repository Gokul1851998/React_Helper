import React, { useState } from 'react';
import { Tabs, Steps, Button, Card, Typography, Space } from 'antd';
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

export default function AntdTabsDemo() {
  const [currentStep, setCurrentStep] = useState(1);

  const stepItems = [
    { title: 'Identity Verification', status: 'finish', icon: <UserOutlined /> },
    { title: 'Billing & Plan', status: currentStep === 1 ? 'process' : currentStep > 1 ? 'finish' : 'wait', icon: <CreditCardOutlined /> },
    { title: 'Deployment Provision', status: currentStep === 2 ? 'process' : currentStep > 2 ? 'finish' : 'wait', icon: <LoadingOutlined /> },
    { title: 'Live Ready', status: currentStep === 3 ? 'finish' : 'wait', icon: <SmileOutlined /> },
  ];

  const tabItems = [
    {
      key: '1',
      label: 'Cluster Overview',
      children: (
        <div className="p-4 bg-slate-50 rounded-xl space-y-2 text-sm text-slate-600">
          <p className="font-bold text-slate-800">Primary Global Topology</p>
          <p>3 Multi-AZ instances distributed across Frankfurt, Virginia, and Singapore.</p>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Security & Certificates',
      children: (
        <div className="p-4 bg-slate-50 rounded-xl space-y-2 text-sm text-slate-600">
          <p className="font-bold text-slate-800">Let's Encrypt Wildcard SSL</p>
          <p>Auto-renewing certificates valid through November 2028.</p>
        </div>
      ),
    },
    {
      key: '3',
      label: 'Billing History',
      children: (
        <div className="p-4 bg-slate-50 rounded-xl space-y-2 text-sm text-slate-600">
          <p className="font-bold text-slate-800">Corporate Enterprise Tier</p>
          <p>$4,200.00 / month billed to Visa ending in 4242.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Ant Design Steps & Tabs</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              antd Navigation
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Interactive multi-step workflow wizard with Ant Design Steps alongside segmented Card Tabs.
          </p>
        </div>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {/* AntD Steps Component */}
        <Card className="rounded-2xl border-slate-200 shadow-sm p-4">
          <div className="mb-4 text-xs font-bold uppercase text-slate-400">Step Process Tracker</div>
          <Steps current={currentStep} items={stepItems} />

          <div className="mt-8 flex justify-between">
            <Button
              disabled={currentStep === 0}
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
              className="rounded-xl"
            >
              Previous Step
            </Button>
            <Button
              type="primary"
              disabled={currentStep === 3}
              onClick={() => setCurrentStep((prev) => Math.min(3, prev + 1))}
              className="bg-indigo-600 rounded-xl font-semibold"
            >
              Next Step
            </Button>
          </div>
        </Card>

        {/* AntD Tabs Component */}
        <Card className="rounded-2xl border-slate-200 shadow-sm p-2">
          <Tabs defaultActiveKey="1" items={tabItems} type="card" />
        </Card>
      </div>
    </div>
  );
}
