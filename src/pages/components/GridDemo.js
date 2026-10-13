import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
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

export default function GridDemo() {
  return (
    <Box>
      <DemoSection title="Basic Grid">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </DemoSection>

      <DemoSection title="Responsive Grid">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Item>xs=12 sm=6 md=4</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>xs=12 sm=6 md=4</Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item>xs=12 sm=6 md=4</Item>
          </Grid>
        </Grid>
      </DemoSection>

      <DemoSection title="Nested Grid">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Item>Outer Grid Item</Item>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Item>Inner Item 1</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>Inner Item 2</Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DemoSection>
    </Box>
  );
}
