import Car from "../src/domain/Car.js";
import RandomUtil from "../src/utils/RandomUtil.js";

const mockRandoms = (numbers) => {
  RandomUtil.pickRandomNumber = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, RandomUtil.pickRandomNumber);
};

describe("Car 유닛 테스트", () => {
  describe("기능 테스트", () => {
    test("getName 메서드가 정상적으로 차 이름을 반환한다.", () => {
      const NAME = "Hain";

      const car = new Car(NAME);

      expect(car.getName()).toBe(NAME);
    });

    test("getMileage 메서드가 정상적으로 마일리지를 반환한다.", () => {
      const NAME = "Sofa";
      const MILEAGE_INITIAL_VALUE = 0;

      const car = new Car(NAME);

      expect(car.getMileage()).toBe(MILEAGE_INITIAL_VALUE);
    });

    describe("go 메서드 테스트 ", () => {
      const NAME = "Ryan";

      const car = new Car(NAME);

      const testCases = [
        { randomNumbers: 5, expected: 1 },
        { randomNumbers: 1, expected: 1 },
        { randomNumbers: 6, expected: 2 },
        { randomNumbers: 7, expected: 3 },
        { randomNumbers: 0, expected: 3 },
      ];

      test.each(testCases)(
        "$randomNumbers이(가) 나오면 마일리지 값이 $expected가 된다.",
        ({ randomNumbers, expected }) => {
          mockRandoms([randomNumbers]);

          car.go();

          expect(car.getMileage()).toBe(expected);
        }
      );
    });
  });

  describe("유효성 검증 테스트", () => {
    test("Car 객체 생성 시 주어진 이름이 5자 초과인 경우 오류가 발생한다.", () => {
      const NAME = "banana";

      const generateCar = () => new Car(NAME);

      expect(generateCar).toThrow("[ERROR]");
    });
  });
});
