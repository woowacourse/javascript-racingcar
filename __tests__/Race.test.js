import { getRandomNumber } from "../src/utils/getRandomNumber.js";
import Race from "../src/domain/Race.js";

jest.mock("../src/utils/getRandomNumber.js", () => ({
  getRandomNumber: jest.fn(),
}));

describe("조건에 따른 자동차 이동 테스트", () => {
  test("randomNumber가 4 이상이면 자동차가 움직여야 한다.", () => {
    getRandomNumber.mockReturnValue(4);
    const race = new Race(["Tesla"], 1);
    const car = race.carList[0];

    race.executeTurn();

    expect(car.position).toBe(1);
  });

  test("randomNumber가 3 이하이면 자동차가 움직이지 않아야 한다.", () => {
    getRandomNumber.mockReturnValue(3);

    const race = new Race(["Tesla"], 1);
    const car = race.carList[0];
    race.executeTurn();

    expect(car.position).toBe(0);
  })
})

test("공동 우승자 출력", () => {
  const race = new Race(["수이", "메타", "메이토"], 2);

  Object.defineProperty(race.carList[0], "position", { get: () => 2 });
  Object.defineProperty(race.carList[1], "position", { get: () => 2 });
  Object.defineProperty(race.carList[2], "position", { get: () => 0 });

  const winners = race.getWinnerName();

  expect(winners).toEqual(["수이", "메타"]);
});
