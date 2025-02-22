// Solved

function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set(nums1);
  const answer = new Set<number>();

  for (let number of nums2) {
    if (set.has(number)) answer.add(number);
  }

  return [...answer];
}
