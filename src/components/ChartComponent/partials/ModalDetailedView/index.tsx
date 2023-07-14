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
  IconButton,
  Paper,
} from '@mui/material';
import styles from './modal-detailed-view.module.scss';
import Typography from 'components/Typography';

type ModalDetailedViewProps = {
  handleClose: () => void;
  isOpen: boolean;
};

export const ModalDetailedView: React.FC<ModalDetailedViewProps> = ({
  handleClose,
  isOpen,
}) => {

 let totalCost = 0;
  
 // Finding the Total Cost
 rows.forEach((row) => (totalCost += row.price));

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
        <IconButton className={styles.root__modalCross}>
          <img src="/cross-icon.svg" alt="cross-icon" />
        </IconButton>
        <Box className={styles.root__modalTitle}>
          <Typography
            preset="heading-2"
            color="blacked"
            fontFamily="poppins"
            align="center"
          >
            Wealth management percentage based model
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell align="right">Item</TableCell>
                <TableCell align="right">Quantity&nbsp;(kg)</TableCell>
                <TableCell align="right">Price&nbsp;($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.number}>
                  <TableCell component="th" scope="row">
                    {row.number}
                  </TableCell>
                  <TableCell align="right">{row.item}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
              <TableRow className={classes.finalRow}>
                <TableCell align="right" colSpan={4}>
                  <b>Total Cost:</b> ${totalCost}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
};
