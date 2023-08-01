import React, { useState } from 'react';
import { AppBar, FormControl, Select, MenuItem, Toolbar } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import styles from './the-header.module.scss';
import i18n from 'i18';

const lngs: Record<string, string> = {
  en: 'en',
  fi: 'fi',
};

const TheHeader = () => {
  const [locale, setLocale] = useState<string>('fi');

  const localeChangeHandler = (event: SelectChangeEvent) => {
    setLocale(event.target.value);
    i18n.changeLanguage(event.target.value);

    // console.log('locale ', event.target.value);
    // i18n.changeLanguage(event.target.value);
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
            value={lngs[locale]}
            onChange={localeChangeHandler}
            defaultValue={lngs[locale]}
            disableUnderline
          >
            {Object.keys(lngs).map((lng: string) => (
              <MenuItem key={lng} value={lng}>
                {lngs[lng]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default TheHeader;
