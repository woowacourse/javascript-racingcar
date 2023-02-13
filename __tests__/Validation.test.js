const { ERROR_SUBJECT } = require('../src/constants');
const validation = require('../src/domain/validator/validation');

describe('자동차 경주 게임의 입력값에 대한 유효성(validation) 테스트', () => {
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
      validation.carName(carNames);
    }).toThrow(ERROR_SUBJECT);
  });

  test.each([[1.1], [2.2], [-1], [0], ['제로'], ['eus'], [21], [150]])(
    '시도 횟수 예외 상황 테스트: %s일 때 에러 반환',
    (attemptCount) => {
      expect(() => {
        validation.attempt(attemptCount);
      }).toThrow(ERROR_SUBJECT);
    }
  );
});
