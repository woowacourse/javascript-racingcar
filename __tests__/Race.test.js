import Race from "../src/Race.js";
import * as Util from "../src/Util.js";

jest.mock("../src/Util.js");

const values = [9, 9, 1, 9, 9, 1];

test("우승자를 올바르게 반환하는지 테스트", () => {
  Util.getRandomNumber.mockImplementation(() => {
    return values.shift(); // 첫 번째 값을 반환하고 배열에서 제거
  });

  const CARS = ["aaa", "bbb", "ccc"];
  const COUNT = 2;
  const race = new Race(CARS, COUNT);
  race.raceCar();
  const WinnerList = race.getWinner();

  expect(WinnerList).toEqual(["aaa", "bbb"]);
});
