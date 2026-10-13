import React, { useState } from 'react';
import { Button, Space, Dropdown, Card, Typography, Divider } from 'antd';
import {
  DownloadOutlined,
  PoweroffOutlined,
  SearchOutlined,
  SendOutlined,
  EllipsisOutlined,
  CloudDownloadOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

export default function AntdButtonDemo() {
  const [loadings, setLoadings] = useState([]);

  const enterLoading = (index) => {
    setLoadings((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
    setTimeout(() => {
      setLoadings((prev) => {
        const next = [...prev];
        next[index] = false;
        return next;
      });
    }, 2000);
  };

  const menuItems = [
    { key: '1', label: 'Export as CSV Spreadsheet' },
    { key: '2', label: 'Export as JSON Payload' },
    { key: '3', label: 'Export as Encrypted Backup' },
  ];

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Ant Design Buttons</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              antd Button System
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Enterprise Ant Design button types: Primary, Dashed, Ghost, Danger, Loading triggers and split dropdown buttons.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <Card title="AntD Button Types & Hierarchy" className="rounded-2xl border-slate-200 shadow-sm">
          <Space wrap size="middle">
            <Button type="primary" className="bg-indigo-600 rounded-xl">Primary</Button>
            <Button className="rounded-xl">Default</Button>
            <Button type="dashed" className="rounded-xl">Dashed</Button>
            <Button type="text" className="rounded-xl">Text Button</Button>
            <Button type="link">Link Button</Button>
            <Button type="primary" danger className="rounded-xl">Primary Danger</Button>
            <Button danger className="rounded-xl">Danger Default</Button>
          </Space>
        </Card>

        <Card title="Icon & Shape Variants" className="rounded-2xl border-slate-200 shadow-sm">
          <Space wrap size="middle">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} className="bg-indigo-600" />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} className="bg-indigo-600">
              Download Artifact
            </Button>
            <Button type="primary" icon={<DownloadOutlined />} className="bg-indigo-600 rounded-xl">
              Standard Icon
            </Button>
            <Button shape="round" icon={<SendOutlined />}>
              Dispatch
            </Button>
          </Space>
        </Card>

        <Card title="Async Loading & Split Action Dropdowns" className="rounded-2xl border-slate-200 shadow-sm">
          <Space wrap size="middle">
            <Button
              type="primary"
              loading={loadings[0]}
              onClick={() => enterLoading(0)}
              icon={<PoweroffOutlined />}
              className="bg-indigo-600 rounded-xl"
            >
              Reboot Microservice
            </Button>

            <Button
              loading={loadings[1]}
              onClick={() => enterLoading(1)}
              className="rounded-xl"
            >
              Sync DB Replica
            </Button>

            {/* AntD Split Dropdown Button */}
            <Dropdown.Button
              menu={{ items: menuItems }}
              icon={<EllipsisOutlined />}
              className="rounded-xl"
            >
              <CloudDownloadOutlined /> Export Dataset
            </Dropdown.Button>
          </Space>
        </Card>
      </div>
    </div>
  );
}
