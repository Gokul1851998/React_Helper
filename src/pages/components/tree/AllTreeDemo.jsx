import React, { useState, useMemo } from 'react';
import { Tree, Input, Button, Tag, Badge, Space } from 'antd';
import {
  FolderTree,
  Folder,
  FolderOpen,
  FileCode,
  FileText,
  Search,
  CheckSquare,
  Move,
  Sparkles,
  Plus,
  Trash2,
  CheckCircle,
  File
} from 'lucide-react';

const { DirectoryTree } = Tree;

// Directory Tree Data
const DIRECTORY_TREE_DATA = [
  {
    title: 'src',
    key: 'src',
    children: [
      {
        title: 'components',
        key: 'components',
        children: [
          { title: 'Header.jsx', key: 'Header.jsx', isLeaf: true },
          { title: 'Sidebar.jsx', key: 'Sidebar.jsx', isLeaf: true },
          { title: 'Navbar.jsx', key: 'Navbar.jsx', isLeaf: true },
        ],
      },
      {
        title: 'pages',
        key: 'pages',
        children: [
          { title: 'Home.jsx', key: 'Home.jsx', isLeaf: true },
          { title: 'Login.jsx', key: 'Login.jsx', isLeaf: true },
        ],
      },
      {
        title: 'data',
        key: 'data',
        children: [
          { title: 'menuItems.jsx', key: 'menuItems.jsx', isLeaf: true },
        ],
      },
      { title: 'App.jsx', key: 'App.jsx', isLeaf: true },
      { title: 'index.css', key: 'index.css', isLeaf: true },
      { title: 'main.jsx', key: 'main.jsx', isLeaf: true },
    ],
  },
  {
    title: 'public',
    key: 'public',
    children: [
      { title: 'vite.svg', key: 'vite.svg', isLeaf: true },
      { title: 'robots.txt', key: 'robots.txt', isLeaf: true },
    ],
  },
  { title: 'package.json', key: 'package.json', isLeaf: true },
  { title: 'vite.config.js', key: 'vite.config.js', isLeaf: true },
];

// Checkable Tree Data
const PERMISSIONS_TREE_DATA = [
  {
    title: 'Admin Access & Settings',
    key: 'admin-root',
    children: [
      {
        title: 'User Management',
        key: 'user-mgmt',
        children: [
          { title: 'Create Users', key: 'user-create' },
          { title: 'Delete Users', key: 'user-delete' },
          { title: 'Assign Security Roles', key: 'user-roles' },
        ],
      },
      {
        title: 'Billing & Subscriptions',
        key: 'billing',
        children: [
          { title: 'View Invoices', key: 'billing-view' },
          { title: 'Update Payment Methods', key: 'billing-update' },
        ],
      },
    ],
  },
  {
    title: 'Engineering Deployment Suite',
    key: 'eng-root',
    children: [
      {
        title: 'Production Deployments',
        key: 'prod-deploy',
        children: [
          { title: 'Trigger Canary Release', key: 'deploy-canary' },
          { title: 'Rollback Release', key: 'deploy-rollback' },
        ],
      },
      {
        title: 'Database Migrations',
        key: 'db-migrations',
        children: [
          { title: 'Apply Schema Migrations', key: 'db-apply' },
        ],
      },
    ],
  },
];

export default function AllTreeDemo() {
  // Checkable tree state
  const [checkedKeys, setCheckedKeys] = useState(['user-create', 'billing-view', 'deploy-canary']);

  // Searchable tree state
  const [searchValue, setSearchValue] = useState('');
  const [expandedKeys, setExpandedKeys] = useState(['src', 'components']);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  // Draggable tree data state
  const [draggableData, setDraggableData] = useState(DIRECTORY_TREE_DATA);

  // Search handling
  const onSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);

    if (!value) {
      setExpandedKeys(['src']);
      return;
    }

    // Auto expand parent nodes of matches
    const newExpandedKeys = [];
    const searchMatch = (nodes) => {
      nodes.forEach((item) => {
        if (item.title.toLowerCase().includes(value.toLowerCase())) {
          newExpandedKeys.push(item.key);
        }
        if (item.children) {
          searchMatch(item.children);
        }
      });
    };
    searchMatch(draggableData);
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(true);
  };

  // Drag and Drop reordering inside tree
  const onDrop = (info) => {
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };
    const data = JSON.parse(JSON.stringify(draggableData));

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      // Drop on the target node (insert as child)
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        item.children.unshift(dragObj);
      });
    } else if (
      (info.node.children || []).length > 0 &&
      info.node.expanded &&
      dropPosition === 1
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        item.children.unshift(dragObj);
      });
    } else {
      let ar = [];
      let i = 0;
      loop(data, dropKey, (_item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }
    setDraggableData(data);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Tree Hierarchy & Directory Views
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
              Ant Design Tree
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Explore 4 different tree hierarchy types: File Directory Tree, Checkable Permissions Tree, Draggable Reorderable Tree, and Search Filter Tree.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
            WAI-ARIA Hierarchical Tree
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1. Directory File Explorer Tree */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <FolderTree className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  1. File Directory Tree
                </h3>
                <span className="text-[11px] text-slate-400">Expandable codebase project tree</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-lg">
              Directory Tree
            </span>
          </div>

          <p className="text-xs text-slate-500">
            Double-click folders to expand or collapse. Click file nodes to view selection.
          </p>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs max-h-[340px] overflow-y-auto">
            <DirectoryTree
              multiple
              defaultExpandAll
              treeData={DIRECTORY_TREE_DATA}
            />
          </div>
        </div>

        {/* 2. Checkable Multi-Select Permissions Tree */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckSquare className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  2. Checkable Permissions Tree
                </h3>
                <span className="text-[11px] text-slate-400">Cascade checkbox selection with auto-check</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg">
              {checkedKeys.length} Selected
            </span>
          </div>

          <p className="text-xs text-slate-500">
            Checking a parent category automatically checks all sub-permissions. Supports indeterminate half-checked indicators.
          </p>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs max-h-[340px] overflow-y-auto">
            <Tree
              checkable
              defaultExpandAll
              checkedKeys={checkedKeys}
              onCheck={(keys) => setCheckedKeys(keys)}
              treeData={PERMISSIONS_TREE_DATA}
            />
          </div>
        </div>

        {/* 3. Draggable & Reorderable Tree */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Move className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  3. Draggable Reorderable Tree
                </h3>
                <span className="text-[11px] text-slate-400">Drag nodes into folders or re-arrange hierarchy</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-lg">
              Drag & Drop
            </span>
          </div>

          <p className="text-xs text-slate-500">
            Grab any file or directory node and drop it into another folder or move it up and down.
          </p>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs max-h-[340px] overflow-y-auto">
            <Tree
              draggable
              blockNode
              defaultExpandAll
              onDrop={onDrop}
              treeData={draggableData}
            />
          </div>
        </div>

        {/* 4. Searchable & Filterable Tree */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Search className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  4. Search Filter Tree
                </h3>
                <span className="text-[11px] text-slate-400">Auto-expand matching branches on typing</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-lg">
              Live Filter
            </span>
          </div>

          <div>
            <input
              type="text"
              value={searchValue}
              onChange={onSearchChange}
              placeholder="Search file name (e.g. Header, menu, vite)..."
              className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs max-h-[290px] overflow-y-auto">
            <Tree
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
              onExpand={(keys) => {
                setExpandedKeys(keys);
                setAutoExpandParent(false);
              }}
              treeData={draggableData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
