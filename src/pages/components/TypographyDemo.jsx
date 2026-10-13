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

const TypographyDemo = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Typography</Typography>

      <DemoSection title="All Typography Variants">
        <Stack spacing={2}>
          <Box>
            <Typography variant="h1" gutterBottom>
              h1. Heading
            </Typography>
          </Box>
          <Box>
            <Typography variant="h2" gutterBottom>
              h2. Heading
            </Typography>
          </Box>
          <Box>
            <Typography variant="h3" gutterBottom>
              h3. Heading
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" gutterBottom>
              h4. Heading
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" gutterBottom>
              h5. Heading
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" gutterBottom>
              body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" gutterBottom>
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
              dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Box>
          <Box>
            <Typography variant="button" display="block" gutterBottom>
              button text
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption" display="block" gutterBottom>
              caption text
            </Typography>
          </Box>
          <Box>
            <Typography variant="overline" display="block" gutterBottom>
              overline text
            </Typography>
          </Box>
        </Stack>
      </DemoSection>
    </Box>
  );
};

export default TypographyDemo;
