const Car = require("../src/domain/Car.js");
const GameManager = require("../src/domain/GameManager.js");

describe("Car.js에 대한 테스트 코드", () => {
  test.each([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 1],
    [5, 1],
    [6, 1],
    [7, 1],
    [8, 1],
    [9, 1],
  ])("makeNumberMove 메서드에 대한 테스트 코드", (number, move) => {
    // given
    const car = new Car("pobi");

    // then
    expect(car.makeNumberMove(number)).toEqual(move);
  });

  test("getWinner 메서드에 대한 테스트 코드", () => {
    //given
    const carsStatus = [
      { name: "pobi", position: [1, 0, 1, 1, 1, 0] },
      { name: "noah", position: [1, 1, 1, 1, 1, 1] },
      { name: "jun", position: [1, 0, 0, 1, 1, 0] },
      { name: "jeremy", position: [1, 0, 0, 0, 0, 0] },
    ];

    //when
    const gameManager = new GameManager(carsStatus);
    const winner = gameManager.winner;

    //then
    expect(winner).toEqual(["noah"]);
  });
});
