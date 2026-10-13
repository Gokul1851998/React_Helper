import React from 'react';
import { Typography, Box, Paper, Stack, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const CheckboxDemo = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Checkboxes</Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary' }}>
        Checkboxes allow the user to select one or more items from a set.
      </Typography>

      <DemoSection title="Basic Checkboxes">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Checkbox defaultChecked />
          <Checkbox />
          <Checkbox disabled />
          <Checkbox disabled checked />
        </Stack>
      </DemoSection>

      <DemoSection title="Label Checkboxes">
        <FormGroup row>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </DemoSection>

      <DemoSection title="Colors">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Checkbox defaultChecked color="secondary" />
          <Checkbox defaultChecked color="success" />
          <Checkbox defaultChecked color="default" />
          <Checkbox
            defaultChecked
            sx={{
              color: '#ffc107',
              '&.Mui-checked': {
                color: '#ffc107',
              },
            }}
          />
        </Stack>
      </DemoSection>

      <DemoSection title="Sizes">
        <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
          <Checkbox defaultChecked size="small" />
          <Checkbox defaultChecked size="medium" />
          <Checkbox defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }} />
        </Stack>
      </DemoSection>

      <DemoSection title="Indeterminate State">
        <FormControlLabel
          label="Parent"
          control={<Checkbox indeterminate checked={true} />}
        />
      </DemoSection>

      <DemoSection title="Custom Icons">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            color="error"
            defaultChecked
          />
        </Stack>
      </DemoSection>
    </Box>
  );
};

export default CheckboxDemo;
