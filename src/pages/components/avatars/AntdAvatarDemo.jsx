import React from 'react';
import { Avatar, Badge, Card, Space, Typography, Tooltip } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { useUsersQuery } from '../../../api/useApiData';

export default function AntdAvatarDemo() {
  const { data: users = [] } = useUsersQuery();

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Ant Design Avatar & Status Badges</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              antd Avatar & Badge
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Ant Design Avatar groups with interactive tooltips, count badges, and system status dots.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <Card title="Ant Design Avatar Group with Popovers" className="rounded-2xl border-slate-200 shadow-sm">
          <Avatar.Group maxCount={5} size="large" maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
            {users.slice(0, 10).map((u) => (
              <Tooltip key={u.id} title={`${u.firstName} ${u.lastName} (${u.company?.title})`}>
                <Avatar src={u.image} />
              </Tooltip>
            ))}
          </Avatar.Group>
        </Card>

        <Card title="Badge Indicators & Counters" className="rounded-2xl border-slate-200 shadow-sm">
          <Space size="large" wrap>
            <Badge count={99} overflowCount={10}>
              <Avatar shape="square" size="large" icon={<UserOutlined />} />
            </Badge>

            <Badge dot color="green">
              <Avatar shape="square" size="large" icon={<UserOutlined />} />
            </Badge>

            <Badge status="processing" text="Ingesting Telemetry" />
            <Badge status="success" text="Cluster Healthy" />
            <Badge status="error" text="Database Warning" />
          </Space>
        </Card>
      </div>
    </div>
  );
}
