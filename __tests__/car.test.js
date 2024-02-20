const Car = require('../src/domain/Car.js');

describe('Car 클래스 동작 테스트', () => {
  test('입력받은 값에 따른 자동차 이동 유무 테스트', () => {
    const carName = '붕붕이';
    const car = new Car(carName);
    const randoms = [4, 3, 2, 5, 9];
    const carDistanceResult = [1, 1, 1, 2, 3];

    carDistanceResult.forEach((distanceResult, idx) => {
      const carCurrentDistance = car.tryMove(randoms[idx]).distance;
      expect(carCurrentDistance).toBe(distanceResult);
    });
  });

  test('자동차가 우승하지 않은 경우 반환값 테스트', () => {
    const carName = '붕붕이';
    const car = new Car(carName);
    const winner = undefined;
    const winningDistance = 4;
    const randoms = [1, 2, 3, 4, 5];

    randoms.forEach((randomVal) => {
      car.tryMove(randomVal);
    });

    expect(car.isWinner(winningDistance)).toBe(winner);
  });

  test('자동차가 우승한 경우 반환값 테스트', () => {
    const carName = '빵빵이';
    const car = new Car(carName);
    const winner = '빵빵이';
    const winningDistance = 2;

    const randoms = [1, 2, 3, 4, 5];

    randoms.forEach((randomVal) => {
      car.tryMove(randomVal);
    });

    expect(car.isWinner(winningDistance)).toBe(winner);
  });
});
