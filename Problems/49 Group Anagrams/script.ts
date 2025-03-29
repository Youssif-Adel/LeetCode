// Solved

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let str of strs) {
    const orderedStr = [...str].sort().join("");

    map.set(orderedStr, (map.get(orderedStr) || []).concat(str));
  }

  return [...map.values()];
}
