function flipAndInvertImage(image: number[][]): number[][] {
  const res: number[][] = [];

  for (let i = 0; i < image.length; i++) {
    res.push([]);

    for (let j = 0; j < image[i].length; j++) {
      res[i].push(image[i][image[i].length - 1 - j] === 1 ? 0 : 1);
    }
  }

  return res;
}

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ]),
);
