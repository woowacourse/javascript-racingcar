import Car from "../src/domain/Car.js";
import randomNumber from "../src/utils/randomNumber.js";

jest.mock("../src/utils/randomNumber");

describe("Car", () => {
  let car;

  beforeEach(() => {
    car = new Car("testCar");
    randomNumber.mockClear();
  });

  test("car 객체가 지정한 이름과 position 0으로 생성되는지 테스트", () => {
    const status = car.getCarStatus();

    expect(status.name).toBe("testCar");
    expect(status.position).toBe(0);
  });

  test("getCarStatus가 car 객체의 현재 상태를 리턴하는지 테스트", () => {
    const carStatus = car.getCarStatus();

    expect(carStatus).toEqual({ name: "testCar", position: 0 });
  });

  test("난수가 4 미만일 때 이동하지 않는지 테스트", () => {
    randomNumber.mockReturnValue(3);

    car.tryToMove();

    const status = car.getCarStatus();
    expect(status.position).toBe(0);
  });

  it("난수가 4 이상일 때 이동하는지 테스트", () => {
    randomNumber.mockReturnValue(4);

    car.tryToMove();

    const status = car.getCarStatus();
    expect(status.position).toBe(1);
  });
});
