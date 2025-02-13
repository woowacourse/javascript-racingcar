import { getRandomNumber } from "../src/utils/getRandomNumber.js";
import Race from "../src/domain/Race.js";

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

test("공동 우승자 출력", () => {
  const race = new Race(["수이", "메타", "메이토"], 2);

  // Given: 자동차들의 위치 설정
  Object.defineProperty(race.carList[0], "position", { get: () => 2 });
  Object.defineProperty(race.carList[1], "position", { get: () => 2 });
  Object.defineProperty(race.carList[2], "position", { get: () => 0 });

  // When: 우승자 확인
  const winners = race.getWinnerName();

  // Then: 수이와 메타가 공동 우승자로 출력되어야 함
  expect(winners).toEqual(["수이", "메타"]);
});
