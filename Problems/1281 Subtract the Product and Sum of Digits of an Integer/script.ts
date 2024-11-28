// Solved

function subtractProductAndSum(n: number): number {
  const numberArray = [...n.toString()].map((value) => parseInt(value));

  let product: number = 1,
    sum: number = 0;

  numberArray.forEach((value) => {
    product *= value;
    sum += value;
  });

  return product - sum;
}

console.log(subtractProductAndSum(234));
