import RandomUtil from "../src/utils/RandomUtil.js";
import Car from "../src/domain/Car.js";
import Cars from "../src/domain/Cars.js";

const mockRandoms = (numbers) => {
  RandomUtil.pickRandomNumber = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, RandomUtil.pickRandomNumber);
};

describe("Cars 유닛 테스트", () => {
  describe("goAll 메서드 테스트 ", () => {
    const NAME1 = "Ryan";
    const NAME2 = "Hain";
    const NAME3 = "Pobi";

    const car1 = new Car(NAME1);
    const car2 = new Car(NAME2);
    const car3 = new Car(NAME3);

    const cars = new Cars([car1, car2, car3]);

    test.each([
      { randomNumbers: [5, 1, 6], expected: [1, 0, 1] },
      { randomNumbers: [2, 5, 6], expected: [1, 1, 2] },
      { randomNumbers: [6, 8, 9], expected: [2, 2, 3] },
    ])("%s가 나오면 마일리지 값이 %m가 된다.", ({ randomNumbers, expected }) => {
      const [expected1, expected2, expected3] = expected;

      mockRandoms(randomNumbers);
      cars.goAll();

      expect(car1.getMileage()).toBe(expected1);
      expect(car2.getMileage()).toBe(expected2);
      expect(car3.getMileage()).toBe(expected3);
    });
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

    const randomNumbers = [5, 1, 2];
    const expected = [NAME1];

    mockRandoms(randomNumbers);
    cars.goAll();

    expect(cars.getFirstPlaceNames()).toEqual(expected);
  });
});
