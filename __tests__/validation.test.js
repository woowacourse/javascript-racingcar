const terminalInputValidator = require('../src/validation/terminalInputValidator');
const { GAME, ERROR } = require('../src/utils/constants');
const OutputView = require('../src/view/OutputView');
const { toInt } = require('../src/utils/common');

describe('입력 validation 테스트', () => {
  describe('자동차 이름 입력 테스트 (terminalInputValidator.validateCarNames)', () => {
    test.each([
      [['a'.repeat(GAME.CAR_NAME.min)], ''],
      [['a'.repeat(GAME.CAR_NAME.max)], ''],
    ])(
      `자동차 이름의 길이가 ${GAME.CAR_NAME.min}이상, ${GAME.CAR_NAME.max}이하 라면 통과한다. - 이름: %s`,
      (carNames) => {
        expect(() => terminalInputValidator.checkCarNameLength(carNames)).not.toThrow();
      },
    );

    test(`자동차 이름의 길이가 ${GAME.CAR_NAME.min}미만, ${GAME.CAR_NAME.max}초과라면 에러를 던진다. - 이름: %s`, () => {
      expect(() =>
        terminalInputValidator.checkCarNameLength(['a'.repeat(GAME.CAR_NAME.max + 1)]),
      ).toThrow();
    });

    test('중복된 자동차 이름이 들어오면 에러를 던진다.', () => {
      const carNames = ['pobi', 'pobi'];

      terminalInputValidator.validateCarNames(carNames);

      expect(() => terminalInputValidator.checkDuplicatedCarName(carNames)).toThrow();
    });

    test.each([['a b'], ['cr on'], [' '], [' hey'], ['hey ']])(
      `자동차 이름에 공백이 있으면 에러를 던진다. - "%s"`,
      (carNames) => {
        terminalInputValidator.validateCarNames(carNames);

        expect(() => terminalInputValidator.checkBlankInCarName(carNames)).toThrow();
      },
    );
  });

  describe('시도 횟수 입력 테스트 (terminalInputValidator.validateWinningDistance)', () => {
    test.each(['a', 'ㄱ', '!', '~', '@', '#', '$', '%', '^', '&', '*', '(', ' '])(
      `숫자가 아닌 값을 입력하면 에러를 던진다. - "%s"`,
      (input) => {
        terminalInputValidator.validateWinningDistance(toInt(input));

        expect(() => terminalInputValidator.checkIsInt(carNames)).toThrow();
      },
    );

    test.each([2, 10])('입력값의 범위가 3미만 10이상이면 에러를 던진다. - 입력값: %i', (input) => {
      terminalInputValidator.validateWinningDistance(input);

      expect(() => terminalInputValidator.checkIsBetweenValidRange(carNames)).toThrow();
    });
  });
});
