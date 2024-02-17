const Car = require('../src/domain/Car.js');
const pickRandomNumberInRange = require('../src/utils/pickRandomNumberInRange.js');

jest.mock('../src/utils/pickRandomNumberInRange.js');

const mockRandoms = (numbers) => {
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, pickRandomNumberInRange);
};

describe('자동차 객체 테스트', () => {
  test('자동차 이동 테스트', () => {
    const carName = '붕붕이';
    const car = new Car(carName);
    const randoms = [4, 3, 2, 5, 9];
    const carDistanceResult = [1, 1, 1, 2, 3];

    mockRandoms([...randoms]);

    carDistanceResult.forEach((distance) => {
      expect(car.tryMove().distance).toBe(distance);
    });
  });

  test('우승 자동차 테스트 1', () => {
    const carName = '붕붕이';
    const car = new Car(carName);
    const winner = undefined;
    const winningDistance = 4;
    const randoms = [1, 2, 3, 4, 5];

    mockRandoms([...randoms]);

    randoms.forEach(() => {
      car.tryMove();
    });

    expect(car.isWinner(winningDistance)).toBe(winner);
  });

  test('우승 자동차 테스트 2', () => {
    const carName = '빵빵이';
    const car = new Car(carName);
    const winner = '빵빵이';
    const winningDistance = 2;

    const randoms = [1, 2, 3, 4, 5];

    mockRandoms([...randoms]);

    randoms.forEach(() => {
      car.tryMove();
    });

    expect(car.isWinner(winningDistance)).toBe(winner);
  });
});
