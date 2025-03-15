// Solved

function repeatedCharacter(s: string): string {
  const chars = new Array(26).fill(false);

  for (let sElement of s) {
    const code = sElement.charCodeAt(0);

    if (chars[code % 26]) return sElement;
    chars[code % 26] = true;
  }
}
