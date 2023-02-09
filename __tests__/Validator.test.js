const Validator = require('../src/utils/Validator');

describe('유효성 검사 테스트', () => {
  test('이름의 길이가 1~5가 아니라면 오류를 발생시킨다.', () => {
    expect(() => Validator.validateLength(['dddddddd', 'qq'])).toThrow('[ERROR]');
  });

  test('이름이 중복이라면 오류를 발생시킨다.', () => {
    expect(() => Validator.validateOverLap(['qqq', 'qqq'])).toThrow('[ERROR]');
  });

  test('이름이 알파벳이 아니라면 오류를 발생시킨다.', () => {
    expect(() => Validator.validateInvalidInput(['1q'])).toThrow('[ERROR]');
  });

  test('시도 횟수가 숫자가 아니라면 오류를 발생시킨다.', () => {
    expect(() => Validator.validateNumericInput(['q'])).toThrow('[ERROR]');
  });

  test('시도 횟수가 자연수가 아나리면 오류를 발생시킨다.', () => {
    expect(() => Validator.validatePositiveNumber([-1])).toThrow('[ERROR]');
  });
});
