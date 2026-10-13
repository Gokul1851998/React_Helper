import React from 'react';
import { Typography, Box, Paper, Stack, Autocomplete, TextField } from '@mui/material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const top10Movies = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  { label: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
];

const AutocompleteDemo = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Autocomplete</Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary' }}>
        The autocomplete is a normal text input enhanced by a panel of suggested options.
      </Typography>

      <DemoSection title="Basic Autocomplete">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top10Movies}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </DemoSection>

      <DemoSection title="Multiple Values">
        <Autocomplete
          multiple
          id="tags-outlined"
          options={top10Movies}
          getOptionLabel={(option) => option.label}
          defaultValue={[top10Movies[0]]}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Multiple values"
              placeholder="Favorites"
            />
          )}
          sx={{ width: 500 }}
        />
      </DemoSection>

      <DemoSection title="Free Solo">
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={top10Movies.map((option) => option.label)}
          renderInput={(params) => <TextField {...params} label="freeSolo" />}
          sx={{ width: 300 }}
        />
      </DemoSection>

      <DemoSection title="Disabled">
        <Autocomplete
          disabled
          id="disabled-options-demo"
          options={top10Movies}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Disabled" />}
        />
      </DemoSection>
    </Box>
  );
};

export default AutocompleteDemo;
