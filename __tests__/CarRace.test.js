const { RACE_ERROR_MESSAGE } = require('../src/Constant/ErrorMessage');
const Car = require('../src/Models/Car');
const CarRace = require('../src/Models/CarRace');
const RandomNumGenerator = require('../src/Utils/RandomNumGenerator');

const mockRandoms = numbers => {
  RandomNumGenerator.generateNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    RandomNumGenerator.generateNumberInRange,
  );
};

describe('CarRace Class 테스트', () => {
  test('동작 테스트', () => {
    const cars = ['garam', 'yeop'].map(name => new Car(name));
    const carRace = new CarRace(cars);
    const tryCount = 3;
    mockRandoms([1, 2, 3, 4, 5, 6]);
    const result = new Map([
      ['garam', 1],
      ['yeop', 2],
    ]);

    // when
    for (let i = 0; i < tryCount; i += 1) {
      carRace.runOnce();
    }

    // then
    expect(carRace.getResult()).toEqual(result);
  });

  test.each([[['garam'], [''], ['garam', 'garam']]])(
    '자동차 이름이 한개 이하거나 중복될 경우 예외처리한다.',
    input => {
      expect(() => {
        CarRace.validateCars(input);
      }).toThrow(RACE_ERROR_MESSAGE.NUMBER_OF_NAMES);
    },
  );

  test.each([[0], [-1]])('시도 횟수가 1이상이 아니면 예외처리한다', input => {
    expect(() => {
      CarRace.validateTryCount(input);
    }).toThrow(RACE_ERROR_MESSAGE.RANGE_OF_TRY_COUNT);
  });

  test.each([['aa'], [' '], ['한']])(
    '시도 횟수가 숫자가 아니면 예외처리한다',
    input => {
      expect(() => {
        CarRace.validateTryCount(input);
      }).toThrow(RACE_ERROR_MESSAGE.RANGE_OF_TRY_COUNT);
    },
  );
});
