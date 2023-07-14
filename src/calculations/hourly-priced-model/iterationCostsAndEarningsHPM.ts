import { InputCostsEarningsCalcType } from 'types/InputCostsEarningsCalcType';
import { OutputCostsEarningsIterationType } from 'types/OutputCostsEarningsIterationType';

export const iterationCostsAndEarningsHPM = ({
  initialCapital,
  investmentDuration,
  annualGainExpectation,
  wmAndProductFees,
}: InputCostsEarningsCalcType): OutputCostsEarningsIterationType => {
  annualGainExpectation = annualGainExpectation / 100;
  wmAndProductFees = wmAndProductFees / 100;
  let newEarning,
    newCost,
    closingBalance,
    startingBalance = initialCapital;
  const costsArr: number[] = [];
  const earningArr: number[] = [];
  const startingBalanceArr: number[] = [];
  const closingBalanceArr: number[] = [];

  for (let year = 1; year <= investmentDuration; year++) {
    startingBalanceArr.push(startingBalance);
    if (year <= investmentDuration) {
      newEarning = Math.round(annualGainExpectation * startingBalance);
      if (year === 1) {
        newCost = -5000;
      } else if (year % 10 === 0) {
        newCost = -5000;
      } else if (year % 5 === 0) {
        newCost = -2500;
      } else {
        newCost = -1000;
      }
    } else {
      newEarning = 0;
      newCost = 0;
    }
    if (year === 1) {
      closingBalance = startingBalance + newEarning + newCost;
    } else {
      closingBalance = startingBalance + newEarning;
    }
    startingBalance = closingBalance;
    costsArr.push(newCost);
    earningArr.push(newEarning);
    closingBalanceArr.push(closingBalance);
  }


  return {
    startingBalanceArr,
    earningArr,
    costsArr,
    closingBalanceArr,
  };
};
