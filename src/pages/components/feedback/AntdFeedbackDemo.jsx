import React from 'react';
import { Button, notification, message, Popconfirm, Space, Card, Alert, Typography } from 'antd';
import {
  SmileOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  BellOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

export default function AntdFeedbackDemo() {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: `Notification (${placement})`,
      description: 'System deployment completed in 42.1 seconds without incident.',
      placement,
      icon: <SmileOutlined style={{ color: '#10b981' }} />,
    });
  };

  const showToast = (type) => {
    if (type === 'success') message.success('Action successfully executed in database!');
    if (type === 'warning') message.warning('Approaching monthly rate limit threshold (85%).');
    if (type === 'error') message.error('Authentication token signature verification failed.');
  };

  return (
    <div className="space-y-6">
      {contextHolder}

      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Ant Design Feedback System</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              antd Notifications
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Global notifications with placement control, instant toast messages, and Popconfirm safety guards.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Toast Messages Card */}
        <Card title="Instant Message Toasts" className="rounded-2xl border-slate-200 shadow-sm">
          <p className="text-xs text-slate-500 mb-4">
            Lightweight, non-intrusive feedback displayed top-center.
          </p>
          <Space wrap>
            <Button type="primary" onClick={() => showToast('success')} className="bg-emerald-600 rounded-xl">
              Success Message
            </Button>
            <Button onClick={() => showToast('warning')} className="rounded-xl">
              Warning Message
            </Button>
            <Button danger onClick={() => showToast('error')} className="rounded-xl">
              Error Message
            </Button>
          </Space>
        </Card>

        {/* Global Notifications Card */}
        <Card title="Corner Notifications" className="rounded-2xl border-slate-200 shadow-sm">
          <p className="text-xs text-slate-500 mb-4">
            Rich notification banners with customizable corner placements.
          </p>
          <Space wrap>
            <Button onClick={() => openNotification('topRight')} icon={<BellOutlined />} className="rounded-xl">
              Top Right
            </Button>
            <Button onClick={() => openNotification('bottomRight')} icon={<BellOutlined />} className="rounded-xl">
              Bottom Right
            </Button>
            <Button onClick={() => openNotification('topLeft')} icon={<BellOutlined />} className="rounded-xl">
              Top Left
            </Button>
          </Space>
        </Card>

        {/* Popconfirm & In-line Alerts */}
        <Card title="Inline Banners & Popconfirm" className="rounded-2xl border-slate-200 shadow-sm md:col-span-2">
          <div className="space-y-4">
            <Alert
              message="Cluster Autoscaling Active"
              description="Kubernetes worker nodes are dynamically provisioning based on current request traffic."
              type="info"
              showIcon
              closable
              className="rounded-xl"
            />

            <div className="pt-2 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">Safety Guard Confirmation (Popconfirm):</span>
              <Popconfirm
                title="Purge staging build artifacts?"
                description="Are you confident you want to delete 2.8 GB of build caches?"
                onConfirm={() => message.success('Artifacts purged!')}
                okText="Yes, Purge"
                cancelText="Cancel"
                okButtonProps={{ danger: true }}
              >
                <Button danger icon={<DeleteOutlined />} className="rounded-xl">
                  Purge Staging Artifacts
                </Button>
              </Popconfirm>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
