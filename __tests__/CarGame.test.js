const CarGame = require("../src/CarGame");

describe("자동차 게임 기능 단위 테스트", () => {
  const game = new CarGame();
  test("자동차 상태 초기화 테스트", () => {
    const carNames = ["야미", "클린", "레고"];
    game.initializeCarStatus(carNames);

    expect(game.getCarStatus()).toEqual({
      야미: 0,
      클린: 0,
      레고: 0,
    });
  });

  test("우승자 반환 테스트", () => {
    const carStatus = {
      야미: 2,
      클린: 3,
      레고: 3,
    };

    const winner = game.findWinner(carStatus);

    expect(winner).toEqual("클린,레고");
  });
});
