import React from 'react';
import { Card, Statistic, Progress, Row, Col, Space, Avatar, Tag, Button } from 'antd';
import {
  ArrowUpOutlined,
  UserOutlined,
  DollarCircleOutlined,
  ShoppingOutlined,
  ThunderboltOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import { useUsersQuery, useProductsQuery } from '../../../api/useApiData';

export default function AntdCardsDemo() {
  const { data: users = [] } = useUsersQuery();
  const { data: products = [] } = useProductsQuery();

  const totalInventoryValue = products.reduce((acc, p) => acc + p.price * (p.stock || 1), 0);
  const avgRating = products.length ? (products.reduce((acc, p) => acc + p.rating, 0) / products.length).toFixed(1) : 4.5;

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Ant Design (AntD) Stat Cards</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              antd Statistics & Cards
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Executive metric cards, KPI indicators, progress circles and user member previews using Ant Design.
          </p>
        </div>
      </div>

      {/* Primary KPI Row */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false} className="shadow-sm rounded-2xl border border-slate-200 bg-white">
            <Statistic
              title={<span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Active Customers</span>}
              value={users.length * 142}
              prefix={<UserOutlined className="text-indigo-500" />}
              valueStyle={{ color: '#1e293b', fontWeight: 800 }}
            />
            <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
              <ArrowUpOutlined /> +14.2% from last quarter
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false} className="shadow-sm rounded-2xl border border-slate-200 bg-white">
            <Statistic
              title={<span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Gross Inventory Value</span>}
              value={totalInventoryValue}
              precision={0}
              prefix={<DollarCircleOutlined className="text-emerald-500" />}
              suffix="USD"
              valueStyle={{ color: '#1e293b', fontWeight: 800 }}
            />
            <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
              <ArrowUpOutlined /> +22.8% YoY growth
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false} className="shadow-sm rounded-2xl border border-slate-200 bg-white">
            <Statistic
              title={<span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Catalog Products</span>}
              value={products.length}
              prefix={<ShoppingOutlined className="text-amber-500" />}
              valueStyle={{ color: '#1e293b', fontWeight: 800 }}
            />
            <div className="mt-3 text-xs text-slate-500">
              Avg Product Rating: <strong className="text-amber-600">{avgRating} / 5.0</strong>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false} className="shadow-sm rounded-2xl border border-slate-200 bg-white">
            <Statistic
              title={<span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Server SLA & Reliability</span>}
              value={99.98}
              precision={2}
              prefix={<SafetyCertificateOutlined className="text-blue-500" />}
              suffix="%"
              valueStyle={{ color: '#1e293b', fontWeight: 800 }}
            />
            <div className="mt-3 text-xs text-blue-600 font-medium">
              All 14 node clusters operational
            </div>
          </Card>
        </Col>
      </Row>

      {/* Team & Progress Deck */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card
            title={<span className="font-bold text-slate-800">Department Performance & Goals</span>}
            className="rounded-2xl border-slate-200 shadow-sm"
          >
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                  <span>API Response Rate (Latency SLA)</span>
                  <span className="font-bold">92%</span>
                </div>
                <Progress percent={92} strokeColor="#6366f1" showInfo={false} />
              </div>
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                  <span>Customer Support Resolution</span>
                  <span className="font-bold">78%</span>
                </div>
                <Progress percent={78} strokeColor="#10b981" showInfo={false} />
              </div>
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                  <span>Database Cache Hit Ratio</span>
                  <span className="font-bold">96%</span>
                </div>
                <Progress percent={96} strokeColor="#f59e0b" showInfo={false} />
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card
            title={<span className="font-bold text-slate-800">Top Active Contributors</span>}
            className="rounded-2xl border-slate-200 shadow-sm"
          >
            <div className="space-y-3">
              {users.slice(0, 4).map((u) => (
                <div key={u.id} className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition">
                  <Space>
                    <Avatar src={u.image} size={40} className="border border-slate-200" />
                    <div>
                      <div className="text-sm font-bold text-slate-800">{u.firstName} {u.lastName}</div>
                      <div className="text-xs text-slate-500">{u.company?.title || 'Engineer'} • {u.company?.name}</div>
                    </div>
                  </Space>
                  <Tag color="geekblue" className="rounded-full">Verified</Tag>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
