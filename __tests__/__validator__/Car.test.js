const CarValidator = require('../../src/validator/CarValidator');

describe('자동차 예외 처리 테스트', () => {
  test('자동차 이름은 1~5자만 들어갈 수 있다.', () => {
    const NAME = 'abcdefggh,';

    expect(() => CarValidator.checkName(NAME)).toThrow('[ERROR]');
  });

  test('입력 가능한 전진 시도 횟수는 1부터 10이하이다.', () => {
    const tryCount = 0;

    expect(() => {
      CarValidator.checkTryCount(tryCount);
    }).toThrow('[ERROR]');
  });
});
