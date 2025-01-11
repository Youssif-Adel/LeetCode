function canConstruct(s: string, k: number): boolean {
  const length = s.length;
  if (length < k) return false;

  const freq = new Array(26).fill(0);

  for (let i = 0; i < length; i++) {
    freq[s.charCodeAt(i) % 97] += 1;
  }

  let numOfOdd = 0;

  for (let i = 0; i < 26; i++) {
    if (freq[i] % 2 !== 0) numOfOdd += 1;
  }

  return numOfOdd <= k;
}

console.log(canConstruct("leetcode", 3));
