const Car = require('../src/domain/Car');
const { randomGenerator } = require('../src/utils/common');
const { GAME } = require('../src/utils/constants');

const mockRandoms = (numbers) => {
  randomGenerator.getBetween = jest.fn();
  numbers.reduce((acc, cur) => {
    return acc.mockReturnValueOnce(cur);
  }, randomGenerator.getBetween);
};

describe('Car 클래스', () => {
  test(`자동차가 전진하는 조건은 ${GAME.MOVE_CONDITION.min}에서 ${
    GAME.MOVE_CONDITION.max - 1
  } 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.`, () => {
    const car = new Car('name');
    const randomNumbers = [0, 1, 3, 5, 3, 2, 7, 9, 7];
    const distanceResult = [];

    mockRandoms(randomNumbers);
    randomNumbers.forEach(() => {
      car.move();
      distanceResult.push(car.getDistance());
    });

    expect(distanceResult).toEqual([0, 0, 0, 1, 1, 1, 2, 3, 4]);
  });

  test.each([
    [3, true],
    [4, false],
    [5, false],
  ])('자동차가 결승선에 도착했는지 알 수 있다.', (winningDistance, result) => {
    const car = new Car('name');

    mockRandoms([5, 5, 5]);
    car.move();
    car.move();
    car.move();

    expect(car.isFinish(winningDistance)).toEqual(result);
  });
});
