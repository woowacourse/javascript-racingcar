/* eslint-disable */

const CarRaceGame = require("../src/domain/CarRaceGame");
const { RESULT } = require("../src/constant/Constant");

describe("[CarRaceGame] 자동차 개수 확인 테스트", () => {
  test("자동차가 a, b, c일 경우, 자동차가 몇 대인지를 불러올 때 3을 가져와야 한다.", () => {
    const game = new CarRaceGame();
    game.createRaceUsingCarNames(["a", "b", "c"]);
    expect(game.getCarCount()).toBe(3);
  });

  test("자동차가 10대일 경우, 자동차가 몇 대인지를 불러올 때 10을 가져와야 한다.", () => {
    const game = new CarRaceGame();
    game.createRaceUsingCarNames([
      "sZ0Xv",
      "vPmWI",
      "vJm",
      "u",
      "okQZ",
      "vNM",
      "wEq8",
      "3M",
      "-0V;",
      "zK",
    ]);
    expect(game.getCarCount()).toBe(10);
  });

  test("자동차가 단 한 대일 경우, 1을 가져와야 한다.", () => {
    const game = new CarRaceGame();
    game.createRaceUsingCarNames(["Solo"]);
    expect(game.getCarCount()).toBe(1);
  });
});

describe("[CarRaceGame] 자동차 이동 거리 및 자동차 이름 테스트", () => {
  test("자동차가 골고루 이동하는 케이스 - 이동 후 자동차 목록과 거리를 가져와야 한다.", () => {
    const game = new CarRaceGame();
    game.createRaceUsingCarNames(["carA", "carB", "carC"]);

    game.performRaceOnce([RESULT.run, RESULT.run, RESULT.stay]);
    game.performRaceOnce([RESULT.stay, RESULT.run, RESULT.stay]);
    game.performRaceOnce([RESULT.run, RESULT.stay, RESULT.stay]);
    game.performRaceOnce([RESULT.stay, RESULT.stay, RESULT.stay]);
    game.performRaceOnce([RESULT.stay, RESULT.run, RESULT.stay]);

    expect(game.getRaceResult()).toEqual({
      carNames: ["carA", "carB", "carC"],
      carDistances: [2, 3, 0],
    });
  });

  test("많은 자동차가 이동하는 케이스 - 모든 자동차가 한 번씩 이동하므로 결과는 모두 1이어야 한다.", () => {
    const game = new CarRaceGame();
    game.createRaceUsingCarNames([
      "sZ0Xv",
      "vPmWI",
      "vJm",
      "u",
      "okQZ",
      "vNM",
      "wEq8",
      "3M",
      "-0V;",
      "zK",
    ]);

    game.performRaceOnce([
      RESULT.run,
      RESULT.stay,
      RESULT.run,
      RESULT.stay,
      RESULT.stay,
      RESULT.stay,
      RESULT.run,
      RESULT.stay,
      RESULT.run,
      RESULT.run,
    ]);
    game.performRaceOnce([
      RESULT.stay,
      RESULT.run,
      RESULT.stay,
      RESULT.run,
      RESULT.run,
      RESULT.run,
      RESULT.stay,
      RESULT.run,
      RESULT.stay,
      RESULT.stay,
    ]);

    expect(game.getRaceResult()).toEqual({
      carNames: ["sZ0Xv", "vPmWI", "vJm", "u", "okQZ", "vNM", "wEq8", "3M", "-0V;", "zK"],
      carDistances: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    });

    game.performRaceOnce([
      RESULT.stay,
      RESULT.run,
      RESULT.stay,
      RESULT.run,
      RESULT.run,
      RESULT.run,
      RESULT.stay,
      RESULT.run,
      RESULT.stay,
      RESULT.stay,
    ]);

    expect(game.getRaceResult()).toEqual({
      carNames: ["sZ0Xv", "vPmWI", "vJm", "u", "okQZ", "vNM", "wEq8", "3M", "-0V;", "zK"],
      carDistances: [1, 2, 1, 2, 2, 2, 1, 2, 1, 1],
    });
  });

  test("하나의 자동차만 이동하는 케이스 - 이동 거리는 15이어야 한다.", () => {
    const game = new CarRaceGame();
    game.createRaceUsingCarNames(["Solo"]);
    const operations = [
      RESULT.run,
      RESULT.run,
      RESULT.stay,
      RESULT.stay,
      RESULT.run,
      RESULT.run,
      RESULT.run,
      RESULT.stay,
      RESULT.run,
      RESULT.stay,
      RESULT.run,
      RESULT.run,
      RESULT.run,
      RESULT.stay,
      RESULT.stay,
      RESULT.run,
      RESULT.stay,
      RESULT.run,
      RESULT.stay,
      RESULT.stay,
      RESULT.run,
      RESULT.run,
      RESULT.run,
      RESULT.run,
      RESULT.stay,
    ];

    console.log(operations[1]);

    operations.forEach((currentOperation) => {
      game.performRaceOnce([currentOperation]);
    });

    expect(game.getRaceResult()).toEqual({
      carNames: ["Solo"],
      carDistances: [15],
    });
  });
});
