const Car = require('../src/models/Car');
const RacingCarGame = require('../src/models/RacingCarGame');
const Random = require('../src/utils/random');

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange
  );
};

describe('자동차 경주 게임 클래스 테스트', () => {
  const cars = ['pobi', 'fine', 'hp'].map((name) => new Car(name));
  const racingCarGame = new RacingCarGame(cars);
  test('자동차 이동', () => {
    mockRandoms([4, 1, 5]);

    racingCarGame.moveCars();

    const result = [...racingCarGame.getCarsInfo().values()];
    expect(result).toStrictEqual([2, 1, 2]);
  });

  test('우승자 테스트', () => {
    const result = racingCarGame.getWinner();

    expect(result).toStrictEqual(['pobi', 'hp']);
  });
});
