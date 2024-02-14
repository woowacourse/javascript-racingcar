import Car from "../src/domain/Car.js";
import RandomUtil from "../src/utils/RandomUtil.js";

const mockRandoms = (numbers) => {
  RandomUtil.pickRandomNumber = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, RandomUtil.pickRandomNumber);
};

describe("Car 유닛 테스트", () => {
  describe("go 함수 실행 시 ", () => {
    const name = "Ryan";
    const car = new Car(name);

    test.each([
      { randomNumbers: [5], expected: 1 },
      { randomNumbers: [1], expected: 1 },
      { randomNumbers: [6], expected: 2 },
      { randomNumbers: [7], expected: 3 },
      { randomNumbers: [0], expected: 3 },
    ])("%s가 나오면 마일리지 값이 %m가 된다.", ({ randomNumbers, expected }) => {
      mockRandoms(randomNumbers);

      car.go();

      expect(car.getMileage()).toBe(expected);
    });
  });
});
