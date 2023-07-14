import React from 'react';

import { Box, Stack, Paper, styled } from '@mui/material';
import { roundUpToWholePart } from 'calculations/common/roundUpToWholePart';
import { splitEvery3DigitWithSpace } from 'calculations/common/splitEvery3DigitWithSpace';

import { InputCostsEarningsCalcType } from 'types/InputCostsEarningsCalcType';
import { ModalDetailedView } from './partials/ModalDetailedView';
import { getChartValuesInPercentMeasure } from 'calculations/common/getChartValuesInPercentMeasure';
import Typography from 'components/Typography';
import styles from './chart-component.module.scss';
import { ChartBarItem } from './partials/ChartBarItem';

type ChartComponentProps = {
  label: string;
  initialCapital: number;
  totalEarnings: number;
  costs: number;
};

const ChartComponent: React.FC<ChartComponentProps> = ({
  label,
  initialCapital,
  totalEarnings,
  costs,
}) => {
  const total = initialCapital + totalEarnings + costs;
  const { initialCapitalPercent, toalEarningsPercent, constsPercent } =
    getChartValuesInPercentMeasure(initialCapital, totalEarnings, costs, total);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className={styles.root}>
      <ModalDetailedView handleClose={handleClose} isOpen={open} />
      <Box className={styles.root__heading}>
        <Typography preset="common-1" color="darkgreyed" fontFamily="poppins">
          {label}
        </Typography>
        <button onClick={handleOpen}>
          <Typography
            preset="common-1"
            color="blued"
            fontFamily="poppins"
            isUnderlined
          >
            View
          </Typography>
        </button>
      </Box>
      <Stack direction="row" spacing={0} sx={{ width: '100%' }}>
        {initialCapitalPercent ? (
          <ChartBarItem
            percentageWidth={initialCapitalPercent}
            label="Investment"
            value={initialCapital}
            color="grey"
          />
        ) : null}

        {toalEarningsPercent ? (
          <ChartBarItem
            percentageWidth={toalEarningsPercent}
            label="Total earnings"
            value={totalEarnings}
            color="green"
            ifNeedToMiddle={toalEarningsPercent - initialCapitalPercent >= 15}
          />
        ) : null}

        {constsPercent ? (
          <ChartBarItem
            percentageWidth={constsPercent}
            label="Costs"
            value={costs}
            color="red"
            ifNeedToGetUp={toalEarningsPercent - constsPercent <= 15}
          />
        ) : null}
      </Stack>
    </Box>
  );
};

export default ChartComponent;
