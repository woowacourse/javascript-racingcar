const { isMoving } = require("../src/MovementIndicator");

test("생성된 난수가 4이상일 경우 true 반환 ", () => {
  expect([1, 3, 5, 2, 6, 7, 8, 9].map((number) => isMoving(number))).toEqual([
    false,
    false,
    true,
    false,
    true,
    true,
    true,
    true,
  ]);
});
