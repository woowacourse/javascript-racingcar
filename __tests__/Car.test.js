// given
// when

const Car = require("../src/model/Car");

// then
describe("Car 클래스 테스트", () => {
  const carName = ["우아한", "테크코스", "형제들", "합격"];
  const cars = carName.map((name) => new Car(name));

  test("외부에서 전달된 이름을 가진 인스턴스가 잘 생성되는지 확인", () => {
    cars.forEach((car, index) => {
      expect(car.getName()).toEqual(carName[index]);
    });
  });

  test("4이상의 숫자를 입력받았을 때 자동차 인스턴스의 distance 필드가 하나 증가는지 확인", () => {
    const car = new Car("우형합격");
    const randomNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const expectedDistance = [0, 0, 0, 0, 1, 2, 3, 4, 5, 6];

    randomNumbers.forEach((number, index) => {
      car.move(number);
      expect(car.getCurrentDistance()).toEqual(expectedDistance[index]);
    });
  });
});
