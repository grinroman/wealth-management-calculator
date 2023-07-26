import React from 'react';
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableContainer,
  Box,
  Modal,
  Button,
  IconButton,
  Paper,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

import styles from './modal-detailed-view.module.scss';
import Typography from 'components/Typography';
import { splitEvery3DigitWithSpace } from 'calculations/common/splitEvery3DigitWithSpace';
import { useTranslation } from 'react-i18next';

type ModalDetailedViewProps = {
  title: string;
  isOpen: boolean;
  startingBalanceArr: number[];
  earningArr: number[];
  costsArr: number[];
  closingBalanceArr: number[];

  handleClose: () => void;
};

export const ModalDetailedView: React.FC<ModalDetailedViewProps> = ({
  title,
  isOpen,
  startingBalanceArr,
  earningArr,
  costsArr,
  closingBalanceArr,
  handleClose,
}) => {
  const rows: any[] = [];

  for (let i = 0; i < startingBalanceArr.length; i++) {
    rows.push({
      year: i + 1,
      startingBalanceIteation: startingBalanceArr[i],
      earningsIteration: earningArr[i],
      costsIteration: costsArr[i],
      closingBalanceIteration: closingBalanceArr[i],
    });
  }

  const { t } = useTranslation();

  return (
    <Modal
      className={styles.root}
      keepMounted
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box className={styles.root__modal}>
        <button className={styles.root__modalCross} onClick={handleClose}>
          <img src="/cross-icon.svg" alt="cross-icon" />
        </button>
        <Box className={styles.root__modalTitle}>
          <Typography
            preset="heading-2"
            color="blacked"
            fontFamily="poppins"
            align="center"
          >
            {title}
          </Typography>
        </Box>
        <TableContainer>
          <Table
            aria-label="details tabel"
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: 'none',
              },
            }}
            className={styles.root__modalTable}
          >
            <TableHead className={styles.root__modalTable__header}>
              <TableRow>
                <TableCell align="left">
                  <Typography
                    preset="common-1"
                    color="greyed"
                    fontFamily="poppins"
                    className={styles.root__modalTable__headerBordered}
                  >
                    {t('modal.years')}&nbsp;
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    preset="common-1"
                    color="greyed"
                    fontFamily="poppins"
                    className={styles.root__modalTable__headerBordered}
                  >
                    Starting balance&nbsp;
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    preset="common-1"
                    color="greyed"
                    fontFamily="poppins"
                    className={styles.root__modalTable__headerBordered}
                  >
                    {t('modal.earnings')}&nbsp;
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    preset="common-1"
                    color="greyed"
                    fontFamily="poppins"
                    className={styles.root__modalTable__headerBordered}
                  >
                    {t('modal.costs')}&nbsp;
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    preset="common-1"
                    color="greyed"
                    fontFamily="poppins"
                  >
                    {t('modal.closingBalance')}&nbsp;
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={styles.root__modalTable__body}>
              {rows.map((row) => (
                <TableRow
                  key={row.year}
                  className={styles.root__modalTable__bodyRow}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    // sx={{ borderRadius: '10px 0 0 10px' }}
                  >
                    <Typography
                      preset="price-3"
                      color="blacked"
                      fontFamily="poppins"
                    >
                      {row.year}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      preset="price-3"
                      color="blacked"
                      fontFamily="poppins"
                    >
                      {splitEvery3DigitWithSpace(row.startingBalanceIteation)} €
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      preset="price-3"
                      color="greened"
                      fontFamily="poppins"
                    >
                      {splitEvery3DigitWithSpace(row.earningsIteration)} €
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      preset="price-3"
                      color="redded"
                      fontFamily="poppins"
                    >
                      {splitEvery3DigitWithSpace(row.costsIteration)} €
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="left"
                    // sx={{ borderRadius: '0 10px 10px 0' }}
                  >
                    <Typography
                      preset="price-3"
                      color="blacked"
                      fontFamily="poppins"
                    >
                      {splitEvery3DigitWithSpace(row.closingBalanceIteration)} €
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
};
