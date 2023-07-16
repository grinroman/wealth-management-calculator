import currency from 'currency.js';

import { InputCostsEarningsCalcType } from 'types/InputCostsEarningsCalcType';
import { OutputCostsEarningsIterationType } from 'types/OutputCostsEarningsIterationType';

export const iterationCostsAndEarningsWMM = ({
  initialCapital,
  investmentDuration,
  annualGainExpectation,
  wmAndProductFees,
}: InputCostsEarningsCalcType): OutputCostsEarningsIterationType => {
  annualGainExpectation = currency(annualGainExpectation).divide(100).value;
  wmAndProductFees = currency(wmAndProductFees).divide(100).value;
  let newEarning,
    newCost,
    closingBalance,
    startingBalance = initialCapital,
    earningsTotal = 0,
    costsTotal = 0;
  const costsArr: number[] = [];
  const earningArr: number[] = [];
  const startingBalanceArr: number[] = [];
  const closingBalanceArr: number[] = [];

  for (let year = 1; year <= investmentDuration; year++) {
    startingBalanceArr.push(Math.round(startingBalance));
    if (year <= investmentDuration) {
      newEarning = currency(annualGainExpectation).multiply(
        startingBalance
      ).value;
      newCost = currency(wmAndProductFees).multiply(
        currency(startingBalance).add(newEarning).multiply(-1)
      ).value;
    } else {
      newCost = 0;
      newEarning = 0;
    }
    closingBalance = currency(startingBalance)
      .add(newEarning)
      .add(newCost).value;

    startingBalance = closingBalance;
    costsArr.push(Math.round(newCost));
    earningArr.push(Math.round(newEarning));
    closingBalanceArr.push(Math.round(closingBalance));

    earningsTotal = currency(earningsTotal).add(newEarning).value;
    costsTotal = currency(costsTotal).add(newCost).value;
  }
  earningsTotal = Math.round(earningsTotal);
  costsTotal = Math.round(costsTotal);

  return {
    startingBalanceArr,
    earningArr,
    costsArr,
    closingBalanceArr,
    earningsTotal,
    costsTotal,
  };
};
