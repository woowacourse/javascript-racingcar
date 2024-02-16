import RandomUtil from "../src/utils/RandomUtil.js";
import Car from "../src/domain/Car.js";
import Cars from "../src/domain/Cars.js";

const mockRandoms = (numbers) => {
  RandomUtil.pickRandomNumberBetween = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, RandomUtil.pickRandomNumberBetween);
};

describe("Cars 유닛 테스트", () => {
  describe("기능 테스트", () => {
    describe("goAll 메서드 테스트 ", () => {
      const NAME1 = "Ryan";
      const NAME2 = "Hain";
      const NAME3 = "Pobi";

      const car1 = new Car(NAME1);
      const car2 = new Car(NAME2);
      const car3 = new Car(NAME3);

      const cars = new Cars([car1, car2, car3]);

      const testCases = [
        { randomNumbers: [5, 1, 6], expected: [1, 0, 1] },
        { randomNumbers: [2, 5, 6], expected: [1, 1, 2] },
        { randomNumbers: [6, 8, 9], expected: [2, 2, 3] },
      ];

      test.each(testCases)(
        "$randomNumbers가 나오면 Car 객체들의 마일리지 값이 각각 $expected가 된다.",
        ({ randomNumbers, expected }) => {
          const [expected1, expected2, expected3] = expected;

          mockRandoms(randomNumbers);

          cars.goAll();

          expect(car1.getMileage()).toBe(expected1);
          expect(car2.getMileage()).toBe(expected2);
          expect(car3.getMileage()).toBe(expected3);
        }
      );
    });

    test("getMileageBoard 매서드가 정상적으로 차 이름과 마일리지 정보를 담은 배열을 반환한다.", () => {
      const NAME1 = "Ryan";
      const NAME2 = "Hain";
      const NAME3 = "Pobi";

      const car1 = new Car(NAME1);
      const car2 = new Car(NAME2);
      const car3 = new Car(NAME3);

      const cars = new Cars([car1, car2, car3]);

      const expected = [
        { name: NAME1, mileage: 0 },
        { name: NAME2, mileage: 0 },
        { name: NAME3, mileage: 0 },
      ];

      expect(cars.getMileageBoard()).toEqual(expected);
    });

    test("getFirstPlaceNames 매서드가 정상적으로 현재 마일리지가 가장 높은 차의 이름이 담긴 배열을 반환한다.", () => {
      const NAME1 = "Ryan";
      const NAME2 = "Hain";
      const NAME3 = "Pobi";

      const car1 = new Car(NAME1);
      const car2 = new Car(NAME2);
      const car3 = new Car(NAME3);

      const cars = new Cars([car1, car2, car3]);

      const MOCK_RANDOM_NUMBERS = [5, 1, 2];
      const expected = [NAME1];

      mockRandoms(MOCK_RANDOM_NUMBERS);

      cars.goAll();

      expect(cars.getFirstPlaceNames()).toEqual(expected);
    });
  });

  describe("유효성 검증 테스트", () => {
    describe("Cars 객체 생성 시 주어진 Car 객체의 개수가 2 이상 100 이하가 아닌 경우 오류가 발생한다.", () => {
      const SINGLE_NAME = ["Ryan"];
      const TOO_MANY_NAMES = new Array(101).fill().map((_, i) => `na${i}`);

      test.each([[SINGLE_NAME], [TOO_MANY_NAMES]])("", (names) => {
        const cars = names.map((name) => new Car(name));

        const generateCars = () => new Cars(cars);

        expect(generateCars).toThrow("[ERROR]");
      });
    });

    test("Cars 객체 생성 시 주어진 Car 객체들의 이름 간 중복이 발생한 경우 오류가 발생한다.", () => {
      const NAME = "Ryan";

      const car1 = new Car(NAME);
      const car2 = new Car(NAME);

      const generateCars = () => new Cars([car1, car2]);

      expect(generateCars).toThrow("[ERROR]");
    });

    test("Cars 객체 생성 시 Car 객체가 아닌 타입의 배열이 주어질 경우 오류가 발생한다.", () => {
      const WRONG_TYPE_CARS = ["Ryan", "Hain", "Pobi"];

      const generateCars = () => new Cars(WRONG_TYPE_CARS);

      expect(generateCars).toThrow("[ERROR]");
    });
  });
});
