import Race from "../src/Race";
import * as Util from "../src/Util.js";

jest.mock("../src/Util.js");

test("우승자를 올바르게 반환하는지 테스트", () => {
  Util.getRandomNumber
    .mockReturnValueOnce(9)
    .mockReturnValueOnce(9)
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(9)
    .mockReturnValueOnce(9)
    .mockReturnValueOnce(1);

  const CARS = ["aaa", "bbb", "ccc"];
  const COUNT = 2;
  const race = new Race(CARS, COUNT);
  race.raceCar();
  const WinnerList = race.getWinner();

  expect(WinnerList).toEqual(["aaa", "bbb"]);
});
