// Solved

function islandPerimeter(grid: number[][]): number {
  const rowLength = grid[0].length;
  const numOfRows = grid.length;
  const visited: boolean[][] = new Array(numOfRows)
    .fill(0)
    .map(() => new Array(rowLength).fill(false));

  console.log(visited);

  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];

    for (let j = 0; j < row.length; j++) {
      let number = row[j];
      if (number === 1) {
        return search(j, i);
      }
    }
  }

  function search(x: number, y: number) {
    visited[y][x] = true;
    let numOfEdges = 0;

    const offSets = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (let offSet of offSets) {
      const [offSetX, offSetY] = offSet;
      const newX = offSetX + x;
      const newY = offSetY + y;

      if (newY > numOfRows - 1 || newX > rowLength - 1 || newY < 0 || newX < 0)
        continue;

      if (visited[newY][newX]) continue;

      if (grid[newY][newX] === 0) {
        numOfEdges++;
      } else {
        numOfEdges += search(newX, newY);
      }
    }

    return numOfEdges;
  }

  return 0;
}

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
);
