import Car from "../src/Model/Car.js";

const MOVE_FORWARD = 4;
const MOVE_STOP = 3;

describe("자동차 움직임", () => {
  test("자동차 전진하기", () => {
    const car = new Car("테스트");

    car.move(MOVE_FORWARD);
    expect(car.position).toBe(1);
  });

  test("자동차 정지하기", () => {
    const car = new Car("테스트");
    car.move(MOVE_STOP);
    expect(car.position).toBe(0);
  });
});
