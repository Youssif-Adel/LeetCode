// Solved

function finalPositionOfSnake(n: number, commands: string[]): number {
  let loc = 0;
  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];

    if (command === "UP") loc -= n;
    else if (command === "DOWN") loc += n;
    else if (command === "LEFT") loc -= 1;
    else if (command === "RIGHT") loc += 1;
  }
  return loc;
}
