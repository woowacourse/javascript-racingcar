import randomNumber from "../src/utils/randomNumber.js";
import Car from "../src/RacingCarGame/Car.js";

// randomNumber mocking
jest.mock("../src/utils/randomNumber");

describe("Car 객체 unit test", () => {

  test("전진을 위한 랜덤한 숫자가 4보다 작을 경우 자동차는 전진하지 않는다.", () => {
    randomNumber.mockImplementation(() => 3);
    const car = new Car("test");

    car.moveOn();
    const result = car.position();

    expect(result).toEqual(0);
  });

  test("전진을 위한 랜덤한 숫자가 4보다 크거나 같을 경우 자동차는 전진한다.", () => {
    randomNumber.mockImplementation(() => 4);
    const car = new Car("test");

    car.moveOn();
    const result = car.position();

    expect(result).toEqual(1);
  });
});