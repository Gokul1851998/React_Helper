import React from 'react';
import { Collapse, Card, Tag, Avatar, Typography } from 'antd';
import { UserOutlined, MailOutlined, BankOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useUsersQuery } from '../../../api/useApiData';

const { Title, Text } = Typography;

export default function AntdAccordionDemo() {
  const { data: users = [], isLoading } = useUsersQuery();

  const items = users.slice(0, 5).map((user, idx) => ({
    key: String(user.id),
    label: (
      <div className="flex items-center justify-between w-full pr-4">
        <div className="flex items-center gap-3">
          <Avatar src={user.image} icon={<UserOutlined />} size={32} />
          <span className="font-semibold text-slate-800">
            {user.firstName} {user.lastName}
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">@{user.username}</span>
        </div>
        <Tag color="blue">{user.company?.department || 'Engineering'}</Tag>
      </div>
    ),
    children: (
      <div className="space-y-3 text-slate-600 text-xs py-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl">
          <div className="flex items-center gap-2">
            <MailOutlined className="text-slate-400" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <BankOutlined className="text-slate-400" />
            <span>{user.company?.name} • {user.company?.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <EnvironmentOutlined className="text-slate-400" />
            <span>{user.address?.address}, {user.address?.city}</span>
          </div>
          <div>
            <strong>Crypto Wallet:</strong> {user.crypto?.coin || 'Bitcoin'} ({user.crypto?.network || 'Mainnet'})
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Ant Design Collapse (Accordion)</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              antd Collapse
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Collapsible accordion panel group with user team dossiers, avatars, tags, and company metadata.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <Card title="Ant Design Accordion (Single Active Mode)" className="rounded-2xl border-slate-200 shadow-sm">
          <Collapse
            accordion
            defaultActiveKey={['1']}
            items={items}
            bordered={false}
            className="bg-transparent"
          />
        </Card>
      </div>
    </div>
  );
}
