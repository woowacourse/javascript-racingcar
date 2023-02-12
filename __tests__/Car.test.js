const Car = require("../src/Domain/Car");

describe("자동차 객체 테스트", () => {
  test("자동차 객체 생성 테스트", () => {
    const car = new Car("클린");

    expect(car.getCarStatus()).toEqual({ name: "클린", position: 0 });
  });

  test("자동차 이동 테스트", () => {
    const car = new Car("클린");

    car.move(4);

    expect(car.getCarStatus()).toEqual({ name: "클린", position: 4 });
  });
});
