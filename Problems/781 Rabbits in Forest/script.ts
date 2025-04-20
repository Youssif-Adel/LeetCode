// Solved

function numRabbits(answers: number[]): number {
  const set = new Map<number, number>();
  let total = 0;

  for (let answer of answers) {
    if (answer === 0) {
      total += 1;
      continue;
    }

    if (set.has(answer) && (set.get(answer) || 0) < answer) {
      set.set(answer, (set.get(answer) || 0) + 1);
    } else {
      total += answer + 1;
      set.set(answer, 0);
    }
  }

  return total;
}
