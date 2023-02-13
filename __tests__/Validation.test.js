const { ERROR_MESSAGE } = require('../src/constants');
const validation = require('../src/domain/validation');

describe('Validation 테스트', () => {
  test.each([
    [['eus', 'eus'], ERROR_MESSAGE.duplicatedCarName],
    [['eus', 'EUS'], ERROR_MESSAGE.duplicatedCarName],
    [['a', 'eus'], ERROR_MESSAGE.carNameLengthRange],
    [['abcdef', 'eus'], ERROR_MESSAGE.carNameLengthRange],
    [['zero'], ERROR_MESSAGE.carCountRange],
    [
      [
        'as',
        'bs',
        'cs',
        'ds',
        'fs',
        'gs',
        'qw',
        'asx',
        'XCa',
        'wqe',
        'asq',
        'bsa',
        'csz',
        'dsx',
        'fsc',
        'gsd',
        'qwf',
        'asxg',
        'XCah',
        'wqee',
        'wqeeq',
      ],
      ERROR_MESSAGE.carCountRange,
    ],
    [['123', 'zero'], ERROR_MESSAGE.onlyAlphabet],
    [['제로', 'zero'], ERROR_MESSAGE.onlyAlphabet],
    [['eus!', 'zero'], ERROR_MESSAGE.onlyAlphabet],
  ])(
    '자동차 이름 예외 상황 테스트: %o일 때 에러 %s 반환',
    (carNames, errorMessage) => {
      expect(() => {
        validation.carName(carNames);
      }).toThrow(errorMessage);
    }
  );

  test.each([
    [1.1, ERROR_MESSAGE.onlyInt],
    [2.2, ERROR_MESSAGE.onlyInt],
    [-1, ERROR_MESSAGE.attemptRange],
    [0, ERROR_MESSAGE.attemptRange],
    ['제로', ERROR_MESSAGE.onlyInt],
    ['eus', ERROR_MESSAGE.onlyInt],
    [21, ERROR_MESSAGE.attemptRange],
    [150, ERROR_MESSAGE.attemptRange],
    ['-1', ERROR_MESSAGE.attemptRange],
  ])(
    '시도 횟수 예외 상황 테스트: %i일 때 에러 %s 반환',
    (attemptCount, errorMessage) => {
      expect(() => {
        validation.attempt(attemptCount);
      }).toThrow(errorMessage);
    }
  );
});
