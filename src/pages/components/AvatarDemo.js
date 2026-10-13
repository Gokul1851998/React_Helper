import React from 'react';
import { Box, Typography, Paper, Stack, Avatar, AvatarGroup } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { deepOrange, deepPurple, green, pink } from '@mui/material/colors';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const AvatarDemo = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Avatar</Typography>

      <DemoSection title="Image Avatars">
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
        </Stack>
      </DemoSection>

      <DemoSection title="Letter Avatars">
        <Stack direction="row" spacing={2}>
          <Avatar>H</Avatar>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </Stack>
      </DemoSection>

      <DemoSection title="Icon Avatars">
        <Stack direction="row" spacing={2}>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <Avatar sx={{ bgcolor: pink[500] }}>
            <PageviewIcon />
          </Avatar>
          <Avatar sx={{ bgcolor: green[500] }}>
            <AssignmentIcon />
          </Avatar>
        </Stack>
      </DemoSection>

      <DemoSection title="Sizes">
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 24, height: 24 }} />
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
        </Stack>
      </DemoSection>

      <DemoSection title="Variants">
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
            N
          </Avatar>
          <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
            <AssignmentIcon />
          </Avatar>
        </Stack>
      </DemoSection>

      <DemoSection title="AvatarGroup">
        <Stack direction="row" spacing={2}>
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Stack>
      </DemoSection>
    </Box>
  );
};

export default AvatarDemo;
