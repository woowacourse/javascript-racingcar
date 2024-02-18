import CONSTANTS from '../../../CONSTANTS/index.js';
import RaceManager from '../RaceManager.js';
import mockRandomNumberInRange from './testUtil/mockRandomNumberInRange.js';

const { numeric } = CONSTANTS;

const getMockRandomArgument = isGone => {
  return isGone.reduce((array, oneGone) => {
    array.push(
      ...oneGone.map(boolean =>
        boolean ? numeric.MOVE_STANDARD : numeric.MOVE_STANDARD - 1
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
  test('getResultString이 올바른 값을 반환하는지 검증', () => {
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
