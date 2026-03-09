// https://leetcode.com/problems/coin-change/
//

async function g75_36() {
  // script here
  const res = coinChange([186, 419, 83, 408], 6249);
  console.log(res);

  console.log("done");
  process.exit(0);
}

// time O(n*m)
// space O(m)

function coinChange(coins: number[], amount: number): number {
  const dp = new Array<number>(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// greedy
// function coinChange(coins: number[], amount: number): number {
//   coins.sort((a, b) => a - b);

//   let count = 0;

//   while (amount > 0 && coins.length > 0) {
//     const coin = coins.pop();

//     const numCoins = Math.floor(amount / coin);
//     const remainder = amount % coin;

//     count += numCoins;
//     amount = remainder;
//   }

//   return amount === 0 ? count : -1;
// }

g75_36().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
