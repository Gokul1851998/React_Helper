import React, { useRef, useState, useMemo } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useHighVolumeQuery } from '../../../api/useApiData';
import { Zap, Activity, Filter, ArrowUpDown } from 'lucide-react';

export default function TanstackVirtualTableDemo() {
  const { data: records = [], isLoading } = useHighVolumeQuery(10000);
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [search, setSearch] = useState('');
  const parentRef = useRef(null);

  // Filter 10,000 rows efficiently
  const filteredData = useMemo(() => {
    return records.filter((r) => {
      const matchStatus = filterStatus === 'ALL' || r.status === filterStatus;
      const matchSearch =
        search === '' ||
        r.id.toLowerCase().includes(search.toLowerCase()) ||
        r.customer.toLowerCase().includes(search.toLowerCase()) ||
        r.category.toLowerCase().includes(search.toLowerCase());
      return matchStatus && matchSearch;
    });
  }, [records, filterStatus, search]);

  // TanStack Virtualizer instance
  const rowVirtualizer = useVirtualizer({
    count: filteredData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 52,
    overscan: 10,
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Pending':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Processing':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Cancelled':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">TanStack Virtual Table</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
              <Zap className="w-3 h-3" /> 10,000 Records
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
              @tanstack/react-virtual
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Ultra-fast DOM virtualization: Only <strong>{rowVirtualizer.getVirtualItems().length}</strong> rows currently mounted in DOM out of <strong>{filteredData.length.toLocaleString()}</strong> total records.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Search ID, client, category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 w-56"
          />

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          >
            <option value="ALL">All Statuses</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <button
            onClick={() => rowVirtualizer.scrollToIndex(5000, { align: 'center' })}
            className="px-3 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition"
          >
            Jump to #5,000
          </button>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium">Dataset Total</div>
          <div className="text-xl font-bold text-slate-900 mt-1">{records.length.toLocaleString()} items</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium">Filtered Results</div>
          <div className="text-xl font-bold text-indigo-600 mt-1">{filteredData.length.toLocaleString()} items</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium">Mounted in DOM</div>
          <div className="text-xl font-bold text-emerald-600 mt-1">{rowVirtualizer.getVirtualItems().length} DOM Nodes</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <div className="text-xs text-slate-500 font-medium">Scroll Virtual Window</div>
          <div className="text-xl font-bold text-amber-600 mt-1">{rowVirtualizer.getTotalSize().toLocaleString()}px</div>
        </div>
      </div>

      {/* Virtual Table Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Table Head (Fixed) */}
        <div className="grid grid-cols-12 gap-2 px-6 py-3.5 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider">
          <div className="col-span-2">Txn ID</div>
          <div className="col-span-3">Customer</div>
          <div className="col-span-2">Category</div>
          <div className="col-span-2 text-right">Amount / Fee</div>
          <div className="col-span-2 text-center">Status</div>
          <div className="col-span-1 text-right">Latency</div>
        </div>

        {/* Scrollable Virtual Body */}
        <div
          ref={parentRef}
          className="h-[520px] overflow-auto relative"
          style={{ contain: 'strict' }}
        >
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
            </div>
          ) : (
            <div
              style={{
                height: `${rowVirtualizer.getTotalSize()}px`,
                width: '100%',
                position: 'relative',
              }}
            >
              {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                const item = filteredData[virtualRow.index];
                if (!item) return null;

                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-12 gap-2 px-6 items-center text-sm border-b border-slate-100 hover:bg-slate-50 transition"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: `${virtualRow.size}px`,
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                  >
                    <div className="col-span-2 font-mono text-xs font-semibold text-slate-800">
                      {item.id}
                    </div>
                    <div className="col-span-3 truncate text-slate-700 text-xs font-medium">
                      {item.customer}
                    </div>
                    <div className="col-span-2 truncate text-slate-500 text-xs">
                      {item.category}
                    </div>
                    <div className="col-span-2 text-right">
                      <div className="font-semibold text-slate-900">${item.amount.toLocaleString()}</div>
                      <div className="text-[11px] text-slate-400">+${item.fee} fee</div>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusBadge(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="col-span-1 text-right font-mono text-xs text-slate-400">
                      {item.latencyMs}ms
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
