// Solved

function vowelStrings(words: string[], queries: number[][]): number[] {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let currentSum = 0;

  const vowelsSum: number[] = words.map((value) => {
    if (vowels.has(value[0]) && vowels.has(value[value.length - 1]))
      ++currentSum;

    return currentSum;
  });

  return queries.map(([L, R]) => {
    if (L === 0) return vowelsSum[R];

    return vowelsSum[R] - (vowelsSum[L - 1] || 0);
  });
}

console.log(
  vowelStrings(
    [
      "bzmxvzjxfddcuznspdcbwiojiqf",
      "mwguoaskvramwgiweogzulcinycosovozppl",
      "uigevazgbrddbcsvrvnngfrvkhmqszjicpieahs",
      "uivcdsboxnraqpokjzaayedf",
      "yalc",
      "bbhlbmpskgxmxosft",
      "vigplemkoni",
      "krdrlctodtmprpxwditvcps",
      "gqjwokkskrb",
      "bslxxpabivbvzkozzvdaykaatzrpe",
      "qwhzcwkchluwdnqjwhabroyyxbtsrsxqjnfpadi",
      "siqbezhkohmgbenbkikcxmvz",
      "ddmaireeouzcvffkcohxus",
      "kjzguljbwsxlrd",
      "gqzuqcljvcpmoqlnrxvzqwoyas",
      "vadguvpsubcwbfbaviedr",
      "nxnorutztxfnpvmukpwuraen",
      "imgvujjeygsiymdxp",
      "rdzkpk",
      "cuap",
      "qcojjumwp",
      "pyqzshwykhtyzdwzakjejqyxbganow",
      "cvxuskhcloxykcu",
      "ul",
      "axzscbjajazvbxffrydajapweci",
    ],
    [
      [4, 4],
      [6, 17],
      [10, 17],
      [9, 18],
      [17, 22],
      [5, 23],
      [2, 5],
      [17, 21],
      [5, 17],
      [4, 8],
      [7, 17],
      [16, 19],
      [7, 12],
      [9, 20],
      [13, 23],
      [1, 5],
      [19, 19],
    ],
  ),
);

console.log(
  vowelStrings(
    ["aba", "bcb", "ece", "aa", "e"],
    [
      [0, 2],
      [1, 4],
      [1, 1],
    ],
  ),
);
