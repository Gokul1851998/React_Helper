import React from 'react';
import { Box, Typography, Paper, Stack, Tooltip, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

const TooltipDemo = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Tooltip</Typography>

      <DemoSection title="Basic Tooltip">
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </DemoSection>

      <DemoSection title="Positioned Tooltips">
        <Stack direction="row" spacing={2} justifyContent="center">
          <Tooltip title="Add" placement="top">
            <Button variant="outlined">Top</Button>
          </Tooltip>
          <Tooltip title="Add" placement="right">
            <Button variant="outlined">Right</Button>
          </Tooltip>
          <Tooltip title="Add" placement="bottom">
            <Button variant="outlined">Bottom</Button>
          </Tooltip>
          <Tooltip title="Add" placement="left">
            <Button variant="outlined">Left</Button>
          </Tooltip>
        </Stack>
      </DemoSection>

      <DemoSection title="Arrow Tooltip">
        <Tooltip title="Add" arrow>
          <Button variant="contained">Arrow</Button>
        </Tooltip>
      </DemoSection>

      <DemoSection title="Custom Tooltip">
        <CustomTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Tooltip with HTML</Typography>
              {"And here's"} <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
              {"It's very engaging. Right?"}
            </React.Fragment>
          }
        >
          <Button variant="outlined">HTML</Button>
        </CustomTooltip>
      </DemoSection>
    </Box>
  );
};

export default TooltipDemo;
