// Solved

function sortPeople(names: string[], heights: number[]): string[] {
  const map = new Map();
  heights.forEach((value, index) => map.set(value, names[index]));

  return heights.sort((a, b) => b - a).map((value) => map.get(value));
}
