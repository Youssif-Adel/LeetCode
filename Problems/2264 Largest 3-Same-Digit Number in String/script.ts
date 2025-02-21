// Solved

function largestGoodInteger(num: string): string {
  let currentMax = -1;
  let previousCharacter = "";
  let currentFreq = 1;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === previousCharacter) {
      currentFreq++;

      if (currentFreq >= 3) {
        const numb = parseInt(previousCharacter.repeat(3));
        currentMax = numb > currentMax ? numb : currentMax;
        currentFreq = 1;
      }
    } else currentFreq = 1;

    previousCharacter = num[i];
  }

  return currentMax !== -1 ? currentMax.toString().padStart(3, "0") : "";
}

console.log(largestGoodInteger("6777133339"));
