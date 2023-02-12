const validator = require('../src/utils/validator');

describe('유효성 검사 테스트', () => {
  test('이름의 길이가 1~5가 아니라면 오류를 발생시킨다.', () => {
    expect(() => validator.validateLength('abc123')).toThrow('[ERROR]');
  });

  test('이름이 중복이라면 오류를 발생시킨다.', () => {
    expect(() => validator.validateOverlap(['abc', 'abc'])).toThrow('[ERROR]');
  });

  test('이름이 한글(음절단위) 또는 영어 또는 숫자가 아니라면 오류를 발생시킨다.', () => {
    expect(() => validator.validateKorEngNum('ㅎ1')).toThrow('[ERROR]');
  });

  test('시도 횟수가 숫자가 아니라면 오류를 발생시킨다.', () => {
    expect(() => validator.validateNumericInput('a')).toThrow('[ERROR]');
  });

  test('시도 횟수가 자연수가 아니라면 오류를 발생시킨다.', () => {
    expect(() => validator.validatePositiveNumber('-1')).toThrow('[ERROR]');
  });
});
