function countSeniors(details: string[]): number {
  return details.reduce(
    (previousValue, currentValue) =>
      previousValue + (parseInt(currentValue.slice(11, 13)) > 60 ? 1 : 0),
    0,
  );
}

console.log(
  countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"]),
);
