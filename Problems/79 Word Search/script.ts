// Solved

function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0].length;

  if (n * m < word.length) return false;

  let usedBoard: boolean[][] = new Array(m)
    .fill([])
    .map(() => new Array(n).fill(false));

  function searchNeighbours(
    x: number,
    y: number,
    currentIndex: number,
  ): boolean {
    const locations = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ];

    for (let [xIndex, yIndex] of locations) {
      if (
        xIndex >= 0 &&
        xIndex < m &&
        yIndex >= 0 &&
        yIndex < n &&
        !usedBoard[xIndex][yIndex] &&
        board[xIndex][yIndex] === word[currentIndex]
      ) {
        usedBoard[x][y] = true;
        if (currentIndex + 1 === word.length) return true;
        if (searchNeighbours(xIndex, yIndex, currentIndex + 1)) {
          return true;
        } else {
          usedBoard[x][y] = false;
        }
      }
    }

    return false;
  }

  if (word.length === 1) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === word) return true;
      }
    }
    return false;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      usedBoard = new Array(m).fill([]).map(() => new Array(n).fill(false));

      if (board[i][j] === word[0]) if (searchNeighbours(i, j, 1)) return true;
    }
  }
  return false;
}

console.log(
  exist(
    [
      ["C", "A", "A"],
      ["A", "A", "A"],
      ["B", "C", "D"],
    ],
    "AAB",
  ),
);
