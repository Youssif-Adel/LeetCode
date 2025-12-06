// Solved

function earliestTime(tasks: number[][]): number {
  let lowestTime = Infinity;

  for (const [start, duration] of tasks)
    if (start + duration < lowestTime) lowestTime = start + duration;

  return lowestTime;
}
