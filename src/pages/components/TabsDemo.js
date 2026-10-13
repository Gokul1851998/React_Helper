import React from 'react';
import { Box, Typography, Paper, Tabs, Tab } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function TabsDemo() {
  const [value, setValue] = React.useState(0);
  const [valueCenter, setValueCenter] = React.useState(0);
  const [valueScroll, setValueScroll] = React.useState(0);
  const [valueVertical, setValueVertical] = React.useState(0);
  const [valueIcon, setValueIcon] = React.useState(0);

  return (
    <Box>
      <DemoSection title="Basic Tabs">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={(e, v) => setValue(v)} aria-label="basic tabs example">
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>Item One Content</CustomTabPanel>
        <CustomTabPanel value={value} index={1}>Item Two Content</CustomTabPanel>
        <CustomTabPanel value={value} index={2}>Item Three Content</CustomTabPanel>
      </DemoSection>

      <DemoSection title="Centered Tabs">
        <Tabs value={valueCenter} onChange={(e, v) => setValueCenter(v)} centered>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </DemoSection>

      <DemoSection title="Scrollable Tabs">
        <Tabs
          value={valueScroll}
          onChange={(e, v) => setValueScroll(v)}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </DemoSection>

      <DemoSection title="Vertical Tabs">
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={valueVertical}
            onChange={(e, v) => setValueVertical(v)}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
          </Tabs>
          <CustomTabPanel value={valueVertical} index={0}>Item One</CustomTabPanel>
          <CustomTabPanel value={valueVertical} index={1}>Item Two</CustomTabPanel>
          <CustomTabPanel value={valueVertical} index={2}>Item Three</CustomTabPanel>
        </Box>
      </DemoSection>

      <DemoSection title="Icon Tabs">
        <Tabs value={valueIcon} onChange={(e, v) => setValueIcon(v)} aria-label="icon tabs example">
          <Tab icon={<PhoneIcon />} aria-label="phone" />
          <Tab icon={<FavoriteIcon />} aria-label="favorite" />
          <Tab icon={<PersonPinIcon />} aria-label="person" />
        </Tabs>
      </DemoSection>
    </Box>
  );
}
