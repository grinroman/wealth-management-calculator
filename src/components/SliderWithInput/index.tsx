import React from 'react';

import { Slider, Box } from '@mui/material';
import Typography from '../Typography';
import { splitEvery3DigitWithSpace } from 'calculations/common/splitEvery3DigitWithSpace';
import styles from './slider-with-input.module.scss';

type SliderWithInputProps = {
  minValue: number;
  maxValue: number;
  stepValue: number;
  textLabel: string;
  measureTextLabel: string;
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
};

const SliderWithInput: React.FC<SliderWithInputProps> = ({
  minValue,
  maxValue,
  stepValue,
  textLabel,
  measureTextLabel,
  sliderValue,
  setSliderValue,
}) => {
  const sliderChangeHandler = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  return (
    <Box className={styles.root}>
      <Box className={styles.root__textinfo}>
        <Box className={styles.root__textinfo__title}>
          <Typography preset="common-1" color="darkgreyed" fontFamily="poppins">
            {textLabel}
          </Typography>
        </Box>
        <Box className={styles.root__textinfo__valuewr}>
          <Box className={styles.root__textinfo__valuewr__valuebrdr}>
            <Typography
              preset="price-1"
              color="darkgreyed"
              fontFamily="poppins"
            >
              {splitEvery3DigitWithSpace(sliderValue)}
            </Typography>
          </Box>
          <Typography
            preset="subtitle-2"
            color="darkgreyed"
            fontFamily="poppins"
          >
            {measureTextLabel}
          </Typography>
        </Box>
      </Box>
        {/*FIXME: add to scss*/}
      <Slider
        className={styles.root__slider}
        sx={{
          '& .MuiSlider-thumb': {
            color: '#ffffff',
            height: 16,
            width: 16,
          },
          '& .MuiSlider-track': {
            color: '#333333',
            height: '8px',
          },
          '& .MuiSlider-rail': {
            color: '#DDDCE0',
            height: '8px',
          },
          '& .MuiSlider-active': {
            color: 'red',
          },
        }}
        value={sliderValue}
        onChange={sliderChangeHandler}
        aria-labelledby="input-slider"
        step={stepValue}
        min={minValue}
        max={maxValue}
      />
    </Box>
  );
};

export default SliderWithInput;
