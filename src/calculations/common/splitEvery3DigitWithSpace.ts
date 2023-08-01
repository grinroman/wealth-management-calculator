/**
 * Function for visual separation of digits in a number (every 3 digits) with a space
 * @param numberToSplit - initial number we want to enhance with visual splitting
 * @returns same number as string with every 3rd digit in numbersplitted with space
 */

export const splitEvery3DigitWithSpace = (numberToSplit: number): string => {
  if (Math.abs(numberToSplit) < 1000) {
    return String(numberToSplit);
  }
  let numberToSplitStr = String(numberToSplit);
  let result = '';
  let digitCount = 0;
  for (var i = numberToSplitStr.length - 1; i >= 0; i--) {
    result = numberToSplitStr[i] + result;
    digitCount++;
    if (digitCount === 3 && i !== 0) {
      result = ' ' + result;
      digitCount = 0;
    }
  }

  return result;
};
