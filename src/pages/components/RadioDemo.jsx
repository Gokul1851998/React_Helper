import React from 'react';
import { Typography, Box, Paper, Stack, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const RadioDemo = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Radio Buttons</Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary' }}>
        Radio buttons allow the user to select one option from a set.
      </Typography>

      <DemoSection title="RadioGroup with Label">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </DemoSection>

      <DemoSection title="Standalone Radios">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Radio value="a" name="radio-buttons" />
          <Radio value="b" name="radio-buttons" />
        </Stack>
      </DemoSection>

      <DemoSection title="Direction (Row)">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="female"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </DemoSection>

      <DemoSection title="Colors">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Radio defaultChecked color="secondary" />
          <Radio defaultChecked color="success" />
          <Radio defaultChecked color="default" />
        </Stack>
      </DemoSection>

      <DemoSection title="Sizes">
        <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
          <Radio defaultChecked size="small" />
          <Radio defaultChecked size="medium" />
        </Stack>
      </DemoSection>

      <DemoSection title="Label Placement">
        <FormControl>
          <RadioGroup row aria-labelledby="demo-form-control-label-placement" name="position" defaultValue="top">
            <FormControlLabel value="top" control={<Radio />} label="Top" labelPlacement="top" />
            <FormControlLabel value="start" control={<Radio />} label="Start" labelPlacement="start" />
            <FormControlLabel value="bottom" control={<Radio />} label="Bottom" labelPlacement="bottom" />
            <FormControlLabel value="end" control={<Radio />} label="End" labelPlacement="end" />
          </RadioGroup>
        </FormControl>
      </DemoSection>
    </Box>
  );
};

export default RadioDemo;
