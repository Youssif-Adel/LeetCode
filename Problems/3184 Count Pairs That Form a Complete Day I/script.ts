// Solved

function countCompleteDayPairs(hours: number[]): number {
  const length = hours.length;
  let days = 0;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if ((hours[i] + hours[j]) % 24 === 0) days++;
    }
  }

  return days;
}
