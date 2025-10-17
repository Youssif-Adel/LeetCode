// Solved

function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let good = true;
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          good = false;
          break;
        }
      }
      if (good) return i;
    }
  }
  return -1;
}

console.log(strStr("hello", "ll"));
