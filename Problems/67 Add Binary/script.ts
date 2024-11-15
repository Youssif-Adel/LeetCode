// Solved

function addBinary(a: string, b: string): string {
  const reverseA = [...a].reverse();
  const reverseB = [...b].reverse();
  const answer: string[] = [];

  let carry: number = 0;

  const lenA = reverseA.length;
  const lenB = reverseB.length;

  if (lenA > lenB) {
    for (let i = 0; i < lenA - lenB; i++) {
      reverseB.push("0");
    }
  } else {
    for (let i = 0; i < lenB - lenA; i++) {
      reverseA.push("0");
    }
  }

  for (let i = 0; i < Math.max(reverseA.length, reverseB.length); i++) {
    let sum1 = parseInt(reverseA[i]) + carry;
    if (sum1 >= 2) {
      carry = 1;
      sum1 = 0;
    } else {
      carry = 0;
    }
    let sum = sum1 + parseInt(reverseB[i]);

    if (sum >= 2) {
      carry = 1;
      answer.push("0");
    } else {
      answer.push(sum.toString());
    }
  }

  if (carry) {
    answer.push(carry.toString());
  }

  return answer.reverse().join("");
}
