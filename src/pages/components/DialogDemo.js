import React from 'react';
import { Box, Typography, Paper, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

export default function DialogDemo() {
  const [openSimple, setOpenSimple] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);
  const [openFull, setOpenFull] = React.useState(false);

  return (
    <Box>
      <DemoSection title="Simple Dialog">
        <Button variant="outlined" onClick={() => setOpenSimple(true)}>Open simple dialog</Button>
        <Dialog open={openSimple} onClose={() => setOpenSimple(false)}>
          <DialogTitle>Set backup account</DialogTitle>
          <List sx={{ pt: 0 }}>
            <ListItem button onClick={() => setOpenSimple(false)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="username@gmail.com" />
            </ListItem>
            <ListItem button onClick={() => setOpenSimple(false)}>
              <ListItemAvatar>
                <Avatar>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Add account" />
            </ListItem>
          </List>
        </Dialog>
      </DemoSection>

      <DemoSection title="Alert Dialog">
        <Button variant="outlined" onClick={() => setOpenAlert(true)}>Open alert dialog</Button>
        <Dialog open={openAlert} onClose={() => setOpenAlert(false)}>
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenAlert(false)}>Disagree</Button>
            <Button onClick={() => setOpenAlert(false)} autoFocus>Agree</Button>
          </DialogActions>
        </Dialog>
      </DemoSection>

      <DemoSection title="Form Dialog">
        <Button variant="outlined" onClick={() => setOpenForm(true)}>Open form dialog</Button>
        <Dialog open={openForm} onClose={() => setOpenForm(false)}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send updates occasionally.
            </DialogContentText>
            <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenForm(false)}>Cancel</Button>
            <Button onClick={() => setOpenForm(false)}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </DemoSection>

      <DemoSection title="Full-screen Dialog">
        <Button variant="outlined" onClick={() => setOpenFull(true)}>Open full-screen dialog</Button>
        <Dialog fullScreen open={openFull} onClose={() => setOpenFull(false)}>
          <DialogTitle>Full Screen Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>This is a full screen dialog.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenFull(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </DemoSection>
    </Box>
  );
}
