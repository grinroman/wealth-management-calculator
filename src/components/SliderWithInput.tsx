import React, { useState } from 'react';

import { Slider, TextField, Box, Paper } from '@mui/material';
import Typography from './Typography';
import { splitZeros } from 'calculations/splitZeros';

type SliderWithInputProps = {
  minValue: number;
  maxValue: number;
  stepValue: number;
  textLabel: string;
  measureTextLabel: string;
};

const SliderWithInput: React.FC<SliderWithInputProps> = ({
  minValue,
  maxValue,
  stepValue,
  textLabel,
  measureTextLabel,
}) => {
  const [value, setValue] = useState<number>(minValue);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography preset="common-1" color="darkgreyed" fontFamily="poppins">
          {textLabel}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px;',
          }}
        >
          <Box
            sx={{
              borderRadius: '8px',
              border: '1px solid #DDDCE0',
              py: 1,
              px: 2,
            }}
          >
            <Typography
              preset="price-1"
              color="darkgreyed"
              fontFamily="poppins"
            >
              {splitZeros(value)}
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
      <Slider
        sx={{
          '& .MuiSlider-thumb': {
            color: '#ffffff',
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
        value={typeof value === 'number' ? value : 0}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
        step={stepValue}
        min={minValue}
        max={maxValue}
      />
    </Box>
  );
};

export default SliderWithInput;
