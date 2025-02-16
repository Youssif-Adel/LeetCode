// Solved

function minTimeToType(word: string): number {
  let currentPosition = 0;
  let numberOfSeconds = 0;

  for (let i = 0; i < word.length; i++) {
    const newPosition = word.charCodeAt(i) % 97;
    let distance = Math.abs(newPosition - currentPosition);

    if (distance > 13) distance = 26 - distance;

    numberOfSeconds += distance + 1;
    currentPosition = newPosition;
  }

  return numberOfSeconds;
}

console.log(minTimeToType("bza"));
