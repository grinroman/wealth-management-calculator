import React from 'react';
import { Box } from '@mui/material';
import clsx from 'clsx';
import styles from './chart-bar-item.module.scss';
import Typography from 'components/Typography';
import { splitEvery3DigitWithSpace } from 'calculations/common/splitEvery3DigitWithSpace';

enum Color {
  grey = '#E8E9E9',
  green = '#53B7A1',
  red1 = `repeating-linear-gradient(
    -60deg,
    #F28181,
    #F28181 1px,
    #ffeded 1px,
    #ffeded 5px
  );`,
  red2 = '#ffeded',
}

type ChartBarItemProps = {
  percentageWidth: number;
  label: string;
  value: number;
  color: 'grey' | 'green' | 'red1' | 'red2';
  ifNeedToGetUp?: boolean;
  ifNeedToMiddle?: boolean;
  isAsPc?: boolean;
};

export const ChartBarItem: React.FC<ChartBarItemProps> = ({
  percentageWidth,
  label,
  value,
  color,
  ifNeedToGetUp,
  ifNeedToMiddle,
  isAsPc,
}) => {
  return (
    <Box
      sx={{
        background: Color[color],
        width: `${percentageWidth}%`,
      }}
      className={clsx(
        styles.root,
        (color === 'red1' || color === 'red2') && styles['isRed'],
        color === 'grey' && styles['isGrey']
      )}
    >
      {!!value && (
        <div
          className={clsx(
            styles.root__tip,
            isAsPc && styles['isAsPcTip'],
            ifNeedToGetUp && styles['tipTop'],
            ifNeedToMiddle && styles['labelBottomMiddle']
          )}
        >
          <div
            className={clsx(
              styles.root__tip__label,
              ifNeedToGetUp && styles['labelTop'],
              isAsPc && styles['isAsPcLabel']
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
              isAsPc && styles['isAsPcPricing']
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
