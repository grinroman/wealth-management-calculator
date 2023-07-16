import React, { useState, useEffect } from 'react';

import { Grid, Paper, Box } from '@mui/material';
import Typography from 'components/Typography';
import SliderWithInput from 'components/SliderWithInput';
import ChartComponent from '../ChartComponent';

import {
  INITIAL_CAPITAL_DEFAULT,
  INITIAL_CAPITAL_MIN,
  INITIAL_CAPITAL_MAX,
  INITIAL_CAPITAL_STEP,
  INVESTMENT_DURATION_DEFAULT,
  INVESTMENT_DURATION_MIN,
  INVESTMENT_DURATIN_MAX,
  INVESTMENT_DURATION_STEP,
  ANNUAL_GAIN_EXPECTATION_DEFAULT,
  ANNUAL_GAIN_EXPECTATION_MIN,
  ANNUAL_GAIN_EXPECTATION_MAX,
  ANNUAL_GAIN_EXPECTATION_STEP,
  W_M_AND_PROD_FEES_DEFAULT,
  W_M_AND_PROD_FEES_MIN,
  W_M_AND_PROD_FEES_MAX,
  W_M_AND_PROD_FEES_STEP,
} from 'constants/calculatorConstants';
import styles from './calculator.module.scss';
import { iterationCostsAndEarningsHPM } from 'calculations/models/iterationCostsAndEarningsHPM';
import { iterationCostsAndEarningsWMM } from 'calculations/models/iterationCostsAndEarningsWMM';
import { OutputCostsEarningsIterationType } from 'types/OutputCostsEarningsIterationType';
import { iterationCostsAndEarningsNCM } from 'calculations/models/iterationCostsAndEarningsNCM';

const Calculator: React.FC = () => {
  //states of calculator
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
  //states of model values
  const [stateHPM, setStateHPM] =
    useState<OutputCostsEarningsIterationType | null>(null);
  const [stateWMM, setStateWMM] =
    useState<OutputCostsEarningsIterationType | null>(null);
  const [stateNCM, setStateNCM] =
    useState<OutputCostsEarningsIterationType | null>(null);

  useEffect(() => {
    const inputCalcObj = {
      initialCapital,
      investmentDuration,
      annualGainExpectation,
      wmAndProductFees,
    };
    setStateHPM(iterationCostsAndEarningsHPM(inputCalcObj));
    setStateWMM(iterationCostsAndEarningsWMM(inputCalcObj));
    setStateNCM(iterationCostsAndEarningsNCM(inputCalcObj));
  }, []);

  useEffect(() => {
    const inputCalcObj = {
      initialCapital,
      investmentDuration,
      annualGainExpectation,
      wmAndProductFees,
    };
    setStateHPM(iterationCostsAndEarningsHPM(inputCalcObj));
    setStateWMM(iterationCostsAndEarningsWMM(inputCalcObj));
    setStateNCM(iterationCostsAndEarningsNCM(inputCalcObj));
  }, [
    initialCapital,
    investmentDuration,
    annualGainExpectation,
    wmAndProductFees,
  ]);

  return (
    <>
      <Typography
        preset="heading-1"
        color="blacked"
        fontFamily="object-sants"
        component="h1"
        className={styles.root__title}
      >
        Wealth management cost calculator
      </Typography>
      <Grid container columnSpacing={2} rowSpacing={5}>
        <Grid item xs={12} md={4}>
          <Box className={styles.root__subheading}>
            <Typography
              preset="subtitle-1"
              color="blacked"
              fontFamily="poppins"
            >
              Data for calculate
            </Typography>
          </Box>
          <Paper className={styles.root__calculator}>
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
          <Box className={styles.root__subheading}>
            <Typography
              preset="subtitle-1"
              color="blacked"
              fontFamily="poppins"
            >
              Impact on wealth management fees on total gains
            </Typography>
          </Box>
          <Paper className={styles.root__charts}>
            {stateWMM && (
              <ChartComponent
                label="Wealth management model"
                initialCapital={initialCapital}
                chartInfo={stateWMM}
              />
            )}
            {stateHPM && (
              <ChartComponent
                label="Hourly priced model"
                initialCapital={initialCapital}
                chartInfo={stateHPM}
              />
            )}
            {stateNCM && (
              <ChartComponent
                label="No cost model"
                initialCapital={initialCapital}
                chartInfo={stateNCM}
              />
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Calculator;
