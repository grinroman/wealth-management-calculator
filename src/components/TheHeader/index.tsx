import React from 'react';
import {
  AppBar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Toolbar,
  Box,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const TheHeader = () => {
  const [locale, setLocale] = React.useState('Eng');

  const localeChangeHandler = (event: SelectChangeEvent) => {
    setLocale(event.target.value);
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        position: 'sticky',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      color="transparent"
      position="static"
    >
      <Toolbar
        disableGutters
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <FormControl variant="standard" sx={{ maxWidth: 55, float: 'right' }}>
          <Select
            id="locale-select-label"
            value={locale}
            onChange={localeChangeHandler}
            disableUnderline
          >
            <MenuItem value={'Eng'}>Eng</MenuItem>
            <MenuItem value={'Ukr'}>Ukr</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default TheHeader;
