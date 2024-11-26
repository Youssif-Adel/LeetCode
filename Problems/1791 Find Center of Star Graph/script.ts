// Solved

function findCenter(edges: number[][]): number {
  const map: Map<number, number> = new Map();

  edges.forEach((edge) => {
    edge.forEach((point) => {
      if (map.has(point)) {
        map.set(point, (map.get(point) || 0) + 1);
      } else {
        map.set(point, 1);
      }
    });
  });

  const highestValue = Math.max(...map.values());

  for (let mapKey of map.keys()) {
    if (map.get(mapKey) === highestValue) {
      return mapKey;
    }
  }

  return 0;
}

console.log(
  findCenter([
    [1, 18],
    [18, 2],
    [3, 18],
    [18, 4],
    [18, 5],
    [6, 18],
    [18, 7],
    [18, 8],
    [18, 9],
    [18, 10],
    [18, 11],
    [12, 18],
    [18, 13],
    [18, 14],
    [15, 18],
    [16, 18],
    [17, 18],
  ]),
);
