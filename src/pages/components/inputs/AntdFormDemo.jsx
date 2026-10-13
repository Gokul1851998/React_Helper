import React, { useState } from 'react';
import { Form, Input, Button, Select, Switch, Radio, Card, message, Space, Typography } from 'antd';
import { SendOutlined, RedoOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title, Text } = Typography;

export default function AntdFormDemo() {
  const [form] = Form.useForm();
  const [result, setResult] = useState(null);

  const onFinish = (values) => {
    message.success('Form validated and submitted successfully!');
    setResult(values);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Ant Design Form System</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              antd Form & Validation
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Enterprise Ant Design form with strict validator rules, asynchronous submission, and reset state.
          </p>
        </div>
      </div>

      <Card className="max-w-2xl mx-auto rounded-2xl border-slate-200 shadow-sm p-4">
        {result && (
          <div className="mb-6 p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono">
            <strong>Submitted Payload:</strong>
            <pre className="mt-1">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            clusterSize: 'medium',
            notifications: true,
            environment: 'staging',
          }}
        >
          <Form.Item
            name="projectName"
            label={<span className="font-semibold text-slate-700">Project / Application Name</span>}
            rules={[
              { required: true, message: 'Please enter a project name' },
              { min: 3, message: 'Name must have at least 3 characters' },
            ]}
          >
            <Input placeholder="e.g. quantum-gateway-api" className="rounded-xl py-2" />
          </Form.Item>

          <Form.Item
            name="repositoryUrl"
            label={<span className="font-semibold text-slate-700">Repository Git URL</span>}
            rules={[
              { required: true, message: 'Git URL is required' },
              { type: 'url', message: 'Enter a valid URL (https://...)' },
            ]}
          >
            <Input placeholder="https://github.com/organization/repo" className="rounded-xl py-2" />
          </Form.Item>

          <Form.Item
            name="environment"
            label={<span className="font-semibold text-slate-700">Target Environment</span>}
          >
            <Select className="rounded-xl">
              <Option value="development">Development (Local Dev)</Option>
              <Option value="staging">Staging (Integration QA)</Option>
              <Option value="production">Production (High Availability)</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="clusterSize"
            label={<span className="font-semibold text-slate-700">Compute Topology Size</span>}
          >
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="small">Micro (2 vCPU)</Radio.Button>
              <Radio.Button value="medium">Standard (8 vCPU)</Radio.Button>
              <Radio.Button value="large">Enterprise (32 vCPU)</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="notifications"
            label={<span className="font-semibold text-slate-700">Slack & PagerDuty Alerts</span>}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item className="mt-8 mb-0">
            <Space size="middle">
              <Button
                type="primary"
                htmlType="submit"
                icon={<SendOutlined />}
                size="large"
                className="bg-indigo-600 rounded-xl font-semibold"
              >
                Validate & Deploy
              </Button>
              <Button
                onClick={() => form.resetFields()}
                icon={<RedoOutlined />}
                size="large"
                className="rounded-xl font-semibold"
              >
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
