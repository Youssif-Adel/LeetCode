// Solved

function findClosest(x: number, y: number, z: number): number {
  const distanceX = Math.abs(x - z);
  const distanceY = Math.abs(y - z);

  if (distanceX === distanceY) return 0;

  return distanceX > distanceY ? 2 : 1;
}
