// Solved

function uniqueMorseRepresentations(words: string[]): number {
  const morseCodes = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const set = new Set(
    words.map((value) =>
      [...value]
        .map((character) => morseCodes[character.charCodeAt(0) % 97])
        .join(""),
    ),
  );

  return set.size;
}
