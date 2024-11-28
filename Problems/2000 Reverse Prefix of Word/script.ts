// Solved

function reversePrefix(word: string, ch: string): string {
  const splitIndex = word.indexOf(ch) + 1;
  return (
    [...word.substring(0, splitIndex)].reverse().join("") +
    word.substring(splitIndex)
  );
}

console.log(reversePrefix("abcdefd", "d"));
