import Car from "../src/domain/Car.js";

describe("Car", () => {
  let car;
  const carName = "testCar";

  beforeEach(() => {
    car = new Car(carName);
  });

  it("getCarStatus가 car 객체의 현재 상태를 리턴하는지 테스트", () => {
    const carStatus = car.getCarStatus();
    expect(carStatus).toEqual({ name: carName, position: 0 });
  });

  it("tryToMove가 리턴값을 true, false로 반환하는지 테스트", () => {
    car.tryToMove();
    const carStatus = car.getCarStatus();

    // tryToMove의 결과가 난수이기 때문에 position은 0 또는 1이 될 수 있다.
    expect([0, 1]).toContain(carStatus.position);
  });
});
