import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Typography,
  Paper,
  Box,
  CircularProgress,
  Tooltip,
} from '@mui/material';
import {
  Send,
  Delete,
  CloudUpload,
  Fingerprint,
  Alarm,
  ShoppingCart,
  Favorite,
  ThumbUp,
} from '@mui/icons-material';

export default function MuiButtonDemo() {
  const [loading, setLoading] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const simulateAsync = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCartCount((c) => c + 1);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Material UI (MUI) Buttons</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              @mui/material Button
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Variants (contained, outlined, text), ButtonGroups, icon triggers, and asynchronous state loading.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Basic Variants */}
        <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid #e2e8f0' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
            Button Variants & Colors
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button variant="contained" color="primary">Primary Contained</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="success">Success</Button>
            <Button variant="contained" color="error">Error</Button>
            <Button variant="contained" color="warning">Warning</Button>
            <Button variant="outlined" color="primary">Outlined</Button>
            <Button variant="text" color="primary">Text Button</Button>
          </Stack>
        </Paper>

        {/* Buttons with Icons and Loading */}
        <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid #e2e8f0' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
            Icon Buttons & Async Loading State
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
            <Button
              variant="contained"
              startIcon={loading ? <CircularProgress size={18} color="inherit" /> : <ShoppingCart />}
              disabled={loading}
              onClick={simulateAsync}
              sx={{ bgcolor: '#6366f1', textTransform: 'none', fontWeight: 600, borderRadius: 3 }}
            >
              {loading ? 'Adding to Cart...' : `Add to Cart (${cartCount})`}
            </Button>

            <Button variant="outlined" startIcon={<CloudUpload />} sx={{ textTransform: 'none', borderRadius: 3 }}>
              Upload Asset
            </Button>

            <Button variant="outlined" color="error" startIcon={<Delete />} sx={{ textTransform: 'none', borderRadius: 3 }}>
              Delete Cluster
            </Button>

            <Tooltip title="Biometric Security">
              <IconButton color="primary" sx={{ bgcolor: '#eef2ff' }}>
                <Fingerprint />
              </IconButton>
            </Tooltip>

            <Tooltip title="Schedule Reminder">
              <IconButton color="secondary" sx={{ bgcolor: '#fdf2f8' }}>
                <Alarm />
              </IconButton>
            </Tooltip>
          </Stack>
        </Paper>

        {/* Button Groups */}
        <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid #e2e8f0' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
            Segmented Button Groups
          </Typography>
          <Stack spacing={3}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{ borderRadius: 3 }}>
              <Button>Day</Button>
              <Button>Week</Button>
              <Button>Month</Button>
              <Button>Quarter</Button>
            </ButtonGroup>

            <ButtonGroup variant="outlined" color="secondary" aria-label="medium secondary button group">
              <Button startIcon={<ThumbUp />}>Approve</Button>
              <Button startIcon={<Favorite />}>Favorite</Button>
              <Button startIcon={<Send />}>Forward</Button>
            </ButtonGroup>
          </Stack>
        </Paper>
      </div>
    </div>
  );
}
