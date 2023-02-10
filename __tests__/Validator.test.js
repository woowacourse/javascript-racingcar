const Validator = require('../src/Validator');

describe('자동차 이름 검사', () => {
  test('정상', () => {
    expect(() => Validator.validateCarNames(['참새', '에이든'])).not.toThrow();
  });

  test.each([[['참새', '에이든', '']], [['참새', '에이든에이든']]])('이름 길이 오류', (carNames) => {
    expect(() => Validator.validateCarNames(carNames)).toThrow('[ERROR]');
  });
});

describe('시도할 횟수 검사', () => {
  test.each([['10'], ['3']])('정상', (value) => {
    expect(() => Validator.validateAttempts(value)).not.toThrow();
  });

  test.each([['0'], ['-3'], ['1234567890987654321'], ['12.34'], ['0x12']])('비정상', (value) => {
    expect(() => Validator.validateAttempts(value)).toThrow('[ERROR]');
  });
});
