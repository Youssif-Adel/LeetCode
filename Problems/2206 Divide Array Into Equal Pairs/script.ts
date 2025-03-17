// Solved

function divideArray(nums: number[]): boolean {
  const hash = new Map<number, boolean>();

  for (let num of nums) {
    const val = hash.has(num) ? hash.get(num) : true;
    hash.set(num, !val);
  }

  console.log(hash.values());

  for (let value of hash.values()) {
    if (!value) return false;
  }

  return true;
}

console.log(divideArray([3, 2, 3, 2, 2, 2]));
