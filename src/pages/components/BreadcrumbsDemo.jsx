import React from 'react';
import { Box, Typography, Paper, Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

export default function BreadcrumbsDemo() {
  return (
    <Box>
      <DemoSection title="Basic Breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </DemoSection>

      <DemoSection title="Custom Separator">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mt: 2 }}>
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </DemoSection>

      <DemoSection title="Breadcrumbs with Icons">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} color="inherit" href="/">
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            MUI
          </Link>
          <Link underline="hover" sx={{ display: 'flex', alignItems: 'center' }} color="inherit" href="/material-ui/getting-started/installation/">
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Core
          </Link>
          <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">
            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Breadcrumb
          </Typography>
        </Breadcrumbs>
      </DemoSection>

      <DemoSection title="Collapsed Breadcrumbs">
        <Breadcrumbs maxItems={2} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">Home</Link>
          <Link underline="hover" color="inherit" href="#">Catalog</Link>
          <Link underline="hover" color="inherit" href="#">Accessories</Link>
          <Link underline="hover" color="inherit" href="#">New Collection</Link>
          <Typography color="text.primary">Belts</Typography>
        </Breadcrumbs>
      </DemoSection>
    </Box>
  );
}
