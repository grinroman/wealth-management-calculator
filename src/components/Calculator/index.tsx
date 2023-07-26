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

import { iterationCostsAndEarningsHPM } from 'calculations/models/iterationCostsAndEarningsHPM';
import { iterationCostsAndEarningsWMM } from 'calculations/models/iterationCostsAndEarningsWMM';
import { OutputCostsEarningsIterationType } from 'types/OutputCostsEarningsIterationType';
import { iterationCostsAndEarningsNCM } from 'calculations/models/iterationCostsAndEarningsNCM';

import { useTranslation } from 'react-i18next';

import styles from './calculator.module.scss';

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
  const [stateWMM, setStateWMM] = useState<
    (OutputCostsEarningsIterationType & { opportynityCosts: number }) | null
  >(null);
  const [stateNCM, setStateNCM] =
    useState<OutputCostsEarningsIterationType | null>(null);

  useEffect(() => {
    let inputCalcObj = {
      initialCapital,
      investmentDuration,
      annualGainExpectation,
      wmAndProductFees,
    };
    const currentStateNCM = iterationCostsAndEarningsNCM(inputCalcObj);
    const earningsNCM = currentStateNCM?.earningsTotal;
    setStateNCM(currentStateNCM);

    const hpmCalcObj = Object.assign(inputCalcObj, {
      earningsNCM: earningsNCM as number,
    });
    setStateHPM(iterationCostsAndEarningsHPM(hpmCalcObj));

    const wmmCalcObj = Object.assign(inputCalcObj, {
      earningsNCM: earningsNCM as number,
    });
    setStateWMM(iterationCostsAndEarningsWMM(wmmCalcObj));
  }, []);

  useEffect(() => {
    let inputCalcObj = {
      initialCapital,
      investmentDuration,
      annualGainExpectation,
      wmAndProductFees,
    };
    const currentStateNCM = iterationCostsAndEarningsNCM(inputCalcObj);
    const earningsNCM = currentStateNCM?.earningsTotal;
    setStateNCM(currentStateNCM);

    const hpmCalcObj = Object.assign(inputCalcObj, {
      earningsNCM: earningsNCM as number,
    });
    setStateHPM(iterationCostsAndEarningsHPM(hpmCalcObj));

    const wmmCalcObj = Object.assign(inputCalcObj, {
      earningsNCM: earningsNCM as number,
    });
    setStateWMM(iterationCostsAndEarningsWMM(wmmCalcObj));
  }, [
    initialCapital,
    investmentDuration,
    annualGainExpectation,
    wmAndProductFees,
  ]);

  const { t } = useTranslation();

  return (
    <>
      <Typography
        preset="heading-1"
        color="blacked"
        fontFamily="object-sants"
        component="h1"
        className={styles.root__title}
      >
        {t('title')}
      </Typography>
      <Grid container columnSpacing={2} rowSpacing={5}>
        <Grid item xs={12} md={4}>
          <Box className={styles.root__subheading}>
            <Typography
              preset="subtitle-1"
              color="blacked"
              fontFamily="poppins"
            >
              {t('calculator.heading')}
            </Typography>
          </Box>
          <Paper className={styles.root__calculator}>
            <SliderWithInput
              minValue={INITIAL_CAPITAL_MIN}
              maxValue={INITIAL_CAPITAL_MAX}
              stepValue={INITIAL_CAPITAL_STEP}
              textLabel={t('calculator.paramas.initial')}
              measureTextLabel="€"
              sliderValue={initialCapital}
              setSliderValue={setInitialCapital}
            />
            <SliderWithInput
              minValue={INVESTMENT_DURATION_MIN}
              maxValue={INVESTMENT_DURATIN_MAX}
              stepValue={INVESTMENT_DURATION_STEP}
              textLabel={t('calculator.paramas.investment')}
              measureTextLabel={t('calculator.paramas.years')}
              sliderValue={investmentDuration}
              setSliderValue={setInvestmentDuration}
            />
            <SliderWithInput
              minValue={ANNUAL_GAIN_EXPECTATION_MIN}
              maxValue={ANNUAL_GAIN_EXPECTATION_MAX}
              stepValue={ANNUAL_GAIN_EXPECTATION_STEP}
              textLabel={t('calculator.paramas.annual')}
              measureTextLabel="%"
              sliderValue={annualGainExpectation}
              setSliderValue={setAnnualGainExpectation}
            />
            <SliderWithInput
              minValue={W_M_AND_PROD_FEES_MIN}
              maxValue={W_M_AND_PROD_FEES_MAX}
              stepValue={W_M_AND_PROD_FEES_STEP}
              textLabel={t('calculator.paramas.fees')}
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
              {t('outputs.heading')}
            </Typography>
          </Box>
          <Paper className={styles.root__charts}>
            {stateWMM && (
              <ChartComponent
                label={t('outputs.models.wmm')}
                initialCapital={initialCapital}
                chartInfo={stateWMM}
              />
            )}
            {stateHPM && (
              <ChartComponent
                label={t('outputs.models.hpm')}
                initialCapital={initialCapital}
                chartInfo={stateHPM}
              />
            )}
            {stateNCM && (
              <ChartComponent
                label={t('outputs.models.ncm')}
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
