/**
 * Function for visual separation of digits in a number (every 3 digits) with a space
 * @param numberToSplit - initial number we want to enhance with visual splitting
 * @returns same number as string with every 3rd digit in numbersplitted with space
 */

export const splitEvery3DigitWithSpace = (numberToSplit: number): string => {
  if (numberToSplit < 1000) {
    return String(numberToSplit);
  }
  const numberStr = String(numberToSplit);
  const parts = numberStr.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const result = parts.join(' ');
  return result;
};
