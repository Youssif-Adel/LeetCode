function pickGifts(gifts: number[], k: number): number {
  gifts = gifts.sort((a, b) => b - a);

  for (let i = 0; i < k; i++) {
    gifts[0] = Math.floor(Math.sqrt(gifts[0]));
    gifts = reSort(gifts.slice(1), gifts[0]);
  }

  return gifts.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0,
  );
}

function reSort(arr: number[], numb: number) {
  console.log(arr);
  console.log(numb);
  let middle = Math.floor(arr.length / 2);
  let left = false,
    right = false;

  do {
    if (left) {
      middle = Math.floor(middle / 2);
    } else if (right) {
      middle = middle + Math.floor((arr.length - middle) / 2);
    }

    left = false;
    right = false;

    if (arr[middle] === numb || arr[middle + 1] === numb) {
      return [...arr.slice(0, middle + 1), numb, ...arr.slice(middle + 1)];
    } else if (
      (arr[middle] > numb && arr[middle + 1] < numb) ||
      (arr[middle] === numb && arr[middle + 1] === numb)
    ) {
      return [...arr.slice(0, middle + 1), numb, ...arr.slice(middle + 1)];
    } else if (arr[middle] < numb && arr[middle + 1] === undefined) {
      return [...arr.slice(0, middle), numb, ...arr.slice(middle)];
    } else if (arr[middle] > numb && arr[middle + 1] === undefined) {
      return [...arr.slice(0, middle + 1), numb, ...arr.slice(middle + 1)];
    } else if (arr[middle] < numb) {
      left = true;
    } else {
      right = true;
    }
  } while (left || right);

  return arr;
}

console.log(
  pickGifts(
    [
      64, 46, 11, 42, 15, 63, 43, 25, 32, 3, 35, 15, 29, 48, 22, 43, 55, 8, 13,
      19, 29, 6, 74, 69, 10, 4, 16, 25, 74,
    ],
    8,
  ),
);
