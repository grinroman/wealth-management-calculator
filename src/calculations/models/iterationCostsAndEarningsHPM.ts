import currency from 'currency.js';

import { InputCostsEarningsCalcType } from 'types/InputCostsEarningsCalcType';
import { OutputCostsEarningsIterationType } from 'types/OutputCostsEarningsIterationType';

export const iterationCostsAndEarningsHPM = ({
  initialCapital,
  investmentDuration,
  annualGainExpectation,
  wmAndProductFees,
  earningsNCM,
}: InputCostsEarningsCalcType & {
  earningsNCM: number;
}): OutputCostsEarningsIterationType & {
  opportynityCosts: number;
} => {
  annualGainExpectation = currency(annualGainExpectation).divide(100).value;
  wmAndProductFees = Number((wmAndProductFees * 0.01).toFixed(3));
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
      closingBalance = currency(startingBalance)
        .add(newEarning)
        .add(newCost).value;
    } else {
      closingBalance = currency(startingBalance).add(newEarning).value;
    }
    startingBalance = closingBalance;
    costsArr.push(Math.round(newCost));
    earningArr.push(Math.round(newEarning));
    closingBalanceArr.push(Math.round(closingBalance));

    earningsTotal = currency(earningsTotal).add(newEarning).value;
    costsTotal = currency(costsTotal).add(newCost).value;
  }

  earningsTotal = currency(closingBalanceArr[investmentDuration - 1]).subtract(
    initialCapital
  ).value;
  costsTotal = Math.round(costsTotal);

  const opportynityCosts =
    earningsTotal - costsTotal < earningsNCM
      ? currency(earningsNCM).subtract(earningsTotal).subtract(-costsTotal)
          .value
      : 0;

  // console.log('earningsNCM - hpm ', earningsNCM);
  // console.log('earningsTotal -hpm ', earningsTotal);
  // console.log('costsTotal - hpm', costsTotal);
  // console.log('opportynityCosts - hpm', opportynityCosts);

  return {
    startingBalanceArr,
    earningArr,
    costsArr,
    closingBalanceArr,
    earningsTotal,
    costsTotal,
    opportynityCosts,
  };
};
