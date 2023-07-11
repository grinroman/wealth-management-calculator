import React, { useState } from 'react';
import { Grid, Paper, Box } from '@mui/material';
import Typography from 'components/Typography';
import SliderWithInput from 'components/SliderWithInput';
import ChartComponent from '../ChartComponent';
import { costsWMM } from 'calculations/wealth-managemant-model/costsWMM';
import { earningsWMM } from 'calculations/wealth-managemant-model/earningsWMM';
import { roundUpToWholePart } from 'calculations/common/roundUpToWholePart';
import { costsNoCostModel } from 'calculations/no-cost-model/costsNoCostModel';
import { earningsNoCostModel } from 'calculations/no-cost-model/earningsNoCostModel';

const INITIAL_CAPITAL_DEFAULT = 500_000;
const INITIAL_CAPITAL_MIN = 100_000;
const INITIAL_CAPITAL_MAX = 10_000_000;
const INITIAL_CAPITAL_STEP = 100_000;

const INVESTMENT_DURATION_DEFAULT = 2;
const INVESTMENT_DURATION_MIN = 1;
const INVESTMENT_DURATIN_MAX = 50;
const INVESTMENT_DURATION_STEP = 1;

const ANNUAL_GAIN_EXPECTATION_DEFAULT = 7;
const ANNUAL_GAIN_EXPECTATION_MIN = 1;
const ANNUAL_GAIN_EXPECTATION_MAX = 100;
const ANNUAL_GAIN_EXPECTATION_STEP = 1;

const W_M_AND_PROD_FEES_DEFAULT = 2.0;
const W_M_AND_PROD_FEES_MIN = 1.0;
const W_M_AND_PROD_FEES_MAX = 10.0;
const W_M_AND_PROD_FEES_STEP = 0.1;

const Calculator: React.FC = () => {
  const [initialCapital, setInitialCapital] = useState<number>(
    INITIAL_CAPITAL_DEFAULT
  );
  const [investmentDuration, setInvestmentDuration] = useState<number>(
    INVESTMENT_DURATION_DEFAULT
  );
  const [annualGainExpectation, setAnnualGainExpectation] = useState<number>(
    ANNUAL_GAIN_EXPECTATION_DEFAULT
  );
  const [wmAndProductFees, setWmAndProductFees] = useState<number>(
    W_M_AND_PROD_FEES_DEFAULT
  );

  return (
    <>
      <Box sx={{ mb: 8 }}>
        <Typography
          preset="heading-1"
          color="blacked"
          fontFamily="poppins"
          align="center"
        >
          Wealth management cost calculator
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 1 }}>
            <Typography
              preset="subtitle-1"
              color="blacked"
              fontFamily="poppins"
            >
              Data for calculate
            </Typography>
          </Box>
          <Paper style={{ height: '100%' }} sx={{ px: 4, pt: 5, pb: 4 }}>
            <SliderWithInput
              minValue={INITIAL_CAPITAL_MIN}
              maxValue={INITIAL_CAPITAL_MAX}
              stepValue={INITIAL_CAPITAL_STEP}
              textLabel="Initial capital"
              measureTextLabel="€"
              sliderValue={initialCapital}
              setSliderValue={setInitialCapital}
            />
            <SliderWithInput
              minValue={INVESTMENT_DURATION_MIN}
              maxValue={INVESTMENT_DURATIN_MAX}
              stepValue={INVESTMENT_DURATION_STEP}
              textLabel="Investment duration"
              measureTextLabel="years"
              sliderValue={investmentDuration}
              setSliderValue={setInvestmentDuration}
            />

            <SliderWithInput
              minValue={ANNUAL_GAIN_EXPECTATION_MIN}
              maxValue={ANNUAL_GAIN_EXPECTATION_MAX}
              stepValue={ANNUAL_GAIN_EXPECTATION_STEP}
              textLabel="Annual gain expectation"
              measureTextLabel="%"
              sliderValue={annualGainExpectation}
              setSliderValue={setAnnualGainExpectation}
            />

            <SliderWithInput
              minValue={W_M_AND_PROD_FEES_MIN}
              maxValue={W_M_AND_PROD_FEES_MAX}
              stepValue={W_M_AND_PROD_FEES_STEP}
              textLabel="Wealth management & product fees"
              measureTextLabel="%"
              sliderValue={wmAndProductFees}
              setSliderValue={setWmAndProductFees}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography preset="subtitle-1" color="blacked" fontFamily="poppins">
            Impact on wealth management fees on total gains
          </Typography>
          <Box sx={{ mb: 1 }}></Box>
          <Paper style={{ height: '100%' }} sx={{ px: 3, pt: 6, pb: 4 }}>
            {/*wealth management model */}
            <ChartComponent
              label="Wealth management model"
              initialCapital={initialCapital}
              totalEarnings={roundUpToWholePart(
                earningsWMM({
                  initialCapital,
                  investmentDuration,
                  annualGainExpectation,
                  wmAndProductFees,
                })
              )}
              costs={roundUpToWholePart(
                costsWMM({
                  initialCapital,
                  investmentDuration,
                  annualGainExpectation,
                  wmAndProductFees,
                })
              )}
            />
            {/*no cost model*/}
            <ChartComponent
              label="No cost model"
              initialCapital={initialCapital}
              totalEarnings={roundUpToWholePart(
                earningsNoCostModel({
                  initialCapital,
                  investmentDuration,
                  annualGainExpectation,
                  wmAndProductFees,
                })
              )}
              costs={costsNoCostModel()}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Calculator;
