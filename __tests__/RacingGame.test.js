import RacingGame from "../src/domain/RacingGame.js";
import RandomNumberGenerator from "../src/util/RandomNumberGenerator.js";

describe("RacingGame 클래스 테스트", () => {
  test("RacingGame을 생성하면 2개의 Car 인스턴스가 생성되고, 현재 이동 거리는 0이다.", () => {
    const racingGame = new RacingGame("룩소,아인", 1);

    const result = racingGame.getCarsResultOfOneTurn();

    expect(result).toEqual([
      { name: "룩소", currentDistance: 0 },
      { name: "아인", currentDistance: 0 },
    ]);
  });

  test("3번의 게임 시도 횟수가 주어질 때, 3번의 턴이 끝나면 게임 종료 상태가 된다.", () => {
    const racingGame = new RacingGame("룩소,아인", 3);

    racingGame.raceOneTurn();
    racingGame.raceOneTurn();
    racingGame.raceOneTurn();

    const isGameComplete = racingGame.isGameComplete();

    expect(isGameComplete).toBe(true);
  });
});
