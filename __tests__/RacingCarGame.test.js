const { Car, RacingCarGame } = require('../src/domain');

describe('RacingCarGame 클래스 테스트', () => {
  const cars = ['pobi', 'fine', 'hp'].map((name) => new Car(name));
  const racingCarGame = new RacingCarGame(cars);

  test('전체 자동차 수를 반환한다.', () => {
    const result = racingCarGame.getCarCount();

    expect(result).toEqual(3);
  });

  test('전체 자동차가 boolean 값에 따라 이동한다.', () => {
    const carMoveSuccesses = [true, false, true];

    racingCarGame.moveCars(carMoveSuccesses);
    const result = [...racingCarGame.getCarsInfo().values()];

    expect(result).toStrictEqual([2, 1, 2]);
  });

  test('우승자 이름의 배열을 반환한다.', () => {
    const result = racingCarGame.getWinner();

    expect(result).toStrictEqual(['pobi', 'hp']);
  });
});
