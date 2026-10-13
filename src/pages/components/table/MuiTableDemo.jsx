import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Chip,
  Rating,
  Box,
  Typography,
  CircularProgress,
  TextField,
  InputAdornment,
  Stack,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useProductsQuery } from '../../../api/useApiData';

export default function MuiTableDemo() {
  const { data: products = [], isLoading, isError, error } = useProductsQuery();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase()) ||
    p.brand?.toLowerCase().includes(search.toLowerCase())
  );

  const displayed = filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Material UI (MUI) Table</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              @mui/material
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Live products dataset from DummyJSON API with pagination, search filter, and chip badges.
          </p>
        </div>

        <TextField
          size="small"
          placeholder="Filter products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" sx={{ color: '#94a3b8' }} />
              </InputAdornment>
            ),
          }}
          sx={{ minWidth: 260 }}
        />
      </div>

      {/* Main Table */}
      <Paper elevation={0} sx={{ border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden' }}>
        {isLoading ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 10, gap: 2 }}>
            <CircularProgress size={36} sx={{ color: '#6366f1' }} />
            <Typography variant="body2" color="text.secondary">
              Fetching products from DummyJSON API...
            </Typography>
          </Box>
        ) : isError ? (
          <Box sx={{ p: 4, color: 'error.main' }}>
            Failed to load data: {error.message}
          </Box>
        ) : (
          <>
            <TableContainer sx={{ maxHeight: 600 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, bgcolor: '#f8fafc' }}>Product</TableCell>
                    <TableCell sx={{ fontWeight: 700, bgcolor: '#f8fafc' }}>Category</TableCell>
                    <TableCell sx={{ fontWeight: 700, bgcolor: '#f8fafc' }}>Price</TableCell>
                    <TableCell sx={{ fontWeight: 700, bgcolor: '#f8fafc' }}>Discount</TableCell>
                    <TableCell sx={{ fontWeight: 700, bgcolor: '#f8fafc' }}>Rating</TableCell>
                    <TableCell sx={{ fontWeight: 700, bgcolor: '#f8fafc' }}>Stock</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayed.map((row) => (
                    <TableRow key={row.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <img
                            src={row.thumbnail}
                            alt={row.title}
                            className="w-12 h-12 rounded-lg object-cover bg-slate-100 border border-slate-200"
                            loading="lazy"
                          />
                          <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1e293b' }}>
                              {row.title}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              SKU: {row.sku || `PRD-${row.id}`}
                            </Typography>
                          </Box>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={row.category}
                          size="small"
                          sx={{
                            bgcolor: '#f1f5f9',
                            color: '#475569',
                            fontWeight: 500,
                            textTransform: 'capitalize',
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ fontWeight: 600, color: '#0f172a' }}>
                        ${row.price.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <span className="text-emerald-600 font-medium text-xs bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                          {row.discountPercentage}% OFF
                        </span>
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Rating value={row.rating} precision={0.1} size="small" readOnly />
                          <span className="text-xs text-slate-500 font-medium">({row.rating})</span>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        {row.stock > 10 ? (
                          <Chip label={`${row.stock} in stock`} size="small" color="success" variant="outlined" />
                        ) : (
                          <Chip label={`Only ${row.stock} left`} size="small" color="warning" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              component="div"
              count={filtered.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={{ borderTop: '1px solid #e2e8f0' }}
            />
          </>
        )}
      </Paper>
    </div>
  );
}
