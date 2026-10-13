import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListItemAvatar, Avatar, Collapse } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const ListDemo = () => {
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>List</Typography>

      <DemoSection title="Basic List">
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </DemoSection>

      <DemoSection title="List with Icons">
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </DemoSection>

      <DemoSection title="List with Avatars">
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
          </List>
        </Box>
      </DemoSection>

      <DemoSection title="Nested List">
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      </DemoSection>

      <DemoSection title="Selected List Item">
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List component="nav">
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </List>
        </Box>
      </DemoSection>
    </Box>
  );
};

export default ListDemo;
