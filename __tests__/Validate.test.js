import validateRandomNumberArrange from '../src/validation/validate/validateRandomNumberArrange.js';
import validateCarNameList from '../src/validation/validate/validateCarNameList.js';
import validateCarName from '../src/validation/validate/validateCarName.js';
import {
  CAR_NAME_LIST_ERROR_MESSAGES,
  CAR_NAME_CONDITION,
  ERROR_PREFIX,
  ATTEMPT_ERROR_MESSAGES,
  RANDOM_ERROR_MESSAGES,
} from '../src/constants/Constants.js';
import validateAttemptCount from '../src/validation/validate/validateAttemptCount.js';

describe('자동차 이름 목록 유효성 검사', () => {
  test(`빈 값을 입력할 경우 에러 발생`, () => {
    expect(() => validateCarNameList([])).toThrow(
      ERROR_PREFIX + ' ' + CAR_NAME_LIST_ERROR_MESSAGES.COUNT
    );
  });

  test(`${CAR_NAME_CONDITION.COUNT_MIN - 1}의 자동차만 입력한 경우 에러 발생`, () => {
    expect(() => validateCarNameList(['수이'])).toThrow(
      ERROR_PREFIX + ' ' + CAR_NAME_LIST_ERROR_MESSAGES.COUNT
    );
  });

  test.each([[['수이', '수이', '메타']], [['메타', '메타', '메타']]])(
    '차 이름 중복이 존재하는 경우 에러 발생',
    (input) => {
      expect(() => validateCarNameList(input)).toThrow(
        ERROR_PREFIX + ' ' + CAR_NAME_LIST_ERROR_MESSAGES.DUPLICATE_CAR_NAME
      );
    }
  );

  test(`중복없는 ${CAR_NAME_CONDITION.COUNT_MIN}대 이상의 이름인 경우 에러 발생x`, () => {
    expect(() =>
      validateCarNameList(['수이', '메타', '동키콩콩콩'])
    ).not.toThrow();
  });
});

describe('자동차 이름 유효성 검사', () => {
  test.each(['', '\n', ' '])(
    '차 이름에 빈 값이 존재하는 경우 에러 발생',
    (input) => {
      expect(() => validateCarName(input)).toThrow(
        ERROR_PREFIX + ' ' + CAR_NAME_LIST_ERROR_MESSAGES.NAME_LENGTH_MIN
      );
    }
  );

  test.each(['수이이이이이이이이', '메타아아아아'])(
    `이름이 ${CAR_NAME_CONDITION.LENGTH_MAX}글자를 초과하는 경우 에러 발생`,
    (input) => {
      expect(() => validateCarName(input)).toThrow(
        ERROR_PREFIX + ' ' + CAR_NAME_LIST_ERROR_MESSAGES.NAME_LENGTH_MAX
      );
    }
  );

  test(`${CAR_NAME_CONDITION.LENGTH_MIN}이상 ${CAR_NAME_CONDITION.LENGTH_MAX}이하로 올바르게 입력한 경우 에러 발생ㅌ`, () => {
    expect(() => validateCarName('수이')).not.toThrow();
  });
});

describe('시도 횟수 유효성 검사', () => {
  test.each(['hi', ','])('문자열인 경우 에러 발생', (value) => {
    expect(() => validateAttemptCount(value)).toThrow(
      ERROR_PREFIX + ' ' + ATTEMPT_ERROR_MESSAGES.NOT_INTEGER
    );
  });

  test.each([1.5, 0.2])('정수가 아닌 경우 에러 발생', (value) => {
    expect(() => validateAttemptCount(value)).toThrow(
      ERROR_PREFIX + ' ' + ATTEMPT_ERROR_MESSAGES.NOT_INTEGER
    );
  });

  test.each([0, -1])('양의 정수가 아닌 경우 에러 발생', (value) => {
    expect(() => validateAttemptCount(value)).toThrow(
      ERROR_PREFIX + ' ' + ATTEMPT_ERROR_MESSAGES.MINUS
    );
  });
});

describe('랜덤 숫자 생성 범위 유효성 검사', () => {
  test.each([
    [
      { min: 'hi', max: 0 },
      { min: 0, max: 'hi' },
    ],
  ])('문자열인 경우 에러 발생', (value) => {
    expect(() => validateRandomNumberArrange(value)).toThrow(
      ERROR_PREFIX + ' ' + RANDOM_ERROR_MESSAGES.NOT_INTEGER
    );
  });

  test.each([
    [
      { min: -1.5, max: 3 },
      { min: 2, max: 2.5 },
      { min: 1.2, max: 12.2 },
    ],
  ])('정수가 아닌 경우 에러 발생', (value) => {
    expect(() => validateRandomNumberArrange(value)).toThrow(
      ERROR_PREFIX + ' ' + RANDOM_ERROR_MESSAGES.NOT_INTEGER
    );
  });

  test.each([
    { min: 3, max: 2 },
    { min: 11, max: 2 },
    { min: -1, max: -3 },
  ])('최솟값이 최댓값보다 큰 경우 에러 발생', (value) => {
    expect(() => validateRandomNumberArrange(value)).toThrow(
      ERROR_PREFIX + ' ' + RANDOM_ERROR_MESSAGES.MIN_GREATER_THAN_MAX
    );
  });

  test.each([
    { min: 1, max: 5 },
    { min: 0, max: 100 },
    { min: -10, max: -5 },
  ])('유효한 범위인 경우 에러 미발생', (value) => {
    expect(() => validateRandomNumberArrange(value)).not.toThrow();
  });
});
