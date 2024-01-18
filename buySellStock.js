/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let mini = prices[0];
    let maxProfit = 0;
    for(let i = 1;i<prices.length;i++){
      let currentProfit = prices[i] - mini;
      maxProfit = Math.max(maxProfit,currentProfit);
      mini = Math.min(mini,prices[i])
    }
    return maxProfit;
};
