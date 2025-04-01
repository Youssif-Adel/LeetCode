// Solved

function generateKey(num1: number, num2: number, num3: number): number {
  let num1String = num1.toString().padStart(4, "0");
  let num2String = num2.toString().padStart(4, "0");
  let num3String = num3.toString().padStart(4, "0");
  let res = "";

  for (let i = 0; i < 4; i++) {
    let minValue = Math.min(
      parseInt(num1String[i]),
      parseInt(num2String[i]),
      parseInt(num3String[i]),
    );

    if (res.length === 0) {
      if (minValue !== 0) res = res.concat(minValue.toString());
    } else {
      res = res.concat(minValue.toString());
    }
  }

  if (!res) return 0;
  return parseInt(res);
}

console.log(generateKey(987, 879, 798));
