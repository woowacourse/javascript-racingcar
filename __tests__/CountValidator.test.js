import CountValidator from '../src/utils/validator/CountValidator.js';
import ErrorMessage from '../src/constants/ErrorMessage.js';

test('시도횟수가 숫자가 아니면 에러 처리한다.', () => {
  const TRY_COUNT = NaN;

  expect(() => CountValidator.isNumber(TRY_COUNT)).toThrow(
    ErrorMessage.isNotNumber,
  );
});

test(`시도횟수가 ${MIN_TRY_COUNT} 미만이면 에러 처리한다.`, () => {
  const TRY_COUNT = 0;

  expect(() => CountValidator.isAtLeastOne(TRY_COUNT)).toThrow(
    ErrorMessage.isInvalidNumber,
  );
});

test('시도횟수가 정수가 아니면 에러 처리한다.', () => {
  const TRY_COUNT = 0.5;

  expect(() => CountValidator.isInteger(TRY_COUNT)).toThrow(
    ErrorMessage.isNotInteger,
  );
});

test(`시도횟수가 ${MAXIMUM_COUNT}을 넘으면 에러 처리한다.`, () => {
  const TRY_COUNT = 1_000_001;

  expect(() => CountValidator.isNotBigNumber(TRY_COUNT)).toThrow(
    ErrorMessage.isBigNumber,
  );
});
