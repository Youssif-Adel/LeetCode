// Solved

function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[],
): boolean[] {
  const answer: boolean[] = [];

  for (let i = 0; i < l.length; i++) {
    const start = l[i],
      end = r[i];

    const sortedSection = nums.slice(start, end + 1).toSorted((a, b) => a - b);

    const val = sortedSection[1] - sortedSection[0];
    let good = true;

    for (let j = 1; j < sortedSection.length; j++) {
      if (sortedSection[j] - sortedSection[j - 1] === val) continue;
      good = false;
      answer.push(false);
      break;
    }

    if (good) answer.push(true);
  }

  return answer;
}

console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]));
