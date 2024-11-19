// Solved

function findWordsContaining(words: string[], x: string): number[] {
  const answer: number[] = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) answer.push(i);
  }

  return answer;
}
