function finalPrices(prices: number[]): number[] {
  const answer: number[] = [];

  for (let i = 0; i < prices.length; i++) {
    let discount = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        discount = prices[j];
        break;
      }
    }
    answer.push(prices[i] - discount);
  }

  return answer;
}
