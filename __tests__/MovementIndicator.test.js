const movingDistance = require("../src/domain/MovementIndicator");
const { MOVEMENT } = require("../src/constant/Constants");
const { FORWARD_DISTANCE } = MOVEMENT;

test.each([
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
  [4, FORWARD_DISTANCE],
  [5, FORWARD_DISTANCE],
  [6, FORWARD_DISTANCE],
  [7, FORWARD_DISTANCE],
  [8, FORWARD_DISTANCE],
  [9, FORWARD_DISTANCE],
])("생성된 난수가 4 이상일 경우 한 칸 전진", (randomNumber, expected) => {
  expect(movingDistance(randomNumber)).toBe(expected);
});
