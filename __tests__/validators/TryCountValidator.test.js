import { ERROR } from '../../src/constants/message.js';
import TryCountValidator from '../../src/validators/TryCountValidator.js';

describe('시도 횟수 유효성 클래스 테스트', () => {
  const tryCountValidator = new TryCountValidator();

  describe('정상 케이스', () => {
    test('시도 횟수는 양의 정수이다.', () => {
      const validNumbers = [1, 5, 10, 100];

      validNumbers.forEach((number) => {
        expect(() => tryCountValidator.validateNumber(number)).not.toThrow();
      });
    });
  });

  describe('예외 케이스', () => {
    test.each(['^', NaN, undefined, {}])('%p를 입력하면 에러가 발생한다.', (value) => {
      expect(() => tryCountValidator.validateNumber(value)).toThrow(ERROR.TRY_COUNT.INVALID_TYPE);
    });

    test.each([-1, 0, -Infinity, null, []])('%p를 입력하면 에러가 발생한다.', (value) => {
      expect(() => tryCountValidator.validateNumber(value)).toThrow(ERROR.TRY_COUNT.INVALID_RANGE);
    });
  });
});
