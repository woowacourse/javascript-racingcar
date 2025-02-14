import {
  ListChecker,
  NumberChecker,
  StringChecker,
} from '../src/utils/Checkers.js';

describe('ListChecker 테스트', () => {
  test('배열 안에 중복값이 있는 지 확인한다.', () => {
    const TRUE_LIST = [1, 1, 3];
    const FALSE_LIST = [1, 2, 3];
    expect(ListChecker.isNoRepeatValue(TRUE_LIST)).toBe(true);
    expect(ListChecker.isNoRepeatValue(FALSE_LIST)).toBe(false);
  });

  test('배열의 길이가 특정 값보다 작은 지 확인한다.', () => {
    const TRUE_LIST = [1, 2];
    const FALSE_LIST = [1, 2, 3];
    const VALUE = 3;

    expect(ListChecker.isLessThanValue(TRUE_LIST, VALUE)).toBe(true);
    expect(ListChecker.isLessThanValue(FALSE_LIST, VALUE)).toBe(false);
  });
});

describe('StringChecker 테스트', () => {
  test('문자열의 길이가 특정 값보다 큰 지 확인한다.', () => {
    const TRUE_STRING = '안녕하세요';
    const FALSE_STRING = '반가워요';
    const VALUE = 4;

    expect(StringChecker.isMoreThanValue(TRUE_STRING, VALUE)).toBe(true);
    expect(StringChecker.isMoreThanValue(FALSE_STRING, VALUE)).toBe(false);
  });

  test('문자열이 공백을 가지고 있는 지 확인한다.', () => {
    const TRUE_STRING = '밍 고';
    const FALSE_STRING = '밍고';

    expect(StringChecker.isIncludeBlank(TRUE_STRING)).toBe(true);
    expect(StringChecker.isIncludeBlank(FALSE_STRING)).toBe(false);
  });

  test('문자열이 정규식을 만족하지 않는 지 확인한다', () => {
    const TRUE_STRING = '123';
    const FALSE_STRING = 'abc';
    const REG_EXP = /^[a-zA-Z]+$/;

    expect(StringChecker.isNotRegString(TRUE_STRING, REG_EXP)).toBe(true);
    expect(StringChecker.isNotRegString(FALSE_STRING, REG_EXP)).toBe(false);
  });
});

describe('NumberChecker 테스트', () => {
  test('숫자가 특정 값보다 큰 지 확인한다.', () => {
    const TRUE_NUMBER = 9;
    const FALSE_NUMBER = 7;
    const VALUE = 8;

    expect(NumberChecker.isMoreThanValue(TRUE_NUMBER, VALUE)).toBe(true);
    expect(NumberChecker.isMoreThanValue(FALSE_NUMBER, VALUE)).toBe(false);
  });

  test('숫자가 특정 값보다 작은은 지 확인한다.', () => {
    const TRUE_NUMBER = 3;
    const FALSE_NUMBER = 5;
    const VALUE = 4;

    expect(NumberChecker.isLessThanValue(TRUE_NUMBER, VALUE)).toBe(true);
    expect(NumberChecker.isLessThanValue(FALSE_NUMBER, VALUE)).toBe(false);
  });
});
