import Car from "../src/domain/Car.js";
import randomNumber from "../src/utils/randomNumber.js";

jest.mock("../src/utils/randomNumber");

describe("Car", () => {
  beforeEach(() => {
    randomNumber.mockClear();
  });

  test("car 객체가 지정한 이름과 position 0으로 생성되는지 테스트", () => {
    const car = new Car("testCar");
    const status = car.getCarStatus();

    expect(status.name).toBe("testCar");
    expect(status.position).toBe(0);
  });

  test("getCarStatus가 car 객체의 현재 상태를 리턴하는지 테스트", () => {
    const car = new Car("testCar");
    const carStatus = car.getCarStatus();

    expect(carStatus).toEqual({ name: "testCar", position: 0 });
  });

  test("position 이동이 불가능한 경우 이동하지 않는지 테스트", () => {
    randomNumber.mockReturnValue(3);
    const car = new Car("testCar");

    car.tryToMove();

    const status = car.getCarStatus();
    expect(status.position).toBe(0);
  });

  it("position 이동이 가능한 경우 이동하는지 테스트", () => {
    randomNumber.mockReturnValue(4);
    const car = new Car("testCar");

    car.tryToMove();

    const status = car.getCarStatus();
    expect(status.position).toBe(1);
  });
});
