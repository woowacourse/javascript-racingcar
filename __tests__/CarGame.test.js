const Car = require("../src/Domain/Car");
const CarGame = require("../src/Domain/CarGame");

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

    const winner = game.findWinner([...testStatus.values()]);

    expect(winner).toEqual("클린,레고");
  });
});
