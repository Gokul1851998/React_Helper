import React, { useState } from 'react';
import {
  TextField,
  Autocomplete,
  Slider,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Rating,
  Box,
  Typography,
  Paper,
  Button,
  Grid,
} from '@mui/material';
import { useProductsQuery } from '../../../api/useApiData';

export default function MuiInputsDemo() {
  const { data: products = [] } = useProductsQuery();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [volume, setVolume] = useState(45);
  const [checked, setChecked] = useState(true);
  const [region, setRegion] = useState('us-east');
  const [rating, setRating] = useState(4);

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Material UI (MUI) Form Controls</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              @mui/material Inputs
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Dynamic Material UI form controls: Autocomplete powered by live product inventory, Sliders, and Select dropdowns.
          </p>
        </div>
      </div>

      <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid #e2e8f0', maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#1e293b' }}>
          Interactive MUI Component Controls
        </Typography>

        <Grid container spacing={3}>
          {/* Autocomplete with live products */}
          <Grid item xs={12}>
            <Autocomplete
              options={products}
              getOptionLabel={(option) => `${option.title} ($${option.price})`}
              value={selectedProduct}
              onChange={(e, val) => setSelectedProduct(val)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search & Select Product (Live Inventory)"
                  placeholder="Type product name..."
                />
              )}
            />
            {selectedProduct && (
              <Box sx={{ mt: 1, p: 2, bgcolor: '#f8fafc', borderRadius: 2, border: '1px solid #e2e8f0' }}>
                <Typography variant="caption" sx={{ fontWeight: 600, color: '#4f46e5' }}>
                  SELECTED: {selectedProduct.title} • {selectedProduct.category} • ${selectedProduct.price}
                </Typography>
              </Box>
            )}
          </Grid>

          {/* Text Fields */}
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Full Name" placeholder="Alex Morgan" variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="region-label">Deployment Region</InputLabel>
              <Select
                labelId="region-label"
                value={region}
                label="Deployment Region"
                onChange={(e) => setRegion(e.target.value)}
              >
                <MenuItem value="us-east">US East (N. Virginia)</MenuItem>
                <MenuItem value="us-west">US West (Oregon)</MenuItem>
                <MenuItem value="eu-central">EU Central (Frankfurt)</MenuItem>
                <MenuItem value="ap-southeast">AP Southeast (Singapore)</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Slider */}
          <Grid item xs={12}>
            <Typography variant="caption" sx={{ fontWeight: 600, color: '#64748b' }}>
              Allocated Worker Bandwidth: {volume} GB/s
            </Typography>
            <Slider
              value={volume}
              onChange={(e, val) => setVolume(val)}
              valueLabelDisplay="auto"
              min={10}
              max={100}
              sx={{ color: '#6366f1', mt: 1 }}
            />
          </Grid>

          {/* Rating & Switch */}
          <Grid item xs={12} sm={6}>
            <Typography variant="caption" sx={{ fontWeight: 600, color: '#64748b', display: 'block', mb: 1 }}>
              Priority Quality Index
            </Typography>
            <Rating value={rating} onChange={(e, val) => setRating(val)} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} color="primary" />}
              label="Enable Real-Time WebSockets"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ bgcolor: '#6366f1', py: 1.5, px: 4, borderRadius: 2.5, fontWeight: 700, textTransform: 'none' }}
            >
              Apply Settings
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
