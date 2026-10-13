import React from 'react';
import { Box, Typography, Paper, Pagination, Stack } from '@mui/material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

export default function PaginationDemo() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box>
      <DemoSection title="Basic Pagination">
        <Stack spacing={2}>
          <Pagination count={10} />
          <Pagination count={10} color="primary" />
          <Pagination count={10} color="secondary" />
          <Pagination count={10} disabled />
        </Stack>
      </DemoSection>

      <DemoSection title="Outlined Pagination">
        <Stack spacing={2}>
          <Pagination count={10} variant="outlined" />
          <Pagination count={10} variant="outlined" color="primary" />
          <Pagination count={10} variant="outlined" color="secondary" />
        </Stack>
      </DemoSection>

      <DemoSection title="Rounded Pagination">
        <Stack spacing={2}>
          <Pagination count={10} shape="rounded" />
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </DemoSection>

      <DemoSection title="Sizes">
        <Stack spacing={2}>
          <Pagination count={10} size="small" />
          <Pagination count={10} />
          <Pagination count={10} size="large" />
        </Stack>
      </DemoSection>

      <DemoSection title="Controlled Pagination">
        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
      </DemoSection>
    </Box>
  );
}
