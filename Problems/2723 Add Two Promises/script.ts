type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  const a = await promise1;
  const b = await promise2;

  return new Promise((resolve) => {
    resolve(a + b);
  });
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

addTwoPromises(
  new Promise((resolve) => setTimeout(() => resolve(2), 20)),
  new Promise((resolve) => setTimeout(() => resolve(5), 60)),
).then((value) => {
  console.log(value);
});
