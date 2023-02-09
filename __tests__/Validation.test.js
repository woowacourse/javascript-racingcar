const { ERROR_SUBJECT } = require('../src/constants');
const Validation = require('../src/Validation');

describe('Validation 테스트', () => {
  test.each([
    [['eus', 'eus']],
    [['eus', 'EUS']],
    [['a', 'eus']],
    [['abcdef', 'eus']],
    [['zero']],
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
    ],
    [['123', 'zero']],
    [['제로', 'zero']],
    [['eus!', 'zero']],
  ])('자동차 이름 예외 상황 테스트: %s일 때 에러 반환', (carNames) => {
    expect(() => {
      Validation.carName(carNames);
    }).toThrow(ERROR_SUBJECT);
  });

  test.each([[1.1], [2.2], [-1], [0], ['제로'], ['eus'], [21], [150]])(
    '시도 횟수 예외 상황 테스트: %s일 때 에러 반환',
    (attemptCount) => {
      expect(() => {
        Validation.attempt(attemptCount);
      }).toThrow(ERROR_SUBJECT);
    }
  );
});
