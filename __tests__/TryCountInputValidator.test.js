const TryCountInputValidator = require('../src/domain/validators/TryCountInputValidator');

describe('자동차의 전진 시도 횟수를 위한 입력값의 유효성 검사', () => {
  test.each(['0', '-1', 'abcd', 'a0', '0a', '1.0'])(
    '입력값이 양의 정수가 아닌 경우 예외 처리',
    (input) => {
      expect(() => TryCountInputValidator.validate(input)).toThrow();
    },
  );

  test.each(['1', '3', '5', '10'])(
    '양의 정수가 입력값으로 들어오는 경우 정상 동작',
    (input) => {
      expect(() => TryCountInputValidator.validate(input)).not.toThrow();
    },
  );
});
