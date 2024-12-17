function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const done: number[] = [];
  let answer1 = 0,
    answer2 = 0;

  nums1.forEach((value) => {
    if (done.includes(value)) {
      answer1 += 1;
    } else {
      if (nums2.includes(value)) {
        done.push(value);
        answer1 += 1;
      }
    }
  });

  nums2.forEach((value) => {
    if (done.includes(value)) {
      answer2 += 1;
    } else {
      if (nums1.includes(value)) {
        done.push(value);
        answer2 += 1;
      }
    }
  });

  return [answer1, answer2];
}

findIntersectionValues([3, 4, 2, 3], [1, 5]);
