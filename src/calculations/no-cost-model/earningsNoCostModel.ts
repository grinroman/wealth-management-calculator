import { InputCostsEarningsCalcType } from 'types/InputCostsEarningsCalcType';

/**
 * Function for calculation of EARNINGS by NO COST MODEL
 * @params - all params has the same meaning as alias of the params' names
 * @returns the calculated value of total COSTS for no cost model
 */

export const earningsNoCostModel = ({
  initialCapital,
  investmentDuration,
  annualGainExpectation,
  wmAndProductFees,
}: InputCostsEarningsCalcType) => {
  annualGainExpectation = annualGainExpectation / 100;
  wmAndProductFees = wmAndProductFees / 100;

  return (
    (initialCapital *
      annualGainExpectation *
      (1 - (1 + annualGainExpectation) ** investmentDuration)) /
    (1 - (1 + annualGainExpectation))
  );
};
