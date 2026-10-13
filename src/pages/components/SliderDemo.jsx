import React, { useState } from 'react';
import { Typography, Box, Paper, Stack, Slider, TextField } from '@mui/material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const marks = [
  { value: 0, label: '0°C' },
  { value: 20, label: '20°C' },
  { value: 37, label: '37°C' },
  { value: 100, label: '100°C' },
];

const SliderDemo = () => {
  const [value, setValue] = useState([20, 37]);
  const [inputValue, setInputValue] = useState(30);

  const handleRangeChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event, newValue) => {
    setInputValue(newValue);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Slider</Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary' }}>
        Sliders allow users to make selections from a range of values.
      </Typography>

      <DemoSection title="Continuous Slider">
        <Box sx={{ width: 300 }}>
          <Slider defaultValue={30} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
      </DemoSection>

      <DemoSection title="Discrete Slider (with steps and marks)">
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            getAriaValueText={(v) => `${v}°C`}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
        </Box>
        <Box sx={{ width: 300, mt: 4 }}>
          <Slider
            aria-label="Custom marks"
            defaultValue={20}
            getAriaValueText={(v) => `${v}°C`}
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </Box>
      </DemoSection>

      <DemoSection title="Range Slider">
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleRangeChange}
            valueLabelDisplay="auto"
            getAriaValueText={(v) => `${v}°C`}
          />
        </Box>
      </DemoSection>

      <DemoSection title="Slider with Input">
        <Stack direction="row" spacing={2} alignItems="center" sx={{ width: 300 }}>
          <Slider
            value={typeof inputValue === 'number' ? inputValue : 0}
            onChange={handleInputChange}
            aria-labelledby="input-slider"
          />
          <TextField
            value={inputValue}
            size="small"
            onChange={(e) => setInputValue(Number(e.target.value))}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Stack>
      </DemoSection>

      <DemoSection title="Custom Colors">
        <Box sx={{ width: 300 }}>
          <Slider color="secondary" defaultValue={50} aria-label="Secondary" />
          <Slider color="success" defaultValue={70} aria-label="Success" />
        </Box>
      </DemoSection>

      <DemoSection title="Vertical Slider">
        <Box sx={{ height: 300 }}>
          <Slider
            orientation="vertical"
            defaultValue={30}
            aria-label="Temperature"
            valueLabelDisplay="auto"
          />
        </Box>
      </DemoSection>
    </Box>
  );
};

export default SliderDemo;
