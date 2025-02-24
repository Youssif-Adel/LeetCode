// Solved

function hammingDistance(x: number, y: number): number {
  let num1 = x.toString(2);
  let num2 = y.toString(2);

  if (num1.length > num2.length) num2 = num2.padStart(num1.length, "0");
  if (num2.length > num1.length) num1 = num1.padStart(num2.length, "0");

  let res = 0;

  for (let i = 0; i < num1.length; i++) {
    if (num1[i] !== num2[i]) res++;
  }

  return res;
}

console.log(hammingDistance(1, 4));
