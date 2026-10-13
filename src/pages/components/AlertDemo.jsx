import React from 'react';
import { Box, Typography, Paper, Alert, AlertTitle, Stack, Button, IconButton, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

export default function AlertDemo() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box>
      <DemoSection title="Basic Alerts">
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
          <Alert severity="warning">This is a warning alert — check it out!</Alert>
          <Alert severity="info">This is an info alert — check it out!</Alert>
          <Alert severity="success">This is a success alert — check it out!</Alert>
        </Stack>
      </DemoSection>

      <DemoSection title="Outlined Alerts">
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant="outlined" severity="error">This is an error alert — check it out!</Alert>
          <Alert variant="outlined" severity="warning">This is a warning alert — check it out!</Alert>
          <Alert variant="outlined" severity="info">This is an info alert — check it out!</Alert>
          <Alert variant="outlined" severity="success">This is a success alert — check it out!</Alert>
        </Stack>
      </DemoSection>

      <DemoSection title="Filled Alerts">
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant="filled" severity="error">This is an error alert — check it out!</Alert>
          <Alert variant="filled" severity="warning">This is a warning alert — check it out!</Alert>
          <Alert variant="filled" severity="info">This is an info alert — check it out!</Alert>
          <Alert variant="filled" severity="success">This is a success alert — check it out!</Alert>
        </Stack>
      </DemoSection>

      <DemoSection title="Alert with Action">
        <Alert severity="warning" action={<Button color="inherit" size="small">UNDO</Button>}>
          This is a warning alert with an action!
        </Alert>
      </DemoSection>

      <DemoSection title="Alert with Close Icon">
        <Collapse in={open}>
          <Alert
            action={
              <IconButton aria-label="close" color="inherit" size="small" onClick={() => setOpen(false)}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Close me!
          </Alert>
        </Collapse>
        <Button disabled={open} variant="outlined" onClick={() => setOpen(true)} sx={{ mt: 1 }}>
          Re-open
        </Button>
      </DemoSection>
    </Box>
  );
}
