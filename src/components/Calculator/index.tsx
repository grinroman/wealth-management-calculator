import React from 'react';
import { Grid, Paper, Box } from '@mui/material';
import Typography from 'components/Typography';
import SliderWithInput from 'components/SliderWithInput';

const Calculator: React.FC = () => {
  
  return (
    <>
      <Box sx={{ mb: 8 }}>
        <Typography
          preset={'heading-1'}
          color={'blacked'}
          fontFamily={'poppins'}
          align="center"
        >
          Wealth management cost caltulator
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper style={{ height: '100%' }} sx={{ px: 4, pt: 5, pb: 4 }}>
            <SliderWithInput
              minValue={1000000}
              maxValue={10000000}
              stepValue={100000}
              label="Initial capital"
              measureLabel="€"
            />
            <SliderWithInput
              minValue={1}
              maxValue={30}
              stepValue={1}
              label="Investment duration"
              measureLabel="years"
            />
            <SliderWithInput
              minValue={1}
              maxValue={100}
              stepValue={1}
              label="Annual gain expectation"
              measureLabel="%"
            />
            <SliderWithInput
              minValue={1}
              maxValue={10}
              stepValue={0.1}
              label="Wealth management & product fees"
              measureLabel="%"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper style={{ height: '100%' }} sx={{ px: 1, pt: 2, pb: 4 }}>
            lalalall
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Calculator;
