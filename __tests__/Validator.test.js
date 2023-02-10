const Console = require('../src/UI/Console');
const Validator = require('../src/Validator');

describe('자동차 이름 검사', () => {
  test.each([[['참새','에이든']], [['참새']]])('정상', (carNames) => {
    expect(Validator.invalidCarNames(carNames)).toEqual(false);
  });

  test.each([[['참새','에이든', '']], [['참새', '에이든에이든']]])('이름 길이 오류', (carNames) => {
    expect(Validator.invalidCarNames(carNames)).toEqual(true);
  });
});

describe('시도할 횟수 검사', () => {
  test.each([['10'], ['3'], ['3 ']])('정상', (value) => {
    expect(Validator.invalidAttempts(value.trim())).toEqual(false);
  });

  test.each([['0'], ['-3'], ['1234567890987654321'], ['12.34'], ['0x12']])('비정상: 양수가 아닌 값 또는 너무 큰 값 입력', (value) => {
    expect(Validator.invalidAttempts(value)).toEqual(true);
  });
});
