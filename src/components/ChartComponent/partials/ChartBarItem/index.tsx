import React from 'react';
import { Box } from '@mui/material';
import clsx from 'clsx';
import styles from './chart-bar-item.module.scss';
import Typography from 'components/Typography';
import { splitEvery3DigitWithSpace } from 'calculations/common/splitEvery3DigitWithSpace';

enum Color {
  grey = 'isGrey',
  green = 'isGreen',
  red1 = `isRed1`,
  red2 = 'isRed2',
}

type ChartBarItemProps = {
  percentageWidth: number;
  label: string;
  value: number;
  color: 'grey' | 'green' | 'red1' | 'red2';
  ifNeedToGetUp?: boolean;
  ifNeedToMiddle?: boolean;
  ifNeedToReverseTip?: boolean;
};

export const ChartBarItem: React.FC<ChartBarItemProps> = ({
  percentageWidth,
  label,
  value,
  color,
  ifNeedToGetUp,
  ifNeedToMiddle,
  ifNeedToReverseTip,
}) => {
  return (
    <Box
      sx={{
        width: `${percentageWidth}%`,
      }}
      className={clsx(styles.root, styles[Color[color]])}
    >
      {!!value && (
        <div
          className={clsx(
            styles.root__tip,
            ifNeedToGetUp && styles['tipTop'],
            ifNeedToMiddle && styles['labelBottomMiddle'],
            ifNeedToReverseTip && styles['tipBottomReverse']
          )}
        >
          <div
            className={clsx(
              styles.root__tip__label,
              ifNeedToGetUp && styles['labelTop'],
              ifNeedToReverseTip && styles['labelBottomReverse']
            )}
          >
            <Typography preset="subtitle-2" color="greyed" fontFamily="poppins">
              {label}
            </Typography>
          </div>
          <div
            className={clsx(
              styles.root__tip__pricing,
              ifNeedToGetUp && styles['pricingTop'],
              ifNeedToReverseTip && styles['pricingBottomReverse']
            )}
          >
            <Typography preset="price-2" color="blacked" fontFamily="poppins">
              € {splitEvery3DigitWithSpace(value)}
            </Typography>
          </div>
        </div>
      )}
    </Box>
  );
};
