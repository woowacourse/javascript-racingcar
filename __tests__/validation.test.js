const { validateCarNames, validateWinningDistance } = require('../src/validation/inputValidator');
const { GAME } = require('../src/constant/constants');
const { toInt } = require('../src/utils/common');

describe('입력값 검증 테스트', () => {
  describe('자동차 이름 입력 테스트 (validateCarNames)', () => {
    test(`자동차 이름의 길이는 ${GAME.CAR_NAME.min}, ${GAME.CAR_NAME.max} 사이를 벗어나면 false를 반환한다.`, () => {
      const carNames = ['a'.repeat(GAME.CAR_NAME.max + 1)];

      expect(validateCarNames(carNames)).toEqual(false);
    });

    test('중복된 자동차 이름이 있으면 false를 반환한다.', () => {
      const carNames = ['pobi', 'pobi'];

      expect(validateCarNames(carNames)).toEqual(false);
    });

    test('자동차 이름에 공백이 있으면 false를 반환한다.', () => {
      const carNames = ['a b', 'cr on', ' ', ' hey', 'hey '];

      expect(validateCarNames(carNames)).toEqual(false);
    });
  });

  describe('시도 횟수 입력 테스트 (validateWinningDistance)', () => {
    test.each(['a', 'ㄱ', '!'])('숫자가 아닌 값을 입력하면 false를 반환한다.', (input) => {
      expect(validateWinningDistance(toInt(input))).toEqual(false);
    });

    test.each([2, 10])('입력값의 범위가 3미만 10이상이면 false를 반환한다.', (input) => {
      expect(validateWinningDistance(input)).toEqual(false);
    });
  });
});
