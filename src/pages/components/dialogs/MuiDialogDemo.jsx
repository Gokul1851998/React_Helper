import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Slide,
  Typography,
  Box,
  Alert,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { CloudUpload, Delete, CheckCircle } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MuiDialogDemo() {
  const [open, setOpen] = useState(false);
  const [useSlide, setUseSlide] = useState(true);
  const [completed, setCompleted] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Material UI (MUI) Dialog</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              @mui/material Dialog
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            MUI Dialog with slide transition choreography, customized theme buttons, and state confirmation.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center max-w-xl mx-auto py-16">
        <Box sx={{ width: 64, height: 64, borderRadius: 4, bgcolor: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f46e5', mb: 2 }}>
          <CloudUpload sx={{ fontSize: 36 }} />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b' }}>
          Material UI Dialog System
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 400, mt: 1 }}>
          Full-featured responsive dialog with custom transitions, actions, and accessibility built-in.
        </Typography>

        <FormControlLabel
          control={<Switch checked={useSlide} onChange={(e) => setUseSlide(e.target.checked)} color="primary" />}
          label="Enable Upward Slide Transition"
          sx={{ mt: 3 }}
        />

        {completed && (
          <Alert severity="success" sx={{ mt: 2, borderRadius: 3 }}>
            Configuration synchronized successfully!
          </Alert>
        )}

        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{
            mt: 3,
            bgcolor: '#6366f1',
            borderRadius: 3,
            px: 4,
            py: 1.5,
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': { bgcolor: '#4f46e5' },
          }}
        >
          Open Material UI Dialog
        </Button>

        <Dialog
          open={open}
          TransitionComponent={useSlide ? Transition : undefined}
          keepMounted
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: { borderRadius: 4, p: 1, maxWidth: 460 },
          }}
        >
          <DialogTitle sx={{ fontWeight: 800, color: '#0f172a' }}>
            Sync Cloud Repository?
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ fontSize: '14px', color: '#64748b' }}>
              Synchronizing with upstream origin/main will rebase 14 local commits and invalidate active staging cache layers.
            </DialogContentText>
            <Box sx={{ mt: 2, p: 2, bgcolor: '#f8fafc', borderRadius: 3, border: '1px solid #e2e8f0' }}>
              <Typography variant="caption" sx={{ fontWeight: 600, color: '#334155' }}>
                TARGET REPO: github.com/enterprise/react-helper.git
              </Typography>
              <Typography variant="caption" display="block" color="text.secondary">
                Branch: production-v4 • SHA: 7f3b9c1
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button onClick={() => setOpen(false)} sx={{ color: '#64748b', textTransform: 'none', fontWeight: 600 }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setCompleted(true);
                setOpen(false);
              }}
              sx={{ bgcolor: '#6366f1', textTransform: 'none', fontWeight: 600, borderRadius: 2.5 }}
            >
              Confirm & Sync
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
