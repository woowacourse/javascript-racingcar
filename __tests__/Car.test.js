import Car from "../src/model/Car.js";

describe("Car", () => {
  let car;

  beforeEach(() => {
    car = new Car("seo");
  });

  test("자동차에 이름을 부여할 수 있다.", () => {
    expect(car.getName()).toBe("seo");
  });

  test("자동차의 최초 위치는 0으로 시작한다.", () => {
    expect(car.getPosition()).toBe(0);
  });

  test("4이상의 숫자가 나오면 자동차는 전진할 수 있다.", () => {
    const randomNumber = 4;

    car.move(randomNumber);

    expect(car.getPosition()).toBe(1);
  });

  test("4미만의 숫자가 나오면 자동차는 전진하지 않는다.", () => {
    const randomNumber = 3;

    car.move(randomNumber);

    expect(car.getPosition()).toBe(0);
  });
});
