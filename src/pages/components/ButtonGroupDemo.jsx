import React from 'react';
import { Typography, Box, Paper, Stack, Button, ButtonGroup } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const ButtonGroupDemo = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Button Group</Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary' }}>
        The ButtonGroup component can be used to group related buttons.
      </Typography>

      <DemoSection title="Basic Button Groups">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup variant="contained" aria-label="contained button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Stack>
      </DemoSection>

      <DemoSection title="Vertical Button Group">
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
          variant="contained"
        >
          <Button key="one">One</Button>
          <Button key="two">Two</Button>
          <Button key="three">Three</Button>
        </ButtonGroup>
      </DemoSection>

      <DemoSection title="Sizes">
        <Stack direction="column" spacing={2}>
          <ButtonGroup size="small" aria-label="small button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup size="medium" aria-label="medium button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <ButtonGroup size="large" aria-label="large button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Stack>
      </DemoSection>

      <DemoSection title="Split Button Example">
        <ButtonGroup variant="contained" aria-label="split button">
          <Button>Main Action</Button>
          <Button size="small">
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
      </DemoSection>
    </Box>
  );
};

export default ButtonGroupDemo;
