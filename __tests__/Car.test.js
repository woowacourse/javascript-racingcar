const { StaticValue } = require("../src/constants/Constants");
const Car = require("../src/domain/Car");

describe("Car 클래스 테스트", () => {
  const CAR_NAMES = ["우아한", "테크코스", "형제들", "합격"];
  const CARS = CAR_NAMES.map((name) => new Car(name));

  test("외부에서 전달된 이름을 가진 인스턴스가 잘 생성되는지 확인", () => {
    CARS.forEach((car, index) => {
      expect(car.getName()).toEqual(CAR_NAMES[index]);
    });
  });

  test("4이상의 숫자를 입력받았을 때 자동차 인스턴스의 distance 필드가 하나 증가는지 확인", () => {
    const CAR = new Car("우형합격");
    const RANDOM_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const EXPECTED_DISTANCES = [0, 0, 0, 0, 1, 2, 3, 4, 5, 6];

    RANDOM_NUMBERS.forEach((number, index) => {
      if (number >= StaticValue.MOVE_CONDITION) CAR.move();

      expect(CAR.getCurrentDistance()).toEqual(EXPECTED_DISTANCES[index]);
    });
  });
});
