import React from 'react';
import { Box, Typography, Paper, Stack, Divider, List, ListItem, ListItemText, Grid } from '@mui/material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const DividerDemo = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Divider</Typography>

      <DemoSection title="Full Width Divider">
        <List component="nav" sx={{ bgcolor: 'background.paper' }}>
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </DemoSection>

      <DemoSection title="Inset Divider">
        <List component="nav" sx={{ bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
        </List>
      </DemoSection>

      <DemoSection title="Middle Divider">
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <Box sx={{ my: 3, mx: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">
                  Toothbrush
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  $4.50
                </Typography>
              </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">
              Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
              just down the hall.
            </Typography>
          </Box>
          <Divider variant="middle" />
          <Box sx={{ m: 2 }}>
            <Typography gutterBottom variant="body1">
              Select type
            </Typography>
          </Box>
        </Box>
      </DemoSection>

      <DemoSection title="Divider with text">
        <Box sx={{ width: '100%', mb: 2 }}>
          <Divider textAlign="left">LEFT</Divider>
          <br />
          <Divider textAlign="center">CENTER</Divider>
          <br />
          <Divider textAlign="right">RIGHT</Divider>
        </Box>
      </DemoSection>

      <DemoSection title="Vertical Divider">
        <Grid container>
          <Grid item xs>
            <Box sx={{ p: 2, textAlign: 'center' }}>Item 1</Box>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs>
            <Box sx={{ p: 2, textAlign: 'center' }}>Item 2</Box>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs>
            <Box sx={{ p: 2, textAlign: 'center' }}>Item 3</Box>
          </Grid>
        </Grid>
      </DemoSection>
    </Box>
  );
};

export default DividerDemo;
