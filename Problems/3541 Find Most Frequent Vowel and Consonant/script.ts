// Solved

function maxFreqSum(s: string): number {
  const freqArr: number[] = new Array(26).fill(0);

  const vowels = ["a", "e", "i", "o", "u"];

  let highestVowelFreq = 0;
  let highestConsonantFreq = 0;

  for (let i = 0; i < s.length; i++) {
    let pos = s.charCodeAt(i) - 97;
    let newNumb = freqArr[pos] + 1;
    if (vowels.includes(s[i])) {
      if (highestVowelFreq < newNumb) highestVowelFreq = newNumb;
    } else {
      if (highestConsonantFreq < newNumb) highestConsonantFreq = newNumb;
    }
    freqArr[pos] = newNumb;
  }

  return highestConsonantFreq + highestVowelFreq;
}
