const Car = require("../src/model/Car");
const Controller = require("../src/controller/Controller");

describe("Car 모델 테스트", () => {
  test("Car 모델 전진 테스트", () => {
    let car = new Car();

    car.decideGoAndStop(3);
    car.decideGoAndStop(6);

    const position = car.getPosition();
    expect(position).toEqual(1);
  });

  test("Car 우승자 확인 테스트", () => {
    let controller = new Controller();

    controller.makeCars(["patrick", "dori"]);
    controller.moveCars(2, () => 5);
    controller.whoIsWinners();

    expect(controller.winners).toEqual(["patrick", "dori"]);
  });
});
