const randomNumberBetween = require("../src/util/RandomNumberMaker");

test.each([
  [0, 9],
  [1, 5],
  [2, 22],
  [3, 100],
  [4, 90],
  [5, 40],
  [6, 30],
  [7, 9],
  [8, 10],
  [9, 29],
])("%i ~ %i 사이의 난수 반환", (min, max) => {
  expect(randomNumberBetween(min, max)).toBeGreaterThanOrEqual(min);
  expect(randomNumberBetween(min, max)).toBeLessThanOrEqual(max);
});
