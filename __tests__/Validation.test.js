import Validation from '../src/domain/Validation.js';
import { GAME_CONDITION } from '../src/constants/Condition.js';

describe('Validation.isCarQuantityValid', () => {
  test(`입력받은 자동차 이름이 ${GAME_CONDITION.minCarQuantity}개 미만인 경우, 에러가 발생한다.`, () => {
    const carNames = ['a'];

    expect(() => {
      Validation.validateCarNames(carNames);
    }).toThrow();
  });
});

describe('Validation.isCarNameLengthValid', () => {
  test(`입력받은 자동차 이름이 ${GAME_CONDITION.minCarNameLength}~${GAME_CONDITION.maxCarNameLength} 글자가 아닌 경우 에러가 발생한다.`, () => {
    const carNames = ['abcdef', 'abc'];

    expect(() => {
      Validation.validateCarNames(carNames);
    }).toThrow();
  });
});

describe('Validation.isCarNameUnique', () => {
  test('입력받은 자동차 이름이 중복되는 경우 에러가 발생한다.', () => {
    const carNames = ['abc', 'abc'];

    expect(() => {
      Validation.validateCarNames(carNames);
    }).toThrow();
  });
});

describe('Validation.validateRaceRound', () => {
  test('입력받은 레이스 라운드가 0이면 에러가 발생한다.', () => {
    const raceRoundInput = '0';

    expect(() => {
      Validation.validateRaceRound(raceRoundInput);
    }).toThrow();
  });

  test('입력받은 레이스 라운드가 숫자가 아니면 에러가 발생한다.', () => {
    const raceRoundInput = 'abc';

    expect(() => {
      Validation.validateRaceRound(raceRoundInput);
    }).toThrow();
  });
});
