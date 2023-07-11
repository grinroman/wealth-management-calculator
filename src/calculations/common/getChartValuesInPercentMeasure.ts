const MAX_PERCENTAGE = 100;

export const getChartValuesInPercentMeasure = (
  initialCapital: number,
  totalEarnings: number,
  costs: number,
  overall: number
) => ({
  initialCapitalPercent: (MAX_PERCENTAGE * initialCapital) / overall,
  toalEarningsPercent: (MAX_PERCENTAGE * totalEarnings) / overall,
  constsPercent: (MAX_PERCENTAGE * costs) / overall,
});
