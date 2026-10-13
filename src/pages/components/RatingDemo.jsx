import React, { useState } from 'react';
import { Typography, Box, Paper, Stack, Rating } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const RatingDemo = () => {
  const [value, setValue] = useState(2);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Rating</Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary' }}>
        Ratings provide insight regarding others' opinions and experiences.
      </Typography>

      <DemoSection title="Basic Rating">
        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Rating name="simple-controlled" value={3} />
        </Stack>
      </DemoSection>

      <DemoSection title="Controlled Rating with State">
        <Stack direction="column" spacing={2}>
          <Rating
            name="controlled-rating"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography component="legend">Value: {value}</Typography>
        </Stack>
      </DemoSection>

      <DemoSection title="Read Only">
        <Rating name="read-only" value={4} readOnly />
      </DemoSection>

      <DemoSection title="Precision (Half Stars)">
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </DemoSection>

      <DemoSection title="Sizes">
        <Stack direction="column" spacing={2}>
          <Rating name="size-small" defaultValue={2} size="small" />
          <Rating name="size-medium" defaultValue={2} />
          <Rating name="size-large" defaultValue={2} size="large" />
        </Stack>
      </DemoSection>

      <DemoSection title="Custom Icons">
        <Rating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={0.5}
          icon={<Favorite fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorder fontSize="inherit" />}
        />
      </DemoSection>
    </Box>
  );
};

export default RatingDemo;
