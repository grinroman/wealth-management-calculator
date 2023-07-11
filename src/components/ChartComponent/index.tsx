import React from 'react';

import { Box, Stack, Paper, styled } from '@mui/material';
import { roundUpToWholePart } from 'calculations/common/roundUpToWholePart';
import { splitEvery3DigitWithSpace } from 'calculations/common/splitEvery3DigitWithSpace';

import { InputCostsEarningsCalcType } from 'types/InputCostsEarningsCalcType';
import { ChartBarItem } from './partials/ChartBarItem';
import { getChartValuesInPercentMeasure } from 'calculations/common/getChartValuesInPercentMeasure';
import Typography from 'components/Typography';

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

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '95px',
          gap: '8px',
        }}
      >
        <Box sx={{ minWidth: '145px' }}>
          <Typography
            preset="common-1"
            color="darkgreyed"
            fontFamily="poppins"
            align="right"
          >
            {label}
          </Typography>
        </Box>
        <Stack direction="row" spacing={0} sx={{ width: '100%' }}>
          <ChartBarItem
            percentageWidth={initialCapitalPercent}
            label="Investment"
            value={initialCapital}
            color="grey"
          />
          <ChartBarItem
            percentageWidth={toalEarningsPercent}
            label="Total earnings"
            value={totalEarnings}
            color="green"
          />
          <ChartBarItem
            percentageWidth={constsPercent}
            label="Costs"
            value={costs}
            color="red"
            ifNeedToGetUp={toalEarningsPercent - constsPercent <= 15}
          />
        </Stack>
      </Box>
    </>
  );
};

export default ChartComponent;
