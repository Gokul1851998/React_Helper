import React from 'react';
import { Box, Typography, Paper, Stepper, Step, StepLabel, Button, StepContent } from '@mui/material';

const DemoSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a2e' }}>{title}</Typography>
    <Paper sx={{ p: 3, borderRadius: 3, border: '1px solid #e5e7eb' }} elevation={0}>
      {children}
    </Paper>
  </Box>
);

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function StepperDemo() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStepVertical, setActiveStepVertical] = React.useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => setActiveStep(0);

  const handleNextVertical = () => setActiveStepVertical((prev) => prev + 1);
  const handleBackVertical = () => setActiveStepVertical((prev) => prev - 1);
  const handleResetVertical = () => setActiveStepVertical(0);

  return (
    <Box>
      <DemoSection title="Horizontal Stepper">
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </DemoSection>

      <DemoSection title="Vertical Stepper">
        <Stepper activeStep={activeStepVertical} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
              <StepContent>
                <Typography>Here is the content for {step}.</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button variant="contained" onClick={handleNextVertical} sx={{ mt: 1, mr: 1 }}>
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button disabled={index === 0} onClick={handleBackVertical} sx={{ mt: 1, mr: 1 }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStepVertical === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleResetVertical} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </DemoSection>
    </Box>
  );
}
