// Solved

function convertDateToBinary(date: string): string {
  return date
    .split("-")
    .map((value) => Number(value).toString(2))
    .join("-");
}

console.log(convertDateToBinary("2080-02-29"));
