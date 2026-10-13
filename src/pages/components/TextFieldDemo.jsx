import React from 'react';
import { Typography, Box, Paper, Stack, TextField, InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const TextFieldDemo = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>TextField</Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary' }}>
        Text fields let users enter and edit text.
      </Typography>

      <DemoSection title="Basic Text Fields">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Stack>
      </DemoSection>

      <DemoSection title="Sizes">
        <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
          <TextField label="Size small" id="outlined-size-small" defaultValue="Small" size="small" />
          <TextField label="Size normal" id="outlined-size-normal" defaultValue="Normal" />
        </Stack>
      </DemoSection>

      <DemoSection title="States (Required, Disabled, Error, HelperText)">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <TextField required id="outlined-required" label="Required" defaultValue="Hello World" />
          <TextField disabled id="outlined-disabled" label="Disabled" defaultValue="Hello World" />
          <TextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </Stack>
      </DemoSection>

      <DemoSection title="Input Adornments">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <TextField
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-adornment-weight"
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </DemoSection>

      <DemoSection title="Multiline">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            defaultValue="Default Value"
          />
          <TextField
            id="outlined-multiline-static"
            label="Multiline Static"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
        </Stack>
      </DemoSection>

      <DemoSection title="Full Width">
        <TextField fullWidth label="fullWidth" id="fullWidth" />
      </DemoSection>
    </Box>
  );
};

export default TextFieldDemo;
