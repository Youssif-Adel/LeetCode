// Solved

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const length = nums2.length;
  const ans: number[] = [];

  for (let number of nums1) {
    const index = nums2.indexOf(number);
    let isDone = false;

    for (let i = index + 1; i < length; i++) {
      if (nums2[i] > number) {
        ans.push(nums2[i]);
        isDone = true;
        break;
      }
    }
    if (!isDone) ans.push(-1);
  }

  return ans;
}
