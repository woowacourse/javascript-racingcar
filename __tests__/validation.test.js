const { validateCarNames, validateWinningDistance } = require('../src/validation/input');
const { GAME } = require('../src/utils/constants');

describe('입력 validation 테스트', () => {
  describe('자동차 이름 입력 테스트 (validateCarNames)', () => {
    it.each([
      [['a'.repeat(GAME.CAR_NAME.min)], true],
      [['a'.repeat(GAME.CAR_NAME.max)], true],
      [['a'.repeat(GAME.CAR_NAME.max + 1)], false],
    ])(
      `자동차 이름의 길이는 ${GAME.CAR_NAME.min}, ${GAME.CAR_NAME.max} 사이여야 한다.`,
      (carNames, result) => {
        expect(validateCarNames(carNames)).toEqual(result);
      },
    );

    it('중복된 자동차 이름이 들어오면 안된다.', () => {
      const carNames = ['pobi', 'pobi'];
      expect(validateCarNames(carNames)).toEqual(false);
    });

    it('자동차 이름에 공백이 있으면 안된다.', () => {
      const carNames = ['a b', 'cr on', ' ', ' hey', 'hey '];
      expect(validateCarNames(carNames)).toEqual(false);
    });
  });

  describe('시도 횟수 입력 테스트 (validateWinningDistance)', () => {
    it('', () => {});
    it('', () => {});
  });
});
