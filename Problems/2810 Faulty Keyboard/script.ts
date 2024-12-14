// Solved

function finalString(s: string): string {
  return [...s].reduce((previousValue, currentValue) => {
    if (currentValue === "i") return [...previousValue].reverse().join("");
    return previousValue + currentValue;
  }, "");
}
