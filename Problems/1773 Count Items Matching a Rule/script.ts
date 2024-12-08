// Solved

function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string,
): number {
  let index: number;

  switch (ruleKey) {
    case "type":
      index = 0;
      break;

    case "color":
      index = 1;
      break;

    case "name":
      index = 2;
      break;
  }

  return items.reduce(
    (previousValue, currentValue) =>
      previousValue + (currentValue[index] === ruleValue ? 1 : 0),
    0,
  );
}

countMatches(
  [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"],
  ],
  "color",
  "silver",
);
