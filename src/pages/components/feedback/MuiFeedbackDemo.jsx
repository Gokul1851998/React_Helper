import React, { useState } from 'react';
import {
  Snackbar,
  Alert,
  AlertTitle,
  Button,
  Stack,
  Paper,
  Box,
  Typography,
  LinearProgress,
} from '@mui/material';

export default function MuiFeedbackDemo() {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success');

  const handleTrigger = (sev) => {
    setSeverity(sev);
    setOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">MUI Alerts & Snackbars</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              @mui/material Feedback
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Material UI severity alerts, progress telemetry indicators, and auto-dismissing toast snackbars.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Interactive Trigger Paper */}
        <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid #e2e8f0' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#1e293b' }}>
            Trigger Material UI Snackbars
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Click an option below to invoke auto-hiding snackbar toasts.
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap">
            <Button
              variant="contained"
              color="success"
              onClick={() => handleTrigger('success')}
              sx={{ borderRadius: 2.5, textTransform: 'none', fontWeight: 600 }}
            >
              Success Toast
            </Button>
            <Button
              variant="contained"
              color="info"
              onClick={() => handleTrigger('info')}
              sx={{ borderRadius: 2.5, textTransform: 'none', fontWeight: 600 }}
            >
              Info Toast
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => handleTrigger('warning')}
              sx={{ borderRadius: 2.5, textTransform: 'none', fontWeight: 600 }}
            >
              Warning Toast
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleTrigger('error')}
              sx={{ borderRadius: 2.5, textTransform: 'none', fontWeight: 600 }}
            >
              Error Toast
            </Button>
          </Stack>
        </Paper>

        {/* Static Alert Banners */}
        <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid #e2e8f0' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#1e293b' }}>
            Inline Severity Alert Banners
          </Typography>

          <Stack spacing={2}>
            <Alert severity="success" sx={{ borderRadius: 3 }}>
              <AlertTitle sx={{ fontWeight: 700 }}>Deployment Verified</AlertTitle>
              Container image passed all cryptographic signature checks and static analysis scans.
            </Alert>
            <Alert severity="info" sx={{ borderRadius: 3 }}>
              <AlertTitle sx={{ fontWeight: 700 }}>Telemetry Stream Ingest</AlertTitle>
              Ingesting 14,200 events per second via gRPC broker stream.
            </Alert>
            <Alert severity="warning" sx={{ borderRadius: 3 }}>
              <AlertTitle sx={{ fontWeight: 700 }}>Memory Saturation Warning</AlertTitle>
              Redis cache memory utilization is at 88.4%. Auto-eviction policies may execute.
            </Alert>
            <Alert severity="error" sx={{ borderRadius: 3 }}>
              <AlertTitle sx={{ fontWeight: 700 }}>Connection Refused</AlertTitle>
              Upstream gateway responded with HTTP 504 Gateway Timeout.
            </Alert>
          </Stack>
        </Paper>

        {/* Snackbar Toast instance */}
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert onClose={() => setOpen(false)} severity={severity} variant="filled" sx={{ width: '100%', borderRadius: 3 }}>
            Operation completed with severity [{severity.toUpperCase()}]!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
