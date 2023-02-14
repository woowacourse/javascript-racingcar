const { ERROR_MESSAGE } = require('../src/constants/Constant');
const Validation = require('../src/utils/Validation');

describe('Validation.validateCarNames', () => {
  test('최소 자동차 수 조건을 만족하지 않는 경우, 에러가 발생한다.', () => {
    const names = ['a'];

    expect(() => {
      Validation.validateCarNames(names);
    }).toThrow(ERROR_MESSAGE.invalidCarQuantity);
  });

  test('자동차 이름 최대, 최소 조건을 만족하지 않는 경우 에러가 발생한다.', () => {
    const names = ['abcdef', 'abc'];

    expect(() => {
      Validation.validateCarNames(names);
    }).toThrow(ERROR_MESSAGE.invalidCarNameLength);
  });

  test('자동차 이름이 중복되는 경우 에러가 발생한다.', () => {
    const names = ['abc', 'abc'];

    expect(() => {
      Validation.validateCarNames(names);
    }).toThrow(ERROR_MESSAGE.duplicateCarName);
  });
});

describe('Validation.validateRaceRound', () => {
  test('레이스 라운드가 숫자가 아닐 때 에러가 발생한다.', () => {
    const round = 'abc';

    expect(() => {
      Validation.validateRaceRound(round);
    }).toThrow(ERROR_MESSAGE.invalidGameRound);
  });

  test('레이스 라운드가 0일 때 에러가 발생한다.', () => {
    const round = 0;

    expect(() => {
      Validation.validateRaceRound(round);
    }).toThrow(ERROR_MESSAGE.invalidGameRound);
  });
});
