import React from 'react';
import { Typography, Box, Paper, Stack, Button, IconButton, ButtonGroup } from '@mui/material';
import { Delete, Send, CloudUpload, Add, Remove, Favorite, Alarm } from '@mui/icons-material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const ButtonDemo = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Buttons</Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary' }}>
        Buttons allow users to take actions, and make choices, with a single tap.
      </Typography>

      <DemoSection title="Basic Buttons">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </DemoSection>

      <DemoSection title="Color Variants">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" color="success">Success</Button>
          <Button variant="contained" color="error">Error</Button>
          <Button variant="contained" color="warning">Warning</Button>
          <Button variant="contained" color="info">Info</Button>
        </Stack>
      </DemoSection>

      <DemoSection title="Sizes">
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
          <Button variant="contained" size="small">Small</Button>
          <Button variant="contained" size="medium">Medium</Button>
          <Button variant="contained" size="large">Large</Button>
        </Stack>
      </DemoSection>

      <DemoSection title="Buttons with Icons">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="outlined" startIcon={<Delete />}>Delete</Button>
          <Button variant="contained" endIcon={<Send />}>Send</Button>
          <Button variant="contained" color="secondary" startIcon={<CloudUpload />}>Upload</Button>
        </Stack>
      </DemoSection>

      <DemoSection title="Loading & Disabled State">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="contained" disabled>Disabled</Button>
          <Button variant="outlined" disabled>Disabled Outlined</Button>
        </Stack>
      </DemoSection>

      <DemoSection title="Icon Buttons">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <IconButton aria-label="delete"><Delete /></IconButton>
          <IconButton aria-label="alarm" color="secondary"><Alarm /></IconButton>
          <IconButton aria-label="add an alarm" color="primary"><Add /></IconButton>
        </Stack>
      </DemoSection>
    </Box>
  );
};

export default ButtonDemo;
