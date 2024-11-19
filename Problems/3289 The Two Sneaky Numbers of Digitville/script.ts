// Solved

function getSneakyNumbers(nums: number[]): number[] {
  let numbers: number[] = [];
  let answer: number[] = [];

  nums.forEach((value) => {
    if (numbers.includes(value)) {
      answer.push(value);
    } else {
      numbers.push(value);
    }
  });

  return answer;
}
