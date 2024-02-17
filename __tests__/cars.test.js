import Car from "../src/domain/Car.js";
import Cars from "../src/domain/Cars.js";

describe("Cars 유닛 테스트", () => {
  describe("주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다. ", () => {
    const NAME1 = "Ryan";
    const NAME2 = "Hain";
    const NAME3 = "Pobi";

    const shouldGoresultForCar1 = [true, false, true];
    const shouldGoresultForCar2 = [false, true, true];
    const shouldGoresultForCar3 = [true, true, true];

    let countForCar1 = -1;
    let countForCar2 = -1;
    let countForCar3 = -1;

    const shouldGoForCar1 = () => {
      countForCar1++;
      return shouldGoresultForCar1[countForCar1];
    };
    const shouldGoForCar2 = () => {
      countForCar2++;
      return shouldGoresultForCar2[countForCar2];
    };
    const shouldGoForCar3 = () => {
      countForCar3++;
      return shouldGoresultForCar3[countForCar3];
    };

    const car1 = new Car(NAME1, shouldGoForCar1);
    const car2 = new Car(NAME2, shouldGoForCar2);
    const car3 = new Car(NAME3, shouldGoForCar3);

    const cars = new Cars([car1, car2, car3]);

    test.each([
      { randomNumbers: shouldGoresultForCar1, expected: [1, 0, 1] },
      { randomNumbers: shouldGoresultForCar2, expected: [1, 1, 2] },
      { randomNumbers: shouldGoresultForCar3, expected: [2, 2, 3] },
    ])(
      "$randomNumbers가 나오면 마일리지 값이 각각 $expected가 된다.",
      ({ randomNumbers, expected }) => {
        const [expected1, expected2, expected3] = expected;

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

    const car1 = new Car(NAME1, () => true);
    const car2 = new Car(NAME2, () => false);
    const car3 = new Car(NAME3, () => false);

    const cars = new Cars([car1, car2, car3]);
    const expected = [NAME1];

    cars.goAll();

    expect(cars.getFirstPlaceNames()).toEqual(expected);
  });
});
