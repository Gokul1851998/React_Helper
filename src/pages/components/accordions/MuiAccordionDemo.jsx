import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip,
  Box,
  Paper,
  CircularProgress,
} from '@mui/material';
import { ExpandMore, CheckCircle, Inventory2 } from '@mui/icons-material';
import { useProductsQuery } from '../../../api/useApiData';

export default function MuiAccordionDemo() {
  const { data: products = [], isLoading } = useProductsQuery();
  const [expanded, setExpanded] = useState('panel0');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Material UI (MUI) Accordion</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              @mui/material Accordion
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Collapsible accordion panels with live product specs, controlled expanded state, and smooth transitions.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {isLoading ? (
          <div className="flex justify-center p-12">
            <CircularProgress sx={{ color: '#6366f1' }} />
          </div>
        ) : (
          <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid #e2e8f0' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1e293b' }}>
              Product Inventory Specifications (Controlled Accordion)
            </Typography>

            <Box sx={{ mt: 2 }}>
              {products.slice(0, 5).map((item, index) => {
                const panelId = `panel${index}`;
                return (
                  <Accordion
                    key={item.id}
                    expanded={expanded === panelId}
                    onChange={handleChange(panelId)}
                    sx={{
                      borderRadius: '12px !important',
                      mb: 1.5,
                      border: '1px solid #e2e8f0',
                      '&:before': { display: 'none' },
                      boxShadow: 'none',
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />} sx={{ px: 3, py: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', pr: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Inventory2 sx={{ color: '#6366f1', fontSize: 20 }} />
                          <Typography sx={{ fontWeight: 600, color: '#1e293b' }}>
                            {item.title}
                          </Typography>
                        </Box>
                        <Chip
                          label={`$${item.price}`}
                          size="small"
                          sx={{ bgcolor: '#eef2ff', color: '#4338ca', fontWeight: 700 }}
                        />
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3, pt: 0, borderTop: '1px solid #f1f5f9' }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.7 }}>
                        {item.description}
                      </Typography>
                      <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <span className="text-xs text-slate-500">
                          <strong>Category:</strong> {item.category}
                        </span>
                        <span className="text-xs text-slate-500">
                          <strong>Brand:</strong> {item.brand || 'Generic'}
                        </span>
                        <span className="text-xs text-slate-500">
                          <strong>Rating:</strong> {item.rating} / 5.0
                        </span>
                        <span className="text-xs text-slate-500">
                          <strong>Stock Available:</strong> {item.stock} units
                        </span>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Paper>
        )}
      </div>
    </div>
  );
}
