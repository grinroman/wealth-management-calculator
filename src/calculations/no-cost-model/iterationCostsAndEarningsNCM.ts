import { InputCostsEarningsCalcType } from 'types/InputCostsEarningsCalcType';
import { OutputCostsEarningsIterationType } from 'types/OutputCostsEarningsIterationType';

export const iterationCostsAndEarningsNCM = ({
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
      } else {
        newEarning = 0;
      }
      newCost = 0;
      closingBalance = Math.round(startingBalance + newEarning);
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
