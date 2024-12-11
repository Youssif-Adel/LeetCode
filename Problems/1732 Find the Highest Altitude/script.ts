// Solved

function largestAltitude(gain: number[]): number {
  let max = 0;
  let currentAltitude = 0;

  gain.forEach((value) => {
    currentAltitude += value;

    if (currentAltitude > max) max = currentAltitude;
  });

  return max;
}
