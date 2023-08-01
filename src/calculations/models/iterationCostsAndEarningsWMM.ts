import currency from 'currency.js';

import { InputCostsEarningsCalcType } from 'types/InputCostsEarningsCalcType';
import { OutputCostsEarningsIterationType } from 'types/OutputCostsEarningsIterationType';

export const iterationCostsAndEarningsWMM = ({
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
      newCost =
        wmAndProductFees *
        currency(startingBalance).add(newEarning).multiply(-1).value;
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

  earningsTotal = currency(closingBalanceArr[investmentDuration - 1]).subtract(
    initialCapital
  ).value;
  costsTotal = Math.round(costsTotal);

  const opportynityCosts =
    earningsTotal - costsTotal < earningsNCM
      ? currency(earningsNCM).subtract(earningsTotal).subtract(-costsTotal)
          .value
      : 0;

  // console.log('earningsNCM - wmm ', earningsNCM);
  // console.log('earningsTotal -wmm ', earningsTotal);
  // console.log('costsTotal - wmm ', costsTotal);
  // console.log('opportynityCosts - wmm', opportynityCosts);

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
