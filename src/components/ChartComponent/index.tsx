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
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

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

      <Stack direction="row" spacing={0} sx={{ width: '100%' }}>
        {initialCapitalPercent ? (
          <ChartBarItem
            percentageWidth={initialCapitalPercent}
            label={t('outputs.bars.investment')}
            value={initialCapital}
            color="grey"
            isAsPc
          />
        ) : null}

        {totalEarningsPercent ? (
          <ChartBarItem
            percentageWidth={totalEarningsPercent}
            label={t('outputs.bars.totalEarnings')}
            value={earningsTotal}
            color="green"
            // ifNeedToMiddle={initialCapitalPercent < 2}
            ifNeedToGetUp={totalEarningsPercent < 30}
          />
        ) : null}

        {constsPercent ? (
          <ChartBarItem
            percentageWidth={constsPercent}
            label={t('outputs.bars.costs')}
            value={-costsTotal}
            color="red1"
            // ifNeedToGetUp={totalEarningsPercent - constsPercent <= 20}
          />
        ) : null}

        {oportynityCostsPercent && opportynityCosts ? (
          <ChartBarItem
            percentageWidth={oportynityCostsPercent}
            label={t('outputs.bars.compoundInterest')}
            value={opportynityCosts}
            color="red2"
            ifNeedToGetUp={true}
          />
        ) : null}
      </Stack>

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
            {t('outputs.details')}
          </Typography>
        </button>
      </Box>
    </Box>
  );
};

export default ChartComponent;
