const inputValidator = require('../src/view/InputValidator');

describe('validateCarNameList 메서드 테스트', () => {
  test('["ukko", "pobi", ""] 받을 시에 error 발생', () => {
    expect(() => {
      inputValidator.validateCarNameList(['ukko', 'pobi', '']);
    }).toThrow();
  });

  test('["ukko", "pobi", "leeeeeeeeft"] 받을 시에 error 발생', () => {
    expect(() => {
      inputValidator.validateCarNameList(['ukko', 'pobi', 'leeeeeeeeft']);
    }).toThrow();
  });

  test('["ukko", "pobi", "ukko"] 받을 시에 error 발생', () => {
    expect(() => {
      inputValidator.validateCarNameList(['ukko', 'pobi', 'ukko']);
    }).toThrow();
  });
});

describe('validateNumberOfTrials 메서드 테스트', () => {
  test('10n431 받을 시에 error 발생', () => {
    expect(() => {
      inputValidator.validateNumberOfTrials(Number('10n431'));
    });
  });
});
