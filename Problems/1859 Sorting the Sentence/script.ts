// Solved

function sortSentence(s: string): string {
  let sentence: string[] = [];

  s.split(" ").forEach((value) => {
    sentence[parseInt(value.charAt(value.length - 1)) - 1] = value.slice(0, -1);
  });

  return sentence.join(" ");
}

console.log(sortSentence("is2 sentence4 This1 a3"));
