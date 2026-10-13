import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import {
  TrendingUp,
  BarChart3,
  PieChart as PieIcon,
  Activity,
  Layers,
  Sparkles,
  Calendar,
  DollarSign,
  Users,
  Compass
} from 'lucide-react';

const REVENUE_DATA = [
  { month: 'Jan', revenue: 42000, profit: 18000, expenses: 24000 },
  { month: 'Feb', revenue: 53000, profit: 24000, expenses: 29000 },
  { month: 'Mar', revenue: 61000, profit: 31000, expenses: 30000 },
  { month: 'Apr', revenue: 58000, profit: 28000, expenses: 30000 },
  { month: 'May', revenue: 75000, profit: 42000, expenses: 33000 },
  { month: 'Jun', revenue: 89000, profit: 53000, expenses: 36000 },
  { month: 'Jul', revenue: 94000, profit: 58000, expenses: 36000 },
];

const DEVICE_DATA = [
  { name: 'Desktop Web', value: 48, color: '#4f46e5' },
  { name: 'Mobile iOS', value: 28, color: '#06b6d4' },
  { name: 'Mobile Android', value: 16, color: '#10b981' },
  { name: 'Tablet / Other', value: 8, color: '#f59e0b' },
];

const PERFORMANCE_DATA = [
  { metric: 'Latency', score: 92, benchmark: 80 },
  { metric: 'Throughput', score: 85, benchmark: 75 },
  { metric: 'Uptime', score: 99, benchmark: 90 },
  { metric: 'Security', score: 95, benchmark: 85 },
  { metric: 'Efficiency', score: 88, benchmark: 70 },
  { metric: 'Scalability', score: 90, benchmark: 82 },
];

const TRAFFIC_COMPARISON_DATA = [
  { day: 'Mon', direct: 3200, organic: 4500, social: 1800, conversion: 3.2 },
  { day: 'Tue', direct: 3800, organic: 5200, social: 2200, conversion: 3.8 },
  { day: 'Wed', direct: 4200, organic: 5900, social: 2500, conversion: 4.1 },
  { day: 'Thu', direct: 4100, organic: 5600, social: 2400, conversion: 3.9 },
  { day: 'Fri', direct: 5100, organic: 6800, social: 3100, conversion: 4.6 },
  { day: 'Sat', direct: 4400, organic: 4900, social: 2900, conversion: 3.5 },
  { day: 'Sun', direct: 3900, organic: 4200, social: 2100, conversion: 3.1 },
];

export default function AllChartsDemo() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Interactive Data Charts Suite
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono">
              Recharts 3.10
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Explore 6 different chart types: Smooth Area Gradients, Grouped Bars, Multi-Line Trends, Donut Pies, Composed Mixed Charts, and Radar Spider Charts.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
            Real-time SVG Rendering • 60fps
          </span>
        </div>
      </div>

      {/* Grid of Different Chart Types */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1. Smooth Gradient Area Chart */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  1. Smooth Gradient Area Chart
                </h3>
                <span className="text-[11px] text-slate-400">Monthly Revenue vs Profit Growth</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-lg">
              Area Chart
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REVENUE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '11px' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRev)" />
                <Area type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2.5} fillOpacity={1} fill="url(#colorProfit)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 2. Grouped Multi-Bar Chart */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  2. Grouped Bar Chart
                </h3>
                <span className="text-[11px] text-slate-400">Weekly Traffic Breakdown by Channel</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg">
              Bar Chart
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TRAFFIC_COMPARISON_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '11px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '6px' }} />
                <Bar dataKey="direct" fill="#4f46e5" radius={[6, 6, 0, 0]} name="Direct Traffic" />
                <Bar dataKey="organic" fill="#06b6d4" radius={[6, 6, 0, 0]} name="Organic Search" />
                <Bar dataKey="social" fill="#ec4899" radius={[6, 6, 0, 0]} name="Social Media" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 3. Donut & Pie Chart */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                <PieIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  3. Donut / Pie Chart
                </h3>
                <span className="text-[11px] text-slate-400">Audience Device Distribution</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-lg">
              Donut Chart
            </span>
          </div>

          <div className="h-64 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={DEVICE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={95}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {DEVICE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '11px' }}
                  formatter={(value) => [`${value}%`, 'Traffic Share']}
                />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 4. Radar Spider Chart */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  4. Radar / Spider Chart
                </h3>
                <span className="text-[11px] text-slate-400">Multi-Dimensional SLA Performance</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-lg">
              Radar Chart
            </span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={PERFORMANCE_DATA} cx="50%" cy="50%" outerRadius={85}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="metric" stroke="#64748b" fontSize={11} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#cbd5e1" fontSize={10} />
                <Radar name="Current Score" dataKey="score" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.4} />
                <Radar name="SLA Benchmark" dataKey="benchmark" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.2} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '11px' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 5. Composed Multi-Type Chart (Area + Bar + Line) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  5. Composed Chart (Bar + Line + Area Combo)
                </h3>
                <span className="text-[11px] text-slate-400">Total Visits, Organic Traffic & Conversion Rate Index</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg">
              Composed Chart
            </span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={TRAFFIC_COMPARISON_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} />
                <YAxis yAxisId="left" stroke="#94a3b8" fontSize={11} />
                <YAxis yAxisId="right" orientation="right" stroke="#10b981" fontSize={11} unit="%" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '11px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '6px' }} />
                <Area yAxisId="left" type="monotone" dataKey="social" fill="#fbcfe8" stroke="#f472b6" name="Social Reach" />
                <Bar yAxisId="left" dataKey="organic" barSize={24} fill="#4f46e5" radius={[6, 6, 0, 0]} name="Organic Leads" />
                <Line yAxisId="right" type="monotone" dataKey="conversion" stroke="#10b981" strokeWidth={3} name="Conversion %" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
