const MAX_PERCENTAGE = 100;

export const getChartValuesInPercentMeasure = (
  initialCapital: number,
  totalEarnings: number,
  costs: number,
  overall: number,
  oportynityCosts?: number
) => ({
  initialCapitalPercent: (MAX_PERCENTAGE * initialCapital) / overall,
  totalEarningsPercent: (MAX_PERCENTAGE * totalEarnings) / overall,
  constsPercent: (MAX_PERCENTAGE * costs) / overall,
  oportynityCostsPercent:
    oportynityCosts && (MAX_PERCENTAGE * oportynityCosts) / overall,
});
