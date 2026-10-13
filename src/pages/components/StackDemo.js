import React from 'react';
import { Box, Typography, Paper, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function StackDemo() {
  return (
    <Box>
      <DemoSection title="Basic Stack (Vertical)">
        <Stack spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </DemoSection>

      <DemoSection title="Horizontal Stack">
        <Stack direction="row" spacing={2}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </DemoSection>

      <DemoSection title="Stack with Dividers">
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </DemoSection>

      <DemoSection title="Responsive Direction">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </DemoSection>
    </Box>
  );
}
