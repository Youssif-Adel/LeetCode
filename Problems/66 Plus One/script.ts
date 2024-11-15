// Solved

function plusOne(digits: number[]): number[] {
  function increment(num: number) {
    if (num === 9) {
      return 0;
    }
    return num + 1;
  }

  let numb = 0;
  let currentIndex = digits.length - 1;
  do {
    if (currentIndex < 0) {
      digits.unshift(1);
      break;
    } else {
      numb = increment(digits[currentIndex]);
      digits[currentIndex] = numb;
      currentIndex--;
    }
  } while (numb === 0);

  return digits;
}
