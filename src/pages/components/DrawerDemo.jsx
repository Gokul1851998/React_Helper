import React, { useState } from 'react';
import {
  Typography,
  Box,
  Paper,
  Stack,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Badge,
  Chip,
  Slider,
  Switch
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Inbox as InboxIcon,
  Mail as MailIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Notifications as NotificationsIcon,
  FilterList as FilterListIcon,
  Dashboard as DashboardIcon,
  Folder as FolderIcon,
  ChevronLeft as ChevronLeftIcon
} from '@mui/icons-material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>
      {title}
    </Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

export default function DrawerDemo() {
  // Placement state for temporary drawer
  const [drawerState, setDrawerState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // Filter drawer state
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([20, 80]);
  const [inStockOnly, setInStockOnly] = useState(true);

  // Persistent drawer state
  const [persistentOpen, setPersistentOpen] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const listContent = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <Typography variant="subtitle1" fontWeight={700} color="#1e293b">
          Navigation ({anchor.toUpperCase()})
        </Typography>
        <IconButton size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      <List>
        {[
          { text: 'Dashboard', icon: <DashboardIcon color="primary" /> },
          { text: 'My Projects', icon: <FolderIcon color="action" /> },
          { text: 'Inbox Messages', icon: <MailIcon color="action" /> },
          { text: 'Notifications', icon: <NotificationsIcon color="action" /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: 'User Profile', icon: <PersonIcon color="action" /> },
          { text: 'System Settings', icon: <SettingsIcon color="action" /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      {/* Title & Description */}
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 800, color: '#0f172a' }}>
        Drawer & Slide-over Panels
      </Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary' }}>
        Navigation drawers provide access to destinations and filters in your app. Explore temporary 4-direction slide-ins, persistent side sheets, and filter drawers.
      </Typography>

      {/* 1. Temporary Drawers (Left, Right, Top, Bottom) */}
      <DemoSection title="1. Temporary Drawer (4 Placements: Left, Right, Top, Bottom)">
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Temporary drawers can toggle open or closed from any edge of the viewport. Click any button to trigger slide-in animation:
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {(['left', 'right', 'top', 'bottom']).map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                variant="contained"
                onClick={toggleDrawer(anchor, true)}
                startIcon={<MenuIcon />}
                sx={{
                  bgcolor: anchor === 'left' ? '#4f46e5' : anchor === 'right' ? '#0ea5e9' : anchor === 'top' ? '#f59e0b' : '#10b981',
                  textTransform: 'capitalize',
                  fontWeight: 700,
                  borderRadius: 2.5
                }}
              >
                Slide from {anchor}
              </Button>

              <Drawer
                anchor={anchor}
                open={drawerState[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {listContent(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Stack>
      </DemoSection>

      {/* 2. Interactive Filter Drawer / Slide-Over Sheet */}
      <DemoSection title="2. Filter & Configuration Slide-Over Sheet (Right Drawer)">
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Slide-over side sheets are ideal for product filtering, data sorting, or detailed entity inspections without leaving the page.
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          startIcon={<FilterListIcon />}
          onClick={() => setFilterDrawerOpen(true)}
          sx={{ fontWeight: 700, borderRadius: 2.5 }}
        >
          Open Filter Side-Sheet
        </Button>

        {/* Filter Drawer */}
        <Drawer
          anchor="right"
          open={filterDrawerOpen}
          onClose={() => setFilterDrawerOpen(false)}
        >
          <Box sx={{ width: 340, p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 2, borderBottom: '1px solid #e2e8f0' }}>
              <Typography variant="h6" fontWeight={700} color="#0f172a">
                Filter Products
              </Typography>
              <IconButton onClick={() => setFilterDrawerOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Filter Body */}
            <Box sx={{ flex: 1, py: 3, overflowY: 'auto' }}>
              {/* Category */}
              <Typography variant="subtitle2" fontWeight={700} color="#334155" sx={{ mb: 1 }}>
                Category
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                <Chip label="UI Frameworks" color="primary" size="small" />
                <Chip label="Data Tables" variant="outlined" size="small" />
                <Chip label="Forms & Inputs" variant="outlined" size="small" />
                <Chip label="Drag & Drop" variant="outlined" size="small" />
              </Stack>

              {/* Price Range */}
              <Typography variant="subtitle2" fontWeight={700} color="#334155" sx={{ mb: 1 }}>
                Price Range (${priceRange[0]} - ${priceRange[1]})
              </Typography>
              <Box sx={{ px: 1, mb: 3 }}>
                <Slider
                  value={priceRange}
                  onChange={(e, val) => setPriceRange(val)}
                  valueLabelDisplay="auto"
                  min={0}
                  max={100}
                />
              </Box>

              {/* In stock toggle */}
              <Typography variant="subtitle2" fontWeight={700} color="#334155" sx={{ mb: 1 }}>
                Availability
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    color="primary"
                  />
                }
                label="Verified In-Stock Only"
              />
            </Box>

            {/* Footer Buttons */}
            <Box sx={{ pt: 2, borderTop: '1px solid #e2e8f0', display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                color="inherit"
                fullWidth
                onClick={() => setFilterDrawerOpen(false)}
                sx={{ borderRadius: 2 }}
              >
                Reset
              </Button>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => setFilterDrawerOpen(false)}
                sx={{ borderRadius: 2, fontWeight: 700 }}
              >
                Apply Filters
              </Button>
            </Box>
          </Box>
        </Drawer>
      </DemoSection>

      {/* 3. Persistent Drawer Demo */}
      <DemoSection title="3. Persistent Sidebar Drawer (Docked Panel)">
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Persistent drawers can be toggled on/off to stay open alongside main page content.
        </Typography>

        <Button
          variant={persistentOpen ? 'contained' : 'outlined'}
          color={persistentOpen ? 'error' : 'secondary'}
          onClick={() => setPersistentOpen(!persistentOpen)}
          sx={{ fontWeight: 700, borderRadius: 2.5 }}
        >
          {persistentOpen ? 'Close Persistent Panel' : 'Open Persistent Panel'}
        </Button>

        {persistentOpen && (
          <Paper
            sx={{
              mt: 3,
              p: 3,
              bgcolor: '#f1f5f9',
              borderRadius: 3,
              border: '1px solid #cbd5e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              animation: 'fadeIn 0.2s ease-in-out'
            }}
          >
            <Box>
              <Typography variant="subtitle1" fontWeight={700} color="#1e293b">
                Persistent Drawer Active
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This panel stays rendered alongside your page without obscuring user interactions.
              </Typography>
            </Box>
            <IconButton onClick={() => setPersistentOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Paper>
        )}
      </DemoSection>
    </Box>
  );
}
