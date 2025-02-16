import Car from "../src/domains/Car.js";
import getWinners from "../src/utils/getWinners.js";
import { MOVE_THRESHOLD } from "../src/constants/constants.js";

describe("getWinners 함수 테스트", () => {
  const STOP = MOVE_THRESHOLD - 1;

  test.each([
    {
      description: "자동차들의 전진 거리 중 가장 큰 값을 가진 자동차가 최종 우승자가 된다.",
      carsInfo: [
        { name: "Car1", moves: [MOVE_THRESHOLD, MOVE_THRESHOLD, MOVE_THRESHOLD] },
        { name: "Car2", moves: [MOVE_THRESHOLD, MOVE_THRESHOLD, STOP] },
        { name: "Car3", moves: [MOVE_THRESHOLD, STOP, STOP] },
      ],
      expected: ["Car1"],
    },
    {
      description: "전진 거리가 모두 동일한 경우, 모두 공동 우승자가 된다.",
      carsInfo: [
        { name: "Car1", moves: [MOVE_THRESHOLD] },
        { name: "Car2", moves: [MOVE_THRESHOLD] },
        { name: "Car3", moves: [MOVE_THRESHOLD] },
      ],
      expected: ["Car1", "Car2", "Car3"],
    },
    {
      description: "전진 거리가 모두 0인 경우에도, 모두 공동 우승자가 된다.",
      carsInfo: [
        { name: "Car1", moves: [STOP] },
        { name: "Car2", moves: [STOP] },
        { name: "Car3", moves: [STOP] },
      ],
      expected: ["Car1", "Car2", "Car3"],
    },
  ])("$description", ({ carsInfo, expected }) => {
    // given
    const cars = carsInfo.map(({ name, moves }) => {
      const car = new Car(name);
      moves.forEach((move) => car.move(move));
      return car;
    });

    // when
    const winners = getWinners(cars);

    // then
    expect(winners).toEqual(expected);
  });
});
