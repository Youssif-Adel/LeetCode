// Solved

function squareIsWhite(coordinates: string): boolean {
  return (
    ((coordinates.charCodeAt(0) % 96) + parseInt(coordinates[1])) % 2 !== 0
  );
}

console.log(squareIsWhite("a1"));
