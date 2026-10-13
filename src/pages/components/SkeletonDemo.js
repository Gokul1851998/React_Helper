import React from 'react';
import { Box, Typography, Paper, Skeleton, Stack, Card, CardHeader, CardContent, Avatar } from '@mui/material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

export default function SkeletonDemo() {
  return (
    <Box>
      <DemoSection title="Text Skeleton">
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem', width: '60%' }} />
      </DemoSection>

      <DemoSection title="Circular & Rectangular Skeletons">
        <Stack spacing={2} direction="row" alignItems="center">
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </Stack>
      </DemoSection>

      <DemoSection title="Animations">
        <Stack spacing={2}>
          <Skeleton animation="pulse" variant="rectangular" height={40} />
          <Skeleton animation="wave" variant="rectangular" height={40} />
          <Skeleton animation={false} variant="rectangular" height={40} />
        </Stack>
      </DemoSection>

      <DemoSection title="Full Card Skeleton">
        <Card sx={{ maxWidth: 345, m: 2 }}>
          <CardHeader
            avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
            title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
            subheader={<Skeleton animation="wave" height={10} width="40%" />}
          />
          <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
          <CardContent>
            <React.Fragment>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          </CardContent>
        </Card>
      </DemoSection>
    </Box>
  );
}
