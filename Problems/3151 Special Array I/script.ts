function isArraySpecial(nums: number[]): boolean {
  // @ts-ignore
  let previousElement = nums[0] % 2 === 0;
  for (let i = 1; i < nums.length; i++) {
    // @ts-ignore
    const currentElement = nums[i] % 2 === 0;
    if (currentElement === previousElement) return false;
    else previousElement = currentElement;
  }
  return true;
}

console.log(isArraySpecial([1, 5]));
