import React, { useState } from 'react';
import { Table, Tag, Avatar, Space, Input, Card, Typography, Tooltip, Badge } from 'antd';
import { SearchOutlined, UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { useUsersQuery } from '../../../api/useApiData';

const { Title, Text } = Typography;

export default function AntdTableDemo() {
  const { data: users = [], isLoading } = useUsersQuery();
  const [searchText, setSearchText] = useState('');

  const columns = [
    {
      title: 'User Profile',
      dataIndex: 'firstName',
      key: 'name',
      render: (_, record) => (
        <Space>
          <Avatar src={record.image} icon={<UserOutlined />} size={44} className="border border-slate-200" />
          <div>
            <div className="font-semibold text-slate-800">
              {record.firstName} {record.lastName}
            </div>
            <div className="text-xs text-slate-400">@{record.username}</div>
          </div>
        </Space>
      ),
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (email) => (
        <Space>
          <MailOutlined className="text-slate-400" />
          <Text copyable={{ tooltips: ['Copy email', 'Copied!'] }}>{email}</Text>
        </Space>
      ),
    },
    {
      title: 'Role / Company',
      dataIndex: ['company', 'title'],
      key: 'role',
      render: (role, record) => (
        <div>
          <div className="text-xs font-semibold text-indigo-600">{role || 'Consultant'}</div>
          <div className="text-xs text-slate-500">{record.company?.name}</div>
        </div>
      ),
      filters: [
        { text: 'Developer / Engineer', value: 'developer' },
        { text: 'Manager / Lead', value: 'manager' },
        { text: 'Specialist / Officer', value: 'specialist' },
      ],
      onFilter: (value, record) => {
        const title = (record.company?.title || '').toLowerCase();
        if (value === 'developer') return title.includes('developer') || title.includes('engineer');
        if (value === 'manager') return title.includes('manager') || title.includes('lead');
        return true;
      },
    },
    {
      title: 'Department',
      dataIndex: ['company', 'department'],
      key: 'department',
      render: (dept) => (
        <Tag color="cyan" className="rounded-full px-3 py-0.5 font-medium">
          {dept || 'General'}
        </Tag>
      ),
    },
    {
      title: 'Blood Group',
      dataIndex: 'bloodGroup',
      key: 'bloodGroup',
      width: 120,
      render: (bg) => (
        <Badge
          count={bg}
          style={{ backgroundColor: '#ef4444', color: '#fff', fontWeight: 600 }}
        />
      ),
    },
    {
      title: 'City / State',
      dataIndex: ['address', 'city'],
      key: 'city',
      render: (city, record) => (
        <span className="text-xs text-slate-600">
          {city}, {record.address?.state}
        </span>
      ),
    },
  ];

  const filteredData = users.filter((u) => {
    const full = `${u.firstName} ${u.lastName} ${u.email} ${u.company?.name || ''}`.toLowerCase();
    return full.includes(searchText.toLowerCase());
  });

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Ant Design (AntD) Table</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              antd v5
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Enterprise Ant Design Table connected to real DummyJSON Users API with column sorting, tagging, and filters.
          </p>
        </div>

        <Input
          prefix={<SearchOutlined className="text-slate-400" />}
          placeholder="Search by name, company, email..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          allowClear
          className="max-w-xs rounded-xl"
        />
      </div>

      <Card className="rounded-2xl border-slate-200 shadow-sm overflow-hidden" bodyStyle={{ padding: 0 }}>
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          loading={isLoading}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '20', '50'],
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} users`,
          }}
          scroll={{ x: 800 }}
        />
      </Card>
    </div>
  );
}
