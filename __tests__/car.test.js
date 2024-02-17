import Car from "../src/domain/Car.js";

describe("Car 유닛 테스트", () => {
  describe("자동차는 매 라운드마다 전진 또는 정지한다. ", () => {
    const NAME = "Ryan";
    const shouldGoResult = [true, false, true, true, false];

    let count = -1;
    const shouldGo = () => {
      count++;
      return shouldGoResult[count];
    };

    const car = new Car(NAME, shouldGo);

    test.each([
      { shouldGo: true, expected: 1 },
      { shouldGo: false, expected: 1 },
      { shouldGo: true, expected: 2 },
      { shouldGo: true, expected: 3 },
      { shouldGo: false, expected: 3 },
    ])(
      "전진 여부가 $shouldGo면 마일리지 값이 $expected가 된다.",
      ({ expected }) => {
        car.go();

        expect(car.getMileage()).toBe(expected);
      }
    );
  });
});
