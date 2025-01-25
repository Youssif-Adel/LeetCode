function removeTrailingZeros(num: string): string {
  let numb = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] === "0") numb++;
    else break;
  }

  return num.slice(0, num.length - numb);
}

console.log(removeTrailingZeros("51230100"));
