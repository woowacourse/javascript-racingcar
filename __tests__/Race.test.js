import Race from "../src/domain/Race.js";
import Car from "../src/domain/Car.js";

describe("자동차 경주 한 라운드 테스트", () => {
  test("자동차 한 라운드를 진행하면 자동차의 위치가 변경된다.", () => {
    const RANDOM_NUMBERS = [5, 3];
    const CARS = [new Car("머핀"), new Car("데이지")];
    const TRY_COUNT = 1;

    const race = new Race(CARS, TRY_COUNT);
    const result = race.getGameRoundResult(RANDOM_NUMBERS);

    expect(result).toEqual([
      { name: "머핀", position: 1 },
      { name: "데이지", position: 0 },
    ]);
  });
  test("자동차 경주를 시도횟수 만큼 진행하면 자동차의 위치가 변경된다.(시도횟수 1회)", () => {
    const RANDOM_NUMBERS = [[5, 3]];
    const CARS = [new Car("머핀"), new Car("데이지")];
    const TRY_COUNT = 1;

    const race = new Race(CARS, TRY_COUNT);
    const result = race.getRaceResult(RANDOM_NUMBERS);

    expect(result).toEqual([
      [
        { name: "머핀", position: 1 },
        { name: "데이지", position: 0 },
      ],
    ]);
  });

  test("자동차 경주를 시도횟수 만큼 진행하면 자동차의 위치가 변경된다.(시도횟수 3회)", () => {
    const RANDOM_NUMBERS = [
      [5, 3],
      [7, 8],
      [9, 0],
    ];
    const CARS = [new Car("머핀"), new Car("데이지")];
    const TRY_COUNT = 3;

    const race = new Race(CARS, TRY_COUNT);
    const result = race.getRaceResult(RANDOM_NUMBERS);

    expect(result).toEqual([
      [
        { name: "머핀", position: 1 },
        { name: "데이지", position: 0 },
      ],
      [
        { name: "머핀", position: 2 },
        { name: "데이지", position: 1 },
      ],
      [
        { name: "머핀", position: 3 },
        { name: "데이지", position: 1 },
      ],
    ]);
  });
});
