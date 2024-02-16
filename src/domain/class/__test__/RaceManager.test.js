import RaceManager from '../../src/class/RaceManager.js';
import CONSTANT from '../../src/CONSTANTS/index.js';
import getRandomNumberInRange from '../../src/utils/getRandomNumberInRange.js';

const { NUMERIC } = CONSTANT;

jest.mock('../../src/utils/getRandomNumberInRange');

const mockRandomNumberInRange = numbers => {
  jest.mock('../../src/utils/getRandomNumberInRange');
  numbers.forEach(n => {
    getRandomNumberInRange.mockReturnValueOnce(n);
  });
};

const getMockRandomArgument = isGone => {
  return isGone.reduce((array, oneGone) => {
    array.push(
      ...oneGone.map(boolean =>
        boolean ? NUMERIC.moveStandard : NUMERIC.moveStandard - 1
      )
    );
    return array;
  }, []);
};

const mockRaceManager = (carNames, isGone) => {
  mockRandomNumberInRange(getMockRandomArgument(isGone));
  const raceManager = new RaceManager(carNames, isGone[0].length);
  raceManager.setResult();
  return raceManager;
};

describe('RaceManager 검증', () => {
  test('getResultString', () => {
    //Arrange
    const carNames = ['a', 'b', 'c'];
    const isGone = [
      [true, false, false],
      [false, true, true],
      [true, false, false],
    ];
    const raceManager = mockRaceManager(carNames, isGone);
    const expected =
      'a : -\nb : \nc : -\n\na : -\nb : -\nc : -\n\na : -\nb : --\nc : -';
    //Act
    const resultString = raceManager.getResultString();
    //Assert
    expect(resultString).toBe(expected);
  });
});
