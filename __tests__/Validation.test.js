import Validation from '../src/Validation.js';

describe('Validation.validateCarNames', () => {
  test('최소 자동차 수 조건을 만족하지 않는 경우, 에러가 발생한다.', () => {
    const names = ['a'];

    expect(() => {
      Validation.validateCarNames(names);
    }).toThrow();
  });
});

describe('Validation.isCarNameLengthValid', () => {
  test('자동차 이름 최대, 최소 조건을 만족하지 않는 경우 에러가 발생한다.', () => {
    const names = ['abcdef', 'abc'];

    expect(() => {
      Validation.validateCarNames(names);
    }).toThrow();
  });
});

describe('Validation.isCarNameUnique', () => {
  test('자동차 이름이 중복되는 경우 에러가 발생한다.', () => {
    const names = ['abc', 'abc'];

    expect(() => {
      Validation.validateCarNames(names);
    }).toThrow();
  });
});

describe('Validation.validateRaceRound', () => {
  test('레이스 라운드가 숫자가 아니거나 0일 때 에러가 발생한다.', () => {
    const round1 = 0;
    const round2 = 'abc';

    expect(() => {
      Validation.validateRaceRound(round1);
    }).toThrow();

    expect(() => {
      Validation.validateRaceRound(round2);
    }).toThrow();
  });
});
