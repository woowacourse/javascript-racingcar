const Car = require("../src/Domain/Car");

describe("자동차 클래스 생성 및 전진 테스트", () => {
  test("자동차 전진 테스트 : 전진하지 않을 시 (0~3)", () => {
    const car = new Car([0, 3]);
    expect(car.getRaceResult()).toEqual(["", ""]);
  });

  test("자동차 전진 테스트 : 전진 시 (4~9)", () => {
    const car = new Car([4, 9]);
    expect(car.getRaceResult()).toEqual(["-", "-"]);
  });
});
