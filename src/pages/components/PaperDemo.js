import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

export default function PaperDemo() {
  return (
    <Box>
      <DemoSection title="Paper Elevation">
        <Stack direction="row" spacing={3} flexWrap="wrap" sx={{ gap: 2 }}>
          {[0, 1, 2, 3, 4, 6, 8, 12, 16].map((elevation) => (
            <Paper key={elevation} elevation={elevation} sx={{ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {`elevation=${elevation}`}
            </Paper>
          ))}
        </Stack>
      </DemoSection>

      <DemoSection title="Outlined & Square Paper">
        <Stack direction="row" spacing={3}>
          <Paper variant="outlined" sx={{ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Outlined
          </Paper>
          <Paper square elevation={3} sx={{ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Square
          </Paper>
        </Stack>
      </DemoSection>

      <DemoSection title="Custom Styled Paper">
        <Paper elevation={4} sx={{ p: 2, backgroundColor: 'primary.light', color: 'primary.contrastText', width: 200, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Custom Styling
        </Paper>
      </DemoSection>
    </Box>
  );
}
