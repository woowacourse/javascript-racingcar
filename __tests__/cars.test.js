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
  describe("주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다. ", () => {
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
    ])(
      "$randomNumbers가 나오면 마일리지 값이 각각 $expected가 된다.",
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

  test("주어진 횟수 동안 진행되는 n대의 자동차 전진/정지 결과를 저장한다.", () => {
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

  test("자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다.", () => {
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
