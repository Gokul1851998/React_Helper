import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

export default function BoxDemo() {
  return (
    <Box>
      <DemoSection title="Box Container with sx prop">
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            p: 3,
            border: '2px dashed grey',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          Hover Me
        </Box>
      </DemoSection>

      <DemoSection title="Box with component prop">
        <Box component="span" sx={{ p: 2, border: '1px dashed grey', mr: 2 }}>
          Span element
        </Box>
        <Box component="button" sx={{ p: 2, border: '1px solid black', cursor: 'pointer' }}>
          Native Button
        </Box>
      </DemoSection>
    </Box>
  );
}
