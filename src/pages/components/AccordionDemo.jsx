import React from 'react';
import { Box, Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

export default function AccordionDemo() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <DemoSection title="Basic Accordion">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </DemoSection>

      <DemoSection title="Controlled Accordion">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>General settings</Typography>
            <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
            <Typography sx={{ color: 'text.secondary' }}>You are currently not an owner</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
              diam eros in elit. Pellentesque convallis laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </DemoSection>

      <DemoSection title="Disabled Accordion">
        <Accordion disabled>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion>
      </DemoSection>

      <DemoSection title="Custom Styled Accordion">
        <Accordion sx={{ backgroundColor: '#f5f5f5', border: '1px solid #ccc' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">Custom Style</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This accordion has a custom background color and border.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </DemoSection>
    </Box>
  );
}
