// Solved

function groupThePeople(groupSizes: number[]): number[][] {
  const map = new Map<number, number[][]>();

  for (let i = 0; i < groupSizes.length; i++) {
    const groupSize = groupSizes[i];

    if (map.has(groupSize)) {
      const item = map.get(groupSize) ?? [];

      if (item[item.length - 1].length < groupSize)
        item[item.length - 1].push(i);
      else item.push([i]);
    } else map.set(groupSize, [[i]]);
  }

  const arr: number[][] = [];

  for (let value of map.values()) {
    arr.push(...value);
  }

  return arr;
}
