import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider as AntdConfigProvider, theme as antdTheme } from 'antd';
import { ThemeProvider as MuiThemeProvider, createTheme as createMuiTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';

// TanStack Query Client with optimal caching defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5,
    },
  },
});

// Material UI custom theme matching sleek modern palette
const muiTheme = createMuiTheme({
  palette: {
    primary: { main: '#6366f1' }, // Indigo
    secondary: { main: '#ec4899' },
    background: { default: '#f8fafc', paper: '#ffffff' },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
  },
  shape: {
    borderRadius: 10,
  },
});

// Ant Design theme overrides
const antdCustomTheme = {
  token: {
    colorPrimary: '#6366f1',
    borderRadius: 8,
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={muiTheme}>
        <AntdConfigProvider theme={antdCustomTheme}>
          <CssBaseline />
          <App />
        </AntdConfigProvider>
      </MuiThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
