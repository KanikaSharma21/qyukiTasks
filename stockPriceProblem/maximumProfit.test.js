const { maxProfit } = require("./maximumProfit");
test("stock problem tests", () => {
  expect(true);
});

describe("maxProfit", () => {
  it("find maximum profit with k=2 transactions", () => {
    expect(maxProfit([10, 22, 5, 75, 65, 80], 2)).toBe(87);
    expect(maxProfit([12, 14, 17, 10, 14, 13, 12, 15], 3)).toBe(12);
  });

  it("find maximum profit with k=3 transactions", () => {
    expect(maxProfit([12, 14, 17, 10, 14, 13, 12, 15], 3)).toBe(12);
  });

  it("returns 0 if array is empty", () => {
    expect(maxProfit([], 1)).toBe(0);
  });
});
