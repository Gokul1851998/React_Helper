import React from 'react';
import { Typography, Box, Paper, Stack, Switch, FormGroup, FormControlLabel } from '@mui/material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const SwitchDemo = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Switches</Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary' }}>
        Switches toggle the state of a single setting on or off.
      </Typography>

      <DemoSection title="Basic Switches">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Switch defaultChecked />
          <Switch />
          <Switch disabled defaultChecked />
          <Switch disabled />
        </Stack>
      </DemoSection>

      <DemoSection title="Label Switches">
        <FormGroup row>
          <FormControlLabel control={<Switch defaultChecked />} label="Label" />
          <FormControlLabel required control={<Switch />} label="Required" />
          <FormControlLabel disabled control={<Switch />} label="Disabled" />
        </FormGroup>
      </DemoSection>

      <DemoSection title="Sizes">
        <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
          <Switch defaultChecked size="small" />
          <Switch defaultChecked />
        </Stack>
      </DemoSection>

      <DemoSection title="Colors">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Switch defaultChecked color="secondary" />
          <Switch defaultChecked color="warning" />
          <Switch defaultChecked color="default" />
        </Stack>
      </DemoSection>

      <DemoSection title="FormGroup Usage">
        <FormGroup>
          <FormControlLabel control={<Switch defaultChecked />} label="Wi-Fi" />
          <FormControlLabel control={<Switch />} label="Bluetooth" />
          <FormControlLabel control={<Switch defaultChecked />} label="Location Services" />
        </FormGroup>
      </DemoSection>
    </Box>
  );
};

export default SwitchDemo;
