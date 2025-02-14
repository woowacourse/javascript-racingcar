import CountValidator from '../src/utils/validator/CountValidator.js';
import ErrorMessage from '../src/constants/ErrorMessage.js';

describe('시도 횟수의 예외 상황 테스트', () => {
  test(`시도 횟수가 숫자가 아닌 경우 ${ErrorMessage.NaNTryCount} 메시지를 포함한 에러를 throw 한다.`, () => {
    const TRY_COUNT = NaN;

    expect(() => CountValidator.isNumber(TRY_COUNT)).toThrow(
      ErrorMessage.NaNTryCount,
    );
  });

  test(`시도 횟수가 정수가 아닌 경우 ${ErrorMessage.notInteger} 메시지를 포함한 에러를 throw 한다.`, () => {
    const TRY_COUNT = 0.5;

    expect(() => CountValidator.isInteger(TRY_COUNT)).toThrow(
      ErrorMessage.notInteger,
    );
  });

  test(`시도 횟수가 0 이하인 경우 ${ErrorMessage.invalidRangeTryCount} 메시지를 포함한 에러를 throw 한다.`, () => {
    const TRY_COUNT = 0;

    expect(() => CountValidator.isAtLeastOne(TRY_COUNT)).toThrow(
      ErrorMessage.invalidRangeTryCount,
    );
  });

  test(`시도 횟수가 100만 번을 초과한 경우 ${ErrorMessage.exceedTryCount} 메시지를 포함한 에러를 throw 한다.`, () => {
    const TRY_COUNT = 1_000_001;

    expect(() => CountValidator.isNotBigNumber(TRY_COUNT)).toThrow(
      ErrorMessage.isBigNumber,
    );
  });
});
