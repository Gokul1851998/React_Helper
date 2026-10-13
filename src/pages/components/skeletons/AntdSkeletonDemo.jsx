import React, { useState } from 'react';
import { Skeleton, Card, Switch, Avatar, Button, Space, Typography, Row, Col } from 'antd';
import { UserOutlined, ReloadOutlined } from '@ant-design/icons';
import { useUsersQuery } from '../../../api/useApiData';

const { Meta } = Card;

export default function AntdSkeletonDemo() {
  const { data: users = [] } = useUsersQuery();
  const [loading, setLoading] = useState(false);

  const toggleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Ant Design Skeleton & Spin</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              antd Skeleton
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Enterprise Ant Design skeleton placeholders for cards, avatars, and asynchronous user profiles.
          </p>
        </div>

        <Button
          type="primary"
          icon={<ReloadOutlined />}
          onClick={toggleLoading}
          className="bg-indigo-600 rounded-xl font-semibold"
        >
          Simulate 2s API Load
        </Button>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        <Row gutter={[16, 16]}>
          {(loading ? Array.from(new Array(6)) : users.slice(0, 6)).map((user, idx) => (
            <Col xs={24} sm={12} lg={8} key={idx}>
              <Card
                className="rounded-2xl border-slate-200 shadow-sm"
                actions={[
                  <Button type="link" size="small">Profile</Button>,
                  <Button type="link" size="small">Message</Button>,
                ]}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta
                    avatar={<Avatar src={user?.image} icon={<UserOutlined />} size={48} />}
                    title={`${user?.firstName} ${user?.lastName}`}
                    description={
                      <div>
                        <div className="text-xs text-indigo-600 font-semibold">{user?.company?.title}</div>
                        <div className="text-xs text-slate-400 mt-1">{user?.email}</div>
                      </div>
                    }
                  />
                </Skeleton>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
