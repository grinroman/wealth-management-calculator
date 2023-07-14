export const iterationCostsAndEarningsWMM = ({
  initialCapital,
  investmentDuration,
  annualGainExpectation,
  wmAndProductFees,
}: any): any => {
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
      newEarning = Math.round(annualGainExpectation * startingBalance)
      newCost = - Math.round(wmAndProductFees * (Math.round(startingBalance +  newEarning)))
    } else {
      newCost = 0;
      newEarning = 0;
    }
    closingBalance = Math.round(startingBalance + newEarning + newCost);

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
}