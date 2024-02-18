import {
  hasRedundantCarName,
  hasSingleCarName,
  isInvalidAttemptNum,
  isInvalidCarNameForm,
} from '../../src/domain/validate/validator';

describe('자동차 이름 입력 Validator Test', () => {
  test('isInvalidCarNameForm Test - 이름이 6자 이상일 경우 true를 반환한다', () => {
    const CARS_NAME = 'pobi,masterwee';
    expect(isInvalidCarNameForm(CARS_NAME)).toBe(true);
  });

  test('isInvalidCarNameForm Test - 이름의 구분자가 쉼표(,)가 아닐 경우 true를 반환한다', () => {
    const CARS_NAME = 'pobi/jay';
    expect(isInvalidCarNameForm(CARS_NAME)).toBe(true);
  });

  test.each(['po bi,jay', ' , ', ' '])(
    'isInvalidCarNameForm Test - 공백 문자를 포함한 입력이 들어올 경우 true를 반환한다.',
    CARS_NAME => {
      expect(isInvalidCarNameForm(CARS_NAME)).toBe(true);
    },
  );

  test.each(['pobi,pobi', 'pobi,jay,pobi'])(
    'hasRedundantCarName Test - 이름이 중복됐을 경우 true를 반환한다.',
    CARS_NAME => {
      expect(hasRedundantCarName(CARS_NAME)).toBe(true);
    },
  );

  test('hasSingleCarName Test - 자동차가 1개만 입력됐을 경우 true를 반환한다.', () => {
    const CAR_NAME = 'pobi';
    expect(hasSingleCarName(CAR_NAME)).toBe(true);
  });
});

describe('시도 횟수 입력 Validator Test', () => {
  test('isInvalidAttemptNum Test - 숫자가 아닌 문자가 입력됐을 경우 true를 반환한다.', () => {
    const ATTEMPT_NUM = 's';
    expect(isInvalidAttemptNum(ATTEMPT_NUM)).toBe(true);
  });

  test.each(['0', '-1'])('isInvalidAttemptNum Test - 1 이하의 정수가 입력됐을 경우 true를 반환한다.', ATTEMPT_NUM => {
    expect(isInvalidAttemptNum(ATTEMPT_NUM)).toBe(true);
  });

  test('isInvalidAttemptNum Test - 소수가 입력됐을 경우 true를 반환한다.', () => {
    const ATTEMPT_NUM = '1.2';
    expect(isInvalidAttemptNum(ATTEMPT_NUM)).toBe(true);
  });
});
