// 주어진 배열에서 최종 우승자를 찾아 출력한다.

import { getWinnersByPosition, playRound } from "../src/domain/play";
import { getMaxPosition } from "../src/utils/findMax";

describe("Car 로직 테스트", () => {
  // given
  let cars;
  beforeEach(() => {
    cars = [
      [
        { name: "세라", position: 2 },
        { name: "리바이", position: 3 },
      ],
      [
        { name: "세라", position: 3 },
        { name: "리바이", position: 4 },
      ],
    ];
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("자동차 경주 진행 시, 랜덤 값이 4이상일 경우 Car 배열의 position 값이 1증가한다.", () => {
    // when
    jest.spyOn(Math, "random").mockReturnValue(0.5);

    // then
    expect(playRound(cars[0])).toStrictEqual([
      { name: "세라", position: 3 },
      { name: "리바이", position: 4 },
    ]);
  });

  test("최대 position을 올바르게 반환한다.", () => {
    // when
    const max = getMaxPosition(cars[1]);
    // then
    expect(max).toBe(4);
  });

  test("주어진 배열에서 최종 우승자를 찾아 출력한다.", () => {
    // when
    const winners = getWinnersByPosition(cars);
    // then
    expect(winners.map((car) => car.name)).toStrictEqual(["리바이"]);
  });
});
