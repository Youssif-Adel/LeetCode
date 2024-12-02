// Solved

function numberOfMatches(n: number): number {
  let numberOfPlayers = n;
  let numberOfMatches = 0;

  while (numberOfPlayers > 1) {
    if (numberOfPlayers % 2) {
      numberOfMatches += numberOfPlayers / 2;
      numberOfPlayers = numberOfPlayers / 2;
    } else {
      numberOfMatches += (numberOfPlayers - 1) / 2;
      numberOfPlayers = (numberOfPlayers - 1) / 2 + 1;
    }
  }

  return Math.floor(numberOfMatches);
}

console.log(numberOfMatches(7));
