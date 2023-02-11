const Validation = require('../src/Validation.js');

describe('자동차 이름 유효성 검사', () => {
  test.each([[['', 'a']], [['abcdef', 'a']]])(
    '자동차 이름 길이는 1~5글자 사이어야 한다. %#',
    (testCase) => {
      expect(() => {
        Validation.validateCarNameLength(testCase);
      }).toThrow();
    }
  );
  test.each([[['a', 'a']]])(
    '자동차 이름은 중복되지 않아야 한다.',
    (testCase) => {
      expect(() => {
        Validation.validateCarNameDuplicated(testCase);
      }).toThrow();
    }
  );
});

describe('자동차 경주 유효성 검사', () => {
  test('자동차 경주는 1대 이상 참여해야 한다.', () => {
    const carNames = ['a'];
    expect(() => {
      Validation.validateIsRace(carNames);
    }).toThrow();
  });
});

describe('시도 횟수 유효성 검사', () => {
  test.each([' ', '.'])('시도 횟수는 정수여야 합니다.', (testCase) => {
    expect(() => {
      Validation.validateNotANumber(testCase);
    }).toThrow();
  });
  test('시도 횟수는 1이상 이어야 합니다.', () => {
    expect(() => {
      Validation.validateRaceCount(0);
    }).toThrow();
  });
});
