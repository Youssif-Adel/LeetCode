function areAlmostEqual(s1: string, s2: string): boolean {
  const length1 = s1.length,
    length2 = s2.length;

  if (length1 !== length2) return false;

  const freq1 = new Array(26).fill(0);
  const freq2 = new Array(26).fill(0);

  let numOfIncorrectStrings = 0;

  for (let i = 0; i < length1; i++) {
    if (s1[i] !== s2[i]) {
      numOfIncorrectStrings++;
      freq1[s1.charCodeAt(i) % 97] += 1;
      freq2[s2.charCodeAt(i) % 97] += 1;
    }

    if (numOfIncorrectStrings > 2) return false;
  }

  for (let i = 0; i < 26; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }

  return true;
}

console.log(areAlmostEqual("aa", "bb"));
