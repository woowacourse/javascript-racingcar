import getMaxCount from "../src/utils/getMaxCount.js";
import Car from "../src/domains/Car.js";
import { MOVE_THRESHOLD } from "../src/constants/constants.js";

describe("getMaxCount 함수 테스트", () => {
  const STOP = MOVE_THRESHOLD - 1;

  test.each([
    {
      description: "자동차들의 전진 거리 중 최댓값을 반환한다.",
      carsInfo: [
        { name: "Car1", moves: [MOVE_THRESHOLD, MOVE_THRESHOLD, MOVE_THRESHOLD] },
        { name: "Car2", moves: [MOVE_THRESHOLD, MOVE_THRESHOLD, STOP] },
        { name: "Car3", moves: [MOVE_THRESHOLD, STOP, STOP] },
      ],
      expected: 3,
    },
    {
      description: "전진 거리가 모두 동일한 경우, 최댓값은 그 값과 동일해야 한다.",
      carsInfo: [
        { name: "Car1", moves: [MOVE_THRESHOLD] },
        { name: "Car2", moves: [MOVE_THRESHOLD] },
        { name: "Car3", moves: [MOVE_THRESHOLD] },
      ],
      expected: 1,
    },
    {
      description: "전진 거리가 0이 포함된 경우에도 제대로 동작한다.",
      carsInfo: [
        { name: "Car1", moves: [STOP] },
        { name: "Car2", moves: [STOP] },
        { name: "Car3", moves: [MOVE_THRESHOLD] },
      ],
      expected: 1,
    },
    {
      description: "전진 거리가 모두 0일 경우, 0이 반환된다.",
      carsInfo: [
        { name: "Car1", moves: [STOP] },
        { name: "Car2", moves: [STOP] },
        { name: "Car3", moves: [STOP] },
      ],
      expected: 0,
    },
  ])("$description", ({ carsInfo, expected }) => {
    // given
    const cars = carsInfo.map(({ name, moves }) => {
      const car = new Car(name);
      moves.forEach((move) => car.move(move));
      return car;
    });

    // when
    const maxCount = getMaxCount(cars);

    // then
    expect(maxCount).toBe(expected);
  });
});
