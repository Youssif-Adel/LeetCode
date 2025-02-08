function uniqueOccurrences(arr: number[]): boolean {
  const length = arr.length;
  const freq: Map<number, number> = new Map();
  const set: Set<number> = new Set();

  for (const numb of arr) {
    freq.set(numb, (freq.get(numb) || 0) + 1);
  }

  for (let [_, elem] of freq) {
    if (set.has(elem)) return false;
    set.add(elem);
  }

  return true;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
