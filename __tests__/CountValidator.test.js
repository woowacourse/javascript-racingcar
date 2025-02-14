import CountValidator from '../src/utils/validator/CountValidator.js';
import ErrorMessage from '../src/constants/ErrorMessage.js';

describe('시도 횟수의 예외 상황 테스트', () => {
  test(`시도횟수가 숫자가 아닌 경우 ${ErrorMessage.isNotNumber} 메시지를 포함한 에러를 throw 한다.`, () => {
    const TRY_COUNT = NaN;

    expect(() => CountValidator.isNumber(TRY_COUNT)).toThrow(
      ErrorMessage.isNotNumber,
    );
  });

  test(`시도횟수가 정수가 아닌 경우 ${ErrorMessage.isNotInteger} 메시지를 포함한 에러를 throw 한다.`, () => {
    const TRY_COUNT = 0.5;

    expect(() => CountValidator.isInteger(TRY_COUNT)).toThrow(
      ErrorMessage.isNotInteger,
    );
  });

  test(`시도횟수가 0 이하인 경우 ${ErrorMessage.isInvalidNumber} 메시지를 포함한 에러를 throw 한다.`, () => {
    const TRY_COUNT = 0;

    expect(() => CountValidator.isAtLeastOne(TRY_COUNT)).toThrow(
      ErrorMessage.isInvalidNumber,
    );
  });

  test(`시도횟수가 100만 번 이하인 경우 ${ErrorMessage.isBigNumber} 메시지를 포함한 에러를 throw 한다.`, () => {
    const TRY_COUNT = 1_000_001;

    expect(() => CountValidator.isNotBigNumber(TRY_COUNT)).toThrow(
      ErrorMessage.isBigNumber,
    );
  });
});
