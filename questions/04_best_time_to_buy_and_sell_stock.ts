// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// #array #sliding_window

async function script4() {
  // script here
  const res = maxProfit([7, 1, 5, 3, 6, 4]);
  console.log(res);

  console.log("done");
  process.exit(0);
}

function maxProfit(prices: number[]): number {
  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

  while (buy < prices.length) {
    const sellPrice = prices[sell];
    const buyPrice = prices[buy];

    if (buyPrice < sellPrice) {
      const profit = sellPrice - buyPrice;
      maxProfit = Math.max(maxProfit, profit);
    } else {
      // sell price must be lower than our current lowest price.
      buy = sell;
    }

    sell++;
  }

  return maxProfit;
}

// Brute Force
// function maxProfit(prices: number[]): number {
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i; j < prices.length; j++) {
//       const remainder = prices[j] - prices[i];

//       if (remainder > maxProfit) {
//         maxProfit = remainder;
//       }
//     }
//   }

//   return maxProfit;
// }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
script4().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
