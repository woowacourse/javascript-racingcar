const Car = require("../src/domain/Car");
const RacingGame = require("../src/controller/RacingGame");

describe("Car 모델 테스트", () => {
  test("Car 모델 전진 테스트", () => {
    let car = new Car();

    car.decideGoAndStop(3);
    car.decideGoAndStop(6);

    const position = car.getPosition();
    expect(position).toEqual(1);
  });

  test("Car 이름 확인 테스트", () => {
    let car = new Car();

    car.inputName("patrick");

    const name = car.getName();
    expect(name).toBe("patrick");
  });

  test("Car 우승자 확인 테스트", () => {
    let racingGame = new RacingGame();

    racingGame.setCar(["patrick", "dori"]);
    racingGame.runCar(() => 5);
    racingGame.whoIsWinners()

    expect(racingGame.winners).toEqual(["patrick", "dori"]);
  });
});
