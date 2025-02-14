import { racingCarController } from "./controller.js";

describe("racingCarController 로직 테스트", () => {
  const carNames = ["아더", "써밋"];
  const { advanceRacingCar, getRacingCarResult, getWinners } =
    racingCarController(carNames);

  beforeEach(() => {
    advanceRacingCar("아더");
    advanceRacingCar("아더");
    advanceRacingCar("써밋");
  });

  test("아더는 2칸 전진, 써밋은 1칸 전진한 결과를 테스트한다.", () => {
    const racingCarResult = "아더: --\n써밋: -\n";
    expect(getRacingCarResult()).toBe(racingCarResult);
  });

  test("2칸을 전진한 아더만 우승자이다.", () => {
    const winners = ["아더"];
    expect(getWinners()).toEqual(winners);
  });
});
