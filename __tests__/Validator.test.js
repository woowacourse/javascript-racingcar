const Validator = require('../src/util/Validator');

describe('자동차 이름 검사', () => {
  test('정상', () => {
    expect(() => Validator.validateCarNames(['참새참참새', '에이든'])).not.toThrow();
  });

  test('오류: 이름이 공백인 경우', () => {
    expect(() => Validator.validateCarNames([''])).toThrow('[ERROR]');
  });

  test('오류: 이름이 6글자 이상인 경우', () => {
    expect(() => Validator.validateCarNames(['에이든에이든'])).toThrow('[ERROR]');
  });
});

describe('시도할 횟수 검사', () => {
  test.each(['10', '+3'])('정상', (value) => {
    expect(() => Validator.validateAttempts(value)).not.toThrow();
  });

  test.each(['12.34', '-3', '0'])('오류: 자연수가 아닌 경우', (value) => {
    expect(() => Validator.validateAttempts(value)).toThrow('[ERROR]');
  });

  test.each(['참새', '0x12', '0b101'])('오류: 숫자가 아닌 경우', (value) => {
    expect(() => Validator.validateAttempts(value)).toThrow('[ERROR]');
  });
});
