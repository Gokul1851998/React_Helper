import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Rating,
  Chip,
  Box,
  CircularProgress,
  Grid,
} from '@mui/material';
import { ShoppingCart, FavoriteBorder, Star } from '@mui/icons-material';
import { useProductsQuery } from '../../../api/useApiData';

export default function MuiCardsDemo() {
  const { data: products = [], isLoading } = useProductsQuery();

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Material UI (MUI) Cards</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              @mui/material
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Product cards showcasing MUI Card, CardMedia, CardContent, Rating, and Chip components with live API imagery.
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center p-12">
          <CircularProgress sx={{ color: '#6366f1' }} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, 12).map((item) => (
            <Card
              key={item.id}
              elevation={0}
              sx={{
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px -10px rgba(99, 102, 241, 0.15)',
                },
              }}
            >
              <Box sx={{ position: 'relative', pt: '65%', bgcolor: '#f8fafc' }}>
                <CardMedia
                  component="img"
                  image={item.thumbnail}
                  alt={item.title}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    p: 2,
                  }}
                />
                <Chip
                  label={`${item.discountPercentage}% OFF`}
                  size="small"
                  color="error"
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    fontWeight: 700,
                    fontSize: '11px',
                  }}
                />
              </Box>

              <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', fontWeight: 600 }}>
                  {item.category}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 0.5, color: '#1e293b', lineClamp: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, lineClamp: 2, fontSize: '13px' }}>
                  {item.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#0f172a' }}>
                    ${item.price}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Star sx={{ color: '#f59e0b', fontSize: 18 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {item.rating}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>

              <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between' }}>
                <Button
                  size="small"
                  variant="contained"
                  startIcon={<ShoppingCart />}
                  sx={{
                    bgcolor: '#6366f1',
                    borderRadius: '10px',
                    textTransform: 'none',
                    fontWeight: 600,
                    flex: 1,
                    '&:hover': { bgcolor: '#4f46e5' },
                  }}
                >
                  Add to Cart
                </Button>
                <Button size="small" sx={{ minWidth: 40, color: '#94a3b8' }}>
                  <FavoriteBorder fontSize="small" />
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
