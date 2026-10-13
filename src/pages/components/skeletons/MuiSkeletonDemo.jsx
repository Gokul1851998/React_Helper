import React, { useState } from 'react';
import {
  Skeleton,
  Box,
  Typography,
  Paper,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { Refresh, ShoppingCart } from '@mui/icons-material';
import { useProductsQuery } from '../../../api/useApiData';

export default function MuiSkeletonDemo() {
  const { data: products = [] } = useProductsQuery();
  const [loading, setLoading] = useState(false);
  const [animationType, setAnimationType] = useState('wave');

  const triggerReload = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Material UI (MUI) Skeleton</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              @mui/material Skeleton
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Visual placeholder loading animations for progressive content rendering with live API products.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FormControlLabel
            control={
              <Switch
                checked={animationType === 'wave'}
                onChange={(e) => setAnimationType(e.target.checked ? 'wave' : 'pulse')}
              />
            }
            label={`Animation: ${animationType.toUpperCase()}`}
          />
          <Button
            variant="contained"
            startIcon={<Refresh />}
            onClick={triggerReload}
            sx={{ bgcolor: '#6366f1', textTransform: 'none', borderRadius: 2.5 }}
          >
            Simulate 2s Fetch
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b' }}>
          Progressive Card Skeleton Layout
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(loading ? Array.from(new Array(6)) : products.slice(0, 6)).map((item, index) => (
            <Card key={index} elevation={0} sx={{ borderRadius: 4, border: '1px solid #e2e8f0', p: 1.5 }}>
              {item ? (
                <CardMedia
                  component="img"
                  height="160"
                  image={item.thumbnail}
                  alt={item.title}
                  sx={{ borderRadius: 3, objectFit: 'contain', bgcolor: '#f8fafc', height: 160 }}
                />
              ) : (
                <Skeleton variant="rounded" height={160} animation={animationType} sx={{ borderRadius: 3 }} />
              )}

              <CardContent sx={{ px: 1, pt: 2, pb: 1 }}>
                {item ? (
                  <>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, lineClamp: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ lineClamp: 2, mt: 0.5 }}>
                      {item.description}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>
                        ${item.price}
                      </Typography>
                      <Button size="small" variant="outlined" sx={{ textTransform: 'none', borderRadius: 2 }}>
                        View
                      </Button>
                    </Box>
                  </>
                ) : (
                  <>
                    <Skeleton variant="text" width="80%" height={24} animation={animationType} />
                    <Skeleton variant="text" width="100%" height={16} animation={animationType} />
                    <Skeleton variant="text" width="60%" height={16} animation={animationType} />
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                      <Skeleton variant="rectangular" width={60} height={32} animation={animationType} sx={{ borderRadius: 2 }} />
                      <Skeleton variant="rectangular" width={70} height={32} animation={animationType} sx={{ borderRadius: 2 }} />
                    </Box>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
