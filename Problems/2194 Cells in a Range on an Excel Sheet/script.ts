// Solved

function cellsInRange(s: string): string[] {
  const startColumn = s.charCodeAt(0);
  const endColumn = s.charCodeAt(3);

  const startRow = parseInt(s[1]);
  const endRow = parseInt(s[4]);

  const listOfCells: string[] = [];

  for (let i = startColumn; i <= endColumn; i++) {
    const currentColumn = String.fromCharCode(i);

    for (let j = startRow; j <= endRow; j++) {
      listOfCells.push(currentColumn + j);
    }
  }

  return listOfCells;
}

console.log(cellsInRange("K1:L2"));
