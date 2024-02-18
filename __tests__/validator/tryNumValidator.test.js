import { TRY_CONSTANTS } from '../../src/constanst/app-constants';
import TryNumValidator from '../../src/validator/tryNumValidator';

describe('TryNumValidator 객체 테스트', () => {
  const { TRY_RANGE } = TRY_CONSTANTS;

  describe('시도 횟수는 숫자만 입력할 수 있다.', () => {
    test.each(['다섯번', '6번'])('예외) "%s"은 숫자가 아니므로 에러가 나야한다.', (isNaNInput) => {
      expect(() => TryNumValidator.checkTryNum(isNaNInput)).toThrow();
    });
  });

  describe(`시도 횟수는 ${TRY_RANGE.min} 이상 ${TRY_RANGE.max} 이하만 입력 가능하다.`, () => {
    test.each([TRY_RANGE.min - 1, TRY_RANGE.max + 1])(
      '예외) 시도 횟수가 범위를 벗어난 %d일 때 에러가 나야한다.',
      (invalidTryNum) => {
        expect(() => TryNumValidator.checkTryNum(invalidTryNum)).toThrow();
      },
    );

    test.each([TRY_RANGE.min, TRY_RANGE.max])(
      '엣지) 시도 횟수가 경계값 %d일 때 에러가 나지 않아야 한다.',
      (validTryNum) => {
        expect(() => TryNumValidator.checkTryNum(validTryNum)).not.toThrow();
      },
    );
  });
});
