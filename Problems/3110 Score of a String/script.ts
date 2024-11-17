// Solved

function scoreOfString(s: string): number {
  let answer = 0;

  for (let i = 0; i < s.length - 1; i++) {
    answer += calcAbsoluteDifference(s[i], s[i + 1]);
  }

  return answer;
}

function calcAbsoluteDifference(a: string, b: string) {
  return Math.abs(a.charCodeAt(0) - b.charCodeAt(0));
}

console.log(scoreOfString("hello"));
