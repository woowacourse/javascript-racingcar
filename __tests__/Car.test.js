import randomNumber from "../src/utils/randomNumber.js";
import Car from "../src/RacingCarGame/Car.js";

// randomNumber mocking
jest.mock("../src/utils/randomNumber");

describe("Car 객체 constructor test", () => {

  test("Car 객체가 올바르게 생성되어야 한다.", () => {
    const car = new Car('testCar');

    const info = car.getInfo();

    expect(info.name).toBe('testCar');
    expect(info.position).toBe(0);
  });
});


describe("Car 객체 moveOn method test", () => {

  test("전진을 위한 랜덤한 숫자가 4보다 작을 경우 자동차는 전진하지 않는다.", () => {
    randomNumber.mockImplementation(() => 3);
    const car = new Car("testCar");

    car.moveOn();
    const result = car.getInfo().position;

    expect(result).toEqual(0);
  });

  test("전진을 위한 랜덤한 숫자가 4보다 크거나 같을 경우 자동차는 전진한다.", () => {
    randomNumber.mockImplementation(() => 4);
    const car = new Car("testCar");

    car.moveOn();
    const result = car.getInfo().position;

    expect(result).toEqual(1);
  });
});

describe("Car 객체 info method test", () => {
  test("Car info가 자동차의 정보를 올바르게 반환해야 한다.", () => {
    const car = new Car('testCar');
    randomNumber.mockImplementation(() => 4);

    // 초기 상태 테스트
    let info = car.getInfo();
    expect(info.name).toBe('testCar');
    expect(info.position).toBe(0);

    car.moveOn();
    info = car.getInfo();

    expect(info.name).toBe('testCar');
    expect(info.position).toBe(1);
  });

})