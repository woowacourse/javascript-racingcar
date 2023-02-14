const Car = require('../src/domain/Car');
const { GAME } = require('../src/utils/constants');

describe('Car 클래스', () => {
  test(`자동차는 각 단계에서 전진하거나 멈춰있을 수 있다.`, () => {
    const car = new Car('name');
    const moveConditions = [true, false, false, true];
    const distanceResult = [];

    moveConditions.forEach((moveCondition) => {
      car.move(moveCondition);
      distanceResult.push(car.getDistance());
    });

    expect(distanceResult).toEqual([1, 1, 1, 2]);
  });

  test.each([
    [3, true],
    [4, false],
    [5, false],
  ])('자동차가 결승선에 도착했는지 알 수 있다.', (winningDistance, result) => {
    const car = new Car('name');

    car.move(true);
    car.move(true);
    car.move(true);

    expect(car.isFinish(winningDistance)).toEqual(result);
  });
});
