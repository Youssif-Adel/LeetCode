// solved

function canBeTypedWords(text: string, brokenLetters: string): number {
  const brokenChars = new Array(26).fill(true);

  for (let brokenLetter of brokenLetters) {
    const code = brokenLetter.charCodeAt(0) % 26;
    brokenChars[code] = false;
  }

  const words = text.split(" ");
  let goodWords = 0;

  for (let word of words) {
    let good = true;
    for (let wordElement of word) {
      const code = wordElement.charCodeAt(0) % 26;

      if (!brokenChars[code]) {
        good = false;
        break;
      }
    }

    if (good) goodWords++;
  }

  return goodWords;
}

console.log(canBeTypedWords("hello world", "ad"));
