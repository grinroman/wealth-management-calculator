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
import styles from './the-header.module.scss';

const TheHeader = () => {
  const [locale, setLocale] = React.useState('Eng');

  const localeChangeHandler = (event: SelectChangeEvent) => {
    setLocale(event.target.value);
  };

  return (
    <AppBar
      elevation={0}
      className={styles.root}
      color="transparent"
      position="static"
    >
      <Toolbar className={styles.root__toolbar}>
        <FormControl variant="standard">
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
