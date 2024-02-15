import Car from "../src/domain/Car.js";
import RandomUtil from "../src/utils/RandomUtil.js";

const mockRandoms = (numbers) => {
  RandomUtil.pickRandomNumber = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, RandomUtil.pickRandomNumber);
};

describe("Car 유닛 테스트", () => {
  test("getName 메서드가 정상적으로 차 이름을 반환한다.", () => {
    const name = "Hain";
    const car = new Car(name);

    expect(car.getName()).toBe(name);
  });

  test("getMileage 메서드가 정상적으로 마일리지를 반환한다.", () => {
    const name = "Sofa";
    const car = new Car(name);
    const MILEAGE_INITIAL_VALUE = 0;

    expect(car.getMileage()).toBe(MILEAGE_INITIAL_VALUE);
  });

  describe("go 메서드 테스트 ", () => {
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

  test("생성 시 이름이 5자 초과인 경우 오류가 발생한다.", () => {
    const name = "banana";
    const generateCar = () => new Car(name);
    expect(generateCar).toThrow("[ERROR]");
  });
});
