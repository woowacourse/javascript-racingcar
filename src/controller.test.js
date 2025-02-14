import { racingCarController } from "./controller.js";

describe("racingCarController 로직 테스트", () => {
  test("2칸을 전진한 아더만 우승자이다.", () => {
    const carNames = ["아더", "써밋"];
    const { advanceRacingCar, getWinners } = racingCarController(carNames);

    advanceRacingCar("아더");
    advanceRacingCar("아더");
    advanceRacingCar("써밋");

    const winners = ["아더"];
    expect(getWinners()).toEqual(winners);
  });
});
