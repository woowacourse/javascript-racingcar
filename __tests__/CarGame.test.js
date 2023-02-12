import Car from "../src/Domain/Car.js";
import CarGame from "../src/Domain/CarGame.js";

describe("자동차 게임 기능 단위 테스트", () => {
  test("우승자 반환 테스트", () => {
    const game = new CarGame();
    const carNames = [
      ["야미", 2],
      ["클린", 3],
      ["레고", 3],
    ];
    const testStatus = new Map();
    for (const [name, move] of carNames) {
      const car = new Car(name);
      car.move(move);
      testStatus.set(name, car);
    }

    const winner = game.getWinnerNames([...testStatus.values()], 3);

    expect(winner).toEqual("클린,레고");
  });

  test("제일 멀리 간 자동차 위치 확인 테스트", () => {
    const game = new CarGame();
    const carNames = [
      ["야미", 2],
      ["클린", 3],
      ["레고", 3],
    ];
    const testStatus = new Map();
    for (const [name, move] of carNames) {
      const car = new Car(name);
      car.move(move);
      testStatus.set(name, car);
    }

    const maxPosition = game.getMaxPosition([...testStatus.values()]);

    expect(maxPosition).toBe(3);
  });
});
