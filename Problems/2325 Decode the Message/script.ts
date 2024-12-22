function decodeMessage(key: string, message: string): string {
  key = [...new Set([...key.split(" ").join("")])].join("");
  const letters = [];

  return [...message].reduce((previousValue, currentValue) => {
    if (currentValue !== " ") {
      return (
        previousValue + String.fromCharCode(key.indexOf(currentValue) + 97)
      );
    } else {
      return previousValue + currentValue;
    }
  }, "");
}

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv",
  ),
);

console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));
