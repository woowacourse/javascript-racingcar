import { getRandomNumber } from "../src/utils/getRandomNumber.js";
import Race from "../src/domain/Race.js";
import Car from "../src/domain/Car.js";

jest.mock("../src/utils/getRandomNumber.js", () => ({
  getRandomNumber: jest.fn(),
}));

test("randomNumber가 4 이상이면 자동차가 움직여야 한다.", () => {
  getRandomNumber.mockReturnValue(4);

  // Given: 자동차 1대, 1번 이동 기회
  const race = new Race(["Tesla"], 1);
  const car = race.carList[0];

  // When: 한 턴 실행
  race.executeTurn();

  // Then: 자동차가 1칸 전진했는지 확인
  expect(car.position).toBe(1);
});

test("randomNumber가 3 이하이면 자동차가 움직이지 않아야 한다.", () => {
  getRandomNumber.mockReturnValue(3);

  // Given: 자동차 1대, 1번 이동 기회
  const race = new Race(["Tesla"], 1);
  const car = race.carList[0];

  // When: 한 턴 실행
  race.executeTurn();

  // Then: 자동차가 움직이지 않아야 함
  expect(car.position).toBe(0);
});

test("우승자 출력", () => {
  const race = new Race(["수이", "메타", "메이토"], 2);
  const result = [
    { name: "메타", position: 2 },
    { name: "수이", position: 3 },
    { name: "메이토", position: 0 },
  ];

  expect(race.getWinner(result)).toEqual(["수이"]);
});

test("공동 우승자 출력", () => {
  const race = new Race(["수이", "메타", "메이토"], 2);
  const result = [
    { name: "메타", position: 2 },
    { name: "수이", position: 2 },
    { name: "메이토", position: 0 },
  ];

  expect(race.getWinner(result)).toEqual(["메타", "수이"]);
});
