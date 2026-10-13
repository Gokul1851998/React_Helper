import React, { useState } from 'react';
import { Typography, Box, Paper, Stack, Select, MenuItem, FormControl, InputLabel, NativeSelect, ListSubheader } from '@mui/material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const SelectDemo = () => {
  const [age, setAge] = useState('');
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleMultipleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const names = ['Oliver', 'Van', 'April', 'Ralph', 'Omar'];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Select</Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary' }}>
        Select components are used for collecting user provided information from a list of options.
      </Typography>

      <DemoSection title="Basic Select">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </DemoSection>

      <DemoSection title="Variants">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-outlined-select-label">Age</InputLabel>
            <Select labelId="demo-outlined-select-label" value={age} onChange={handleChange} label="Age">
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-filled-select-label">Age</InputLabel>
            <Select labelId="demo-filled-select-label" value={age} onChange={handleChange} label="Age">
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-standard-select-label">Age</InputLabel>
            <Select labelId="demo-standard-select-label" value={age} onChange={handleChange} label="Age">
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </DemoSection>

      <DemoSection title="Multiple Select">
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-name-label">Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={personName}
            onChange={handleMultipleChange}
            label="Name"
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DemoSection>

      <DemoSection title="Native Select">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Age
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
      </DemoSection>

      <DemoSection title="Grouped Select">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
          <Select defaultValue="" id="grouped-select" label="Grouping">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <ListSubheader>Category 1</ListSubheader>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <ListSubheader>Category 2</ListSubheader>
            <MenuItem value={3}>Option 3</MenuItem>
            <MenuItem value={4}>Option 4</MenuItem>
          </Select>
        </FormControl>
      </DemoSection>
    </Box>
  );
};

export default SelectDemo;
