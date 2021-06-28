module.exports.maxProfit = function maxProfit(prices, k = 1) {
  //k is the number of transactions allowed
  try {
    const sizeOfArray = prices.length;

    validation(prices, k);
    if (sizeOfArray == 0) return 0;
    var profit = [];

    for (let t = 0; t < k + 1; t++) {
      const row = new Array(prices.length).fill(0);
      profit.push(row);
    }

    // For day 0, as there will be no earned money therefore, all set to 0
    for (let rows = 0; rows <= k; rows++) profit[rows][0] = 0;

    // profit is 0 if there is no transaction done
    for (let columns = 0; columns <= sizeOfArray; columns++) profit[0][columns] = 0;

    for (let rows = 1; rows <= k; rows++) {
      let prevDiff = -Infinity;
      for (let columns = 1; columns < sizeOfArray; columns++) {
        prevDiff = Math.max(prevDiff, profit[rows - 1][columns - 1] - prices[columns - 1]);
        profit[rows][columns] = Math.max(profit[rows][columns - 1], prices[columns] + prevDiff);
      }
    }

    return profit[k][sizeOfArray - 1];
  } catch (ex) {
    throw ex;
  }
};

// validation
function validation(prices, k) {
  const sizeOfArray = prices.length;

  if (Array.isArray(prices) == false || sizeOfArray < 0 || sizeOfArray > 1000) {
    throw new Error("Please enter array whose length should be in between 0 and 1000");
  }
  if (isNaN(k) || k < 0 || k > 100) {
    throw new Error("Please enter a number which should be in between 0 to 100");
  }
}
