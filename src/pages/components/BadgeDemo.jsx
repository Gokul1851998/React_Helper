import React from 'react';
import { Box, Typography, Paper, Stack, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const BadgeDemo = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Badge</Typography>

      <DemoSection title="Basic Badge">
        <Stack direction="row" spacing={4}>
          <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
        </Stack>
      </DemoSection>

      <DemoSection title="Color Variants">
        <Stack direction="row" spacing={4}>
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="success">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <MailIcon color="action" />
          </Badge>
        </Stack>
      </DemoSection>

      <DemoSection title="Maximum Value">
        <Stack direction="row" spacing={4}>
          <Badge badgeContent={99} color="primary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={100} color="primary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={1000} max={999} color="primary">
            <MailIcon color="action" />
          </Badge>
        </Stack>
      </DemoSection>

      <DemoSection title="Dot Badge">
        <Stack direction="row" spacing={4}>
          <Badge color="secondary" variant="dot">
            <MailIcon color="action" />
          </Badge>
        </Stack>
      </DemoSection>

      <DemoSection title="Badge Overlap">
        <Stack direction="row" spacing={4}>
          <Badge color="secondary" badgeContent=" ">
            <Box sx={{ width: 40, height: 40, bgcolor: 'grey.300' }} />
          </Badge>
          <Badge color="secondary" badgeContent=" " overlap="circular">
            <Box sx={{ width: 40, height: 40, bgcolor: 'grey.300', borderRadius: '50%' }} />
          </Badge>
        </Stack>
      </DemoSection>

      <DemoSection title="Badge Alignment">
        <Stack direction="row" spacing={4}>
          <Badge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            badgeContent={1}
            color="primary"
          >
            <MailIcon color="action" />
          </Badge>
          <Badge
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            badgeContent={2}
            color="primary"
          >
            <MailIcon color="action" />
          </Badge>
          <Badge
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            badgeContent={3}
            color="primary"
          >
            <MailIcon color="action" />
          </Badge>
          <Badge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            badgeContent={4}
            color="primary"
          >
            <MailIcon color="action" />
          </Badge>
        </Stack>
      </DemoSection>
    </Box>
  );
};

export default BadgeDemo;
