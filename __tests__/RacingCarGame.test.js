const Car = require('../src/domain/Car');
const RacingCarGame = require('../src/domain/RacingCarGame');

describe('RacingCarGame 테스트', () => {
  const cars = ['pobi', 'fine', 'hp'].map((name) => new Car(name));
  const racingCarGame = new RacingCarGame(cars);

  test('자동차 이동 성공여부가 true인 경우에만 자동차가 이동한다.', () => {
    const carsMovingSuccesses = [true, false, false];
    racingCarGame.moveCars(carsMovingSuccesses);

    const result = racingCarGame.getCarsInfo().map((carInfo) => carInfo.distance);

    expect(result).toStrictEqual([2, 1, 1]);
  });

  test('가장 많은 거리를 이동한 자동차의 이름의 배열을 반환한다.', () => {
    const result = racingCarGame.getWinner();

    expect(result).toStrictEqual(['pobi']);
  });
});
