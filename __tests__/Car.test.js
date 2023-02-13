const { Car } = require("../src/Car");
const { randomGenerator } = require("../src/randomGenerator");

describe("Car 객체 기능 검사", () => {
  test("입력 받은 자동차 이름 배열을 순회하면서 Car 객체를 생성한다.", () => {
    const car = new Car("testCar");
    const carInfo = car.getCarInfo();
    expect(carInfo.name).toEqual("testCar");
    expect(carInfo.moveCnt).toBe(0);
  });

  test("car가 move()한 경우 car의 moveCnt가 1 증가한다.", () => {
    const car = new Car("testCar");
    car.move();
    const carInfo = car.getCarInfo();
    expect(carInfo.name).toEqual("testCar");
    expect(carInfo.moveCnt).toBe(1);
  });
});
