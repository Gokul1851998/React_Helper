import React from 'react';
import { Box, Typography, Paper, Container } from '@mui/material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

export default function ContainerDemo() {
  return (
    <Box>
      <DemoSection title="Fluid Container (maxWidth='sm')">
        <Container maxWidth="sm" sx={{ bgcolor: '#cfe8fc', height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>Fluid sm Container</Typography>
        </Container>
      </DemoSection>

      <DemoSection title="Fluid Container (maxWidth='md')">
        <Container maxWidth="md" sx={{ bgcolor: '#cfe8fc', height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>Fluid md Container</Typography>
        </Container>
      </DemoSection>

      <DemoSection title="Fixed Container">
        <Container fixed sx={{ bgcolor: '#cfe8fc', height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>Fixed Container</Typography>
        </Container>
      </DemoSection>
    </Box>
  );
}
