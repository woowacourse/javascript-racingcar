const { Car } = require('../src/Car');

describe('Car 모델의 move 메서드 테스트', () => {
  let car;
  beforeEach(() => {
    car = new Car('testCar');
  });

  test.each([4, 9])('4 이상의 값에서 이동하다', (randomNumber) => {
    car.move(randomNumber);
    const carPosition = car.getCarInfo().position;

    expect(carPosition).toBe(1);
  });

  test.each([0, 3])('3 이하의 값에서 이동하지 않는다', (randomNumber) => {
    car.move(randomNumber);
    const carPosition = car.getCarInfo().position;

    expect(carPosition).toBe(0);
  });
});
