function replaceDigits(s: string): string {
  const word = Array.from(s);

  for (let i = 1; i < s.length; i += 2) {
    word[i] = shift(word[i - 1], parseInt(word[i]));
  }

  return word.join("");
}

function shift(char: string, numb: number) {
  return String.fromCharCode(char.charCodeAt(0) + numb);
}
