function minimumLength(s: string): number {
  const freq: number[] = new Array(26).fill(0);

  let length = 0;

  for (let i = 0; i < s.length; i++) {
    const currentIndex = s.charCodeAt(i) % 97;
    const currentFreq = freq[currentIndex];

    if (currentFreq + 1 >= 3) {
      freq[currentIndex] = 1;
      length -= 1;
    } else {
      freq[currentIndex] += 1;
      length += 1;
    }
  }

  return length;
}
