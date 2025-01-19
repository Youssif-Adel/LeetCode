// Solved

function countBits(n: number): number[] {
  const ans: number[] = [];

  for (let i = 0; i <= n; i++) {
    const num = i.toString(2);

    let count = 0;

    for (let j = 0; j < num.length; j++) {
      if (num[j] === "1") count++;
    }

    ans.push(count);
  }

  return ans;
}

console.log(countBits(5));
