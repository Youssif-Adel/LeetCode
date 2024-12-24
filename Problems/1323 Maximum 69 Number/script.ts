function maximum69Number(num: number): number {
  const numString = [...num.toString()];

  for (let i = 0; i <= numString.length; i++) {
    if (numString[i] === "6") {
      numString[i] = "9";
      break;
    }
  }

  return parseInt(numString.join(""));
}
