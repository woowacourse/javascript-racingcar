const Car = require('../src/models/Car');
const RacingCarGame = require('../src/models/RacingCarGame');
const Random = require('../src/utils/random');

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickNumberInRange);
};

describe('RacingCarGame 테스트', () => {
  const cars = ['pobi', 'fine', 'hp'].map((name) => new Car(name));
  const racingCarGame = new RacingCarGame(cars);
  test('무작위 값이 4 이상인 경우에만 자동차가 이동한다.', () => {
    mockRandoms([4, 1, 5]);

    racingCarGame.moveCars();

    const result = racingCarGame.getCarsInfo().map((carInfo) => carInfo.distance);
    expect(result).toStrictEqual([2, 1, 2]);
  });

  test('가장 많은 거리를 이동한 자동차의 이름의 배열을 반환한다.', () => {
    const result = racingCarGame.getWinner();

    expect(result).toStrictEqual(['pobi', 'hp']);
  });
});
