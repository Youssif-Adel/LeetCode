// Solved

function firstPalindrome(words: string[]): string {
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) return words[i];
  }

  return "";
}

function isPalindrome(word: string) {
  const halfPoint = Math.ceil(word.length / 2);

  for (let i = 0; i < halfPoint; i++) {
    if (word.charAt(i) !== word.charAt(word.length - 1 - i)) return false;
  }
  return true;
}
