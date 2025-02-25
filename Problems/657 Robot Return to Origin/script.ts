// Solved

function judgeCircle(moves: string): boolean {
  let locX = 0,
    locY = 0;

  for (let move of moves) {
    switch (move) {
      case "R":
        locX += 1;
        break;

      case "L":
        locX -= 1;
        break;

      case "U":
        locY += 1;
        break;

      case "D":
        locY -= 1;
        break;
    }
  }

  return !locX && !locY;
}
