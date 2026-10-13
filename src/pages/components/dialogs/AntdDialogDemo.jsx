import React, { useState } from 'react';
import { Modal, Drawer, Button, Space, Typography, Tag, Divider, message } from 'antd';
import {
  ExclamationCircleOutlined,
  MenuUnfoldOutlined,
  CheckCircleOutlined,
  ThunderboltOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

export default function AntdDialogDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerPlacement, setDrawerPlacement] = useState('right');

  const showConfirm = () => {
    Modal.confirm({
      title: 'Do you want to clear system telemetry cache?',
      icon: <ExclamationCircleOutlined style={{ color: '#ef4444' }} />,
      content: 'This will purge 4.2 GB of temporary traces across all active server instances.',
      okText: 'Yes, Purge Cache',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        message.success('System cache purged successfully!');
      },
    });
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Ant Design Modal & Drawer</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              antd Overlays
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Standard AntD Modals, programmatically triggered confirmation dialogs, and slide-in side Drawers.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center max-w-xl mx-auto py-16">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
          <AppstoreOutlined style={{ fontSize: 32 }} />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Ant Design Dialog & Drawer Suite</h2>
        <p className="text-slate-500 text-sm max-w-md mt-2">
          Test interactive modal overlays and dynamic slide-in drawers with flexible placements.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            type="primary"
            size="large"
            onClick={() => setIsModalOpen(true)}
            className="rounded-xl font-semibold bg-indigo-600"
          >
            Open Standard Modal
          </Button>

          <Button
            danger
            size="large"
            onClick={showConfirm}
            className="rounded-xl font-semibold"
          >
            Trigger Confirm Popup
          </Button>

          <Button
            size="large"
            onClick={() => {
              setDrawerPlacement('right');
              setDrawerOpen(true);
            }}
            icon={<MenuUnfoldOutlined />}
            className="rounded-xl font-semibold"
          >
            Open Side Drawer
          </Button>
        </div>

        {/* AntD Modal */}
        <Modal
          title={
            <div className="flex items-center gap-2 text-slate-800 font-bold">
              <ThunderboltOutlined style={{ color: '#6366f1' }} /> Workspace Configuration
            </div>
          }
          open={isModalOpen}
          onOk={() => {
            message.success('Workspace updated!');
            setIsModalOpen(false);
          }}
          onCancel={() => setIsModalOpen(false)}
          okButtonProps={{ className: 'bg-indigo-600 font-semibold' }}
          className="rounded-2xl"
        >
          <div className="space-y-3 py-3 text-slate-600 text-sm">
            <p>Modify workspace telemetry quotas and automatic horizontal pod autoscaling threshold.</p>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="font-semibold text-slate-800">Autoscaling Policy</div>
              <div className="text-xs text-slate-500 mt-1">CPU Target: 75% • Memory Limit: 4096MB</div>
            </div>
            <div className="flex gap-2">
              <Tag color="green">High Availability</Tag>
              <Tag color="blue">Multi-Region</Tag>
            </div>
          </div>
        </Modal>

        {/* AntD Drawer */}
        <Drawer
          title="Component Inspection & Properties"
          placement={drawerPlacement}
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          width={400}
        >
          <div className="space-y-4 text-slate-700 text-sm">
            <p className="font-semibold text-slate-900">Drawer Content Panel</p>
            <Paragraph>
              Ant Design Drawers are perfect for detail inspection views, configuration sidebars, and slide-over navigation.
            </Paragraph>
            <Divider />
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase text-slate-400">Metadata</div>
              <div className="p-3 bg-slate-50 rounded-xl space-y-1 text-xs">
                <div><strong>Placement:</strong> Right</div>
                <div><strong>Z-Index:</strong> 1000</div>
                <div><strong>Animation:</strong> Slide in right</div>
              </div>
            </div>
            <Button block type="primary" className="bg-indigo-600 rounded-xl mt-4" onClick={() => setDrawerOpen(false)}>
              Close Drawer
            </Button>
          </div>
        </Drawer>
      </div>
    </div>
  );
}
