import React from 'react';
import { Box, Typography, Paper, Stack, Chip, Avatar } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const ChipDemo = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Chip</Typography>

      <DemoSection title="Basic Chips">
        <Stack direction="row" spacing={1}>
          <Chip label="Chip Filled" />
          <Chip label="Chip Outlined" variant="outlined" />
        </Stack>
      </DemoSection>

      <DemoSection title="Clickable Chips">
        <Stack direction="row" spacing={1}>
          <Chip label="Clickable" onClick={handleClick} />
          <Chip label="Clickable" variant="outlined" onClick={handleClick} />
        </Stack>
      </DemoSection>

      <DemoSection title="Deletable Chips">
        <Stack direction="row" spacing={1}>
          <Chip label="Deletable" onDelete={handleDelete} />
          <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
          <Chip
            label="Custom delete icon"
            onClick={handleClick}
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
          />
        </Stack>
      </DemoSection>

      <DemoSection title="Avatar Chips">
        <Stack direction="row" spacing={1}>
          <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
          <Chip
            avatar={<Avatar alt="Natacha" src="https://mui.com/static/images/avatar/1.jpg" />}
            label="Avatar"
            variant="outlined"
          />
        </Stack>
      </DemoSection>

      <DemoSection title="Icon Chips">
        <Stack direction="row" spacing={1}>
          <Chip icon={<FaceIcon />} label="With Icon" />
          <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
        </Stack>
      </DemoSection>

      <DemoSection title="Color Variants">
        <Stack direction="row" spacing={1}>
          <Chip label="Primary" color="primary" />
          <Chip label="Success" color="success" />
          <Chip label="Warning" color="warning" />
          <Chip label="Error" color="error" />
        </Stack>
      </DemoSection>

      <DemoSection title="Sizes">
        <Stack direction="row" spacing={1} alignItems="center">
          <Chip label="Small" size="small" />
          <Chip label="Medium" />
        </Stack>
      </DemoSection>
    </Box>
  );
};

export default ChipDemo;
