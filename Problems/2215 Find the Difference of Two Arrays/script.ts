function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const result1 = [...set1].filter((value) => !set2.has(value));
  const result2 = [...set2].filter((value) => !set1.has(value));

  return [result1, result2];
}
