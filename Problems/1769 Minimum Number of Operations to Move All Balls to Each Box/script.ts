// Solved

// @ts-ignore
function minOperations(boxes: string): number[] {
  const n = boxes.length;

  const left: number[] = new Array(n);

  let numOfBalls = 0;
  let totalSteps = 0;

  for (let i = 0; i < n; i++) {
    const box = boxes[i];

    totalSteps += numOfBalls;

    if (box === "1") numOfBalls++;

    left[i] = totalSteps;
  }

  numOfBalls = 0;
  totalSteps = 0;
  const res: number[] = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    const box = boxes[i];

    totalSteps += numOfBalls;

    if (box === "1") numOfBalls++;

    res[i] = left[i] + totalSteps;
  }

  return res;
}

console.log(minOperations("001011"));
