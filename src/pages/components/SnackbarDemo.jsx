import React from 'react';
import { Box, Typography, Paper, Button, Snackbar, Alert, Stack } from '@mui/material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

export default function SnackbarDemo() {
  const [openSimple, setOpenSimple] = React.useState(false);
  const [statePos, setStatePos] = React.useState({ open: false, vertical: 'top', horizontal: 'center' });
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickSimple = () => setOpenSimple(true);
  const handleCloseSimple = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSimple(false);
  };

  const handleClickPos = (newState) => () => setStatePos({ open: true, ...newState });
  const handleClosePos = () => setStatePos({ ...statePos, open: false });

  const handleClickAlert = () => setOpenAlert(true);
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenAlert(false);
  };

  return (
    <Box>
      <DemoSection title="Simple Snackbar">
        <Button onClick={handleClickSimple}>Open simple snackbar</Button>
        <Snackbar
          open={openSimple}
          autoHideDuration={6000}
          onClose={handleCloseSimple}
          message="Note archived"
          action={
            <Button color="secondary" size="small" onClick={handleCloseSimple}>
              UNDO
            </Button>
          }
        />
      </DemoSection>

      <DemoSection title="Positioned Snackbar">
        <Stack direction="row" spacing={2}>
          <Button onClick={handleClickPos({ vertical: 'top', horizontal: 'center' })}>Top-Center</Button>
          <Button onClick={handleClickPos({ vertical: 'bottom', horizontal: 'right' })}>Bottom-Right</Button>
        </Stack>
        <Snackbar
          anchorOrigin={{ vertical: statePos.vertical, horizontal: statePos.horizontal }}
          open={statePos.open}
          onClose={handleClosePos}
          message="I love snacks"
          key={statePos.vertical + statePos.horizontal}
        />
      </DemoSection>

      <DemoSection title="Snackbar with Alert">
        <Button variant="outlined" onClick={handleClickAlert}>
          Open success snackbar
        </Button>
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
          <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
            This is a success message!
          </Alert>
        </Snackbar>
      </DemoSection>
    </Box>
  );
}
