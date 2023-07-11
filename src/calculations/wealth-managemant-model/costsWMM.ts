import { InputCostsEarningsCalcType } from 'types/InputCostsEarningsCalcType';

/**
 * Function for calculation of COSTS by WEALTH MANAGEMENT MODEL
 * @params - all params has the same meaning as alias of the params' names
 * @returns the calculated value of total COSTS wor weal management model
 */

export const costsWMM = ({
  initialCapital,
  investmentDuration,
  annualGainExpectation,
  wmAndProductFees,
}: InputCostsEarningsCalcType): number => {
  annualGainExpectation = annualGainExpectation / 100;
  wmAndProductFees = wmAndProductFees / 100;

  return (
    (initialCapital *
      wmAndProductFees *
      (1 + annualGainExpectation) *
      (1 -
        ((1 + annualGainExpectation) * (1 - wmAndProductFees)) **
          investmentDuration)) /
    (1 - (1 + annualGainExpectation) * (1 - wmAndProductFees))
  );
};
