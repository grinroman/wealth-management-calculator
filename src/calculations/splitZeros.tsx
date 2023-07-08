export const splitZeros = (numberToSplit: number): string => {
  var numberStr = String(numberToSplit);
  var parts = numberStr.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  var result = parts.join('.');
  return result;
};
