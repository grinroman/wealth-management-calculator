import React from 'react';
import { Box } from '@mui/material';
import clsx from 'clsx';
import styles from './chart-bar-item.module.scss';
import Typography from 'components/Typography';
import { splitEvery3DigitWithSpace } from 'calculations/common/splitEvery3DigitWithSpace';

enum Color {
  grey = '#E8E9E9',
  green = '#53B7A1',
  red = `repeating-linear-gradient(
    -60deg,
    #F28181,
    #F28181 1px,
    #ffeded 1px,
    #ffeded 5px
  );`,
}

type ChartBarItemProps = {
  percentageWidth: number;
  label: string;
  value: number;
  color: 'grey' | 'green' | 'red';
  ifNeedToGetUp?: boolean;
  ifNeedToMiddle?: boolean;
};

export const ChartBarItem: React.FC<ChartBarItemProps> = ({
  percentageWidth,
  label,
  value,
  color,
  ifNeedToGetUp,
  ifNeedToMiddle,
}) => {
  return (
    <Box
      sx={{
        background: Color[color],
        width: `${percentageWidth}%`,
      }}
      className={clsx(styles.root, color === 'red' && styles['isRed'])}
    >
      {!!value && (
        <div
          className={clsx(
            styles.root__tip,
            ifNeedToGetUp && styles['tipTop'],
            ifNeedToMiddle && styles['labelBottomMiddle']
          )}
        >
          <div
            className={clsx(
              styles.root__tip__label,
              ifNeedToGetUp && styles['labelTop']
            )}
          >
            <Typography preset="subtitle-2" color="greyed" fontFamily="poppins">
              {label}
            </Typography>
          </div>
          <div
            className={clsx(
              styles.root__tip__pricing,
              ifNeedToGetUp && styles.pricingTop
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
