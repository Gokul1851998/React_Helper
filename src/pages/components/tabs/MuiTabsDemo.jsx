import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Paper,
  Badge,
  Breadcrumbs,
  Link,
  Stack,
} from '@mui/material';
import {
  Home,
  Whatshot,
  Grain,
  Phone,
  Favorite,
  PersonPin,
  Settings,
} from '@mui/icons-material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function MuiTabsDemo() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Material UI Tabs & Breadcrumbs</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              @mui/material Navigation
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Icon-accented Material UI tabs with badge indicators and interactive breadcrumb hierarchy.
          </p>
        </div>
      </div>

      <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid #e2e8f0', maxWidth: 800, mx: 'auto' }}>
        {/* MUI Breadcrumbs */}
        <Box sx={{ mb: 4, p: 2, bgcolor: '#f8fafc', borderRadius: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#6366f1' }}>
              <Home sx={{ mr: 0.5 }} fontSize="inherit" />
              Workspace
            </Link>
            <Link underline="hover" sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#64748b' }}>
              <Whatshot sx={{ mr: 0.5 }} fontSize="inherit" />
              Components
            </Link>
            <Typography sx={{ display: 'flex', alignItems: 'center', color: '#0f172a', fontWeight: 600 }}>
              <Grain sx={{ mr: 0.5 }} fontSize="inherit" />
              Tabs Demo
            </Typography>
          </Breadcrumbs>
        </Box>

        {/* MUI Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab icon={<Phone />} iconPosition="start" label="Communication" />
            <Tab
              icon={
                <Badge badgeContent={4} color="error">
                  <Favorite />
                </Badge>
              }
              iconPosition="start"
              label="Favorites"
            />
            <Tab icon={<PersonPin />} iconPosition="start" label="User Access" />
            <Tab icon={<Settings />} iconPosition="start" label="Advanced" />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1e293b' }}>
            Unified Communication Channels
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            WebRTC audio, encrypted telemetry sockets, and real-time push subscriptions.
          </Typography>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1e293b' }}>
            Pinned Project Bookmarks
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            4 core design system component blueprints are currently pinned for quick review.
          </Typography>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1e293b' }}>
            Role-Based Access Control (RBAC)
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Manage OAuth2 identity providers and granular scope delegation for team members.
          </Typography>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={3}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1e293b' }}>
            Advanced Engine Tweaks
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Cache invalidation policies and telemetry sampling rate settings.
          </Typography>
        </CustomTabPanel>
      </Paper>
    </div>
  );
}
