const Car = require('../src/domain/Car');

describe('자동차 이동 테스트', () => {
  test.each([3, 2])('이동 불가', (power) => {
    const car = new Car('A');
    car.move(power);

    expect(car.getPosition()).toEqual(1);
  });

  test.each([4, 9])('한칸 이동', (power) => {
    const car = new Car('A');
    car.move(power);

    expect(car.getPosition()).toEqual(2);
  });
});
