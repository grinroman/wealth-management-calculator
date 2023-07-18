import React, { useState } from 'react';

import { Box, Stack, Paper, styled } from '@mui/material';
import { roundUpToWholePart } from 'calculations/common/roundUpToWholePart';
import { splitEvery3DigitWithSpace } from 'calculations/common/splitEvery3DigitWithSpace';

import { InputCostsEarningsCalcType } from 'types/InputCostsEarningsCalcType';
import { ModalDetailedView } from './partials/ModalDetailedView';
import { getChartValuesInPercentMeasure } from 'calculations/common/getChartValuesInPercentMeasure';
import Typography from 'components/Typography';
import styles from './chart-component.module.scss';
import { ChartBarItem } from './partials/ChartBarItem';
import { OutputCostsEarningsIterationType } from 'types/OutputCostsEarningsIterationType';

type ChartComponentProps = {
  label: string;
  initialCapital: number;
  chartInfo: OutputCostsEarningsIterationType & { opportynityCosts?: number };
};

const ChartComponent: React.FC<ChartComponentProps> = ({
  label,
  initialCapital,
  chartInfo,
}) => {
  const {
    startingBalanceArr,
    earningArr,
    costsArr,
    closingBalanceArr,
    earningsTotal,
    costsTotal,
    opportynityCosts,
  } = chartInfo;

  const total =
    initialCapital +
    earningsTotal -
    costsTotal +
    (opportynityCosts === undefined ? 0 : opportynityCosts);

  const {
    initialCapitalPercent,
    totalEarningsPercent,
    constsPercent,
    oportynityCostsPercent,
  } = getChartValuesInPercentMeasure(
    initialCapital,
    earningsTotal,
    -costsTotal,
    total,
    opportynityCosts
  );

  // console.log('oportynityCostsPercent ', oportynityCostsPercent);

  const [open, setOpen] = useState(false);
  const openModalHandler = () => setOpen(true);
  const closeModalHandler = () => setOpen(false);

  return (
    <Box className={styles.root}>
      <ModalDetailedView
        title={label}
        handleClose={closeModalHandler}
        isOpen={open}
        startingBalanceArr={startingBalanceArr}
        earningArr={earningArr}
        costsArr={costsArr}
        closingBalanceArr={closingBalanceArr}
      />
      <Box className={styles.root__heading}>
        <Typography preset="common-1" color="darkgreyed" fontFamily="poppins">
          {label}
        </Typography>
        <button onClick={openModalHandler}>
          <Typography
            preset="common-1"
            color="blued"
            fontFamily="poppins"
            isUnderlined
          >
            View details
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
            isAsPc
          />
        ) : null}

        {totalEarningsPercent ? (
          <ChartBarItem
            percentageWidth={totalEarningsPercent}
            label="Total earnings"
            value={earningsTotal}
            color="green"
            ifNeedToMiddle={totalEarningsPercent - initialCapitalPercent >= 20}
          />
        ) : null}

        {constsPercent ? (
          <ChartBarItem
            percentageWidth={constsPercent}
            label="Costs"
            value={-costsTotal}
            color="red1"
            ifNeedToGetUp={totalEarningsPercent - constsPercent <= 20}
          />
        ) : null}

        {oportynityCostsPercent && opportynityCosts ? (
          <ChartBarItem
            percentageWidth={oportynityCostsPercent}
            label="Opportunity cost"
            value={opportynityCosts}
            color="red2"
            ifNeedToGetUp={true}
          />
        ) : null}
      </Stack>
    </Box>
  );
};

export default ChartComponent;
