const terminalInputValidator = require('../src/validation/terminalInputValidator');
const { GAME, ERROR } = require('../src/utils/constants');
const OutputView = require('../src/view/OutputView');
const { toInt } = require('../src/utils/common');

const getLogSpy = () => {
  const logSpy = jest.spyOn(OutputView, 'print');
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join('');
};

describe('입력 validation 테스트', () => {
  const logSpy = getLogSpy();

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('자동차 이름 입력 테스트 (terminalInputValidator.validateCarNames)', () => {
    test.each([
      [['a'.repeat(GAME.CAR_NAME.min)], ''],
      [['a'.repeat(GAME.CAR_NAME.max)], ''],
      [['a'.repeat(GAME.CAR_NAME.max + 1)], ERROR.carNameLength],
    ])(
      `자동차 이름의 길이는 ${GAME.CAR_NAME.min}, ${GAME.CAR_NAME.max} 사이여야 한다.`,
      (carNames, errorMessage) => {
        terminalInputValidator.validateCarNames(carNames);
        const log = getOutput(logSpy);

        expect(log).toEqual(errorMessage);
      },
    );

    test('중복된 자동차 이름이 들어오면 안된다.', () => {
      const carNames = ['pobi', 'pobi'];

      terminalInputValidator.validateCarNames(carNames);
      const log = getOutput(logSpy);

      expect(log).toEqual(ERROR.duplicatedCarName);
    });

    test('자동차 이름에 공백이 있으면 안된다.', () => {
      const carNames = ['a b', 'cr on', ' ', ' hey', 'hey '];

      terminalInputValidator.validateCarNames(carNames);
      const log = getOutput(logSpy);

      expect(log).toEqual(ERROR.blankInCarName);
    });
  });

  describe('시도 횟수 입력 테스트 (terminalInputValidator.validateWinningDistance)', () => {
    test.each(['a', 'ㄱ', '!', '~', '@', '#', '$', '%', '^', '&', '*', '(', ' '])(
      '숫자가 아닌 값을 입력하면 안된다.',
      (input) => {
        terminalInputValidator.validateWinningDistance(toInt(input));
        const log = getOutput(logSpy);

        expect(log).toEqual(ERROR.invalidWinningDistanceType);
      },
    );

    test.each([2, 10])('입력값의 범위가 3미만 10이상이면 안된다.', (input) => {
      terminalInputValidator.validateWinningDistance(input);
      const log = getOutput(logSpy);

      expect(log).toEqual(ERROR.invalidWinningDistanceRange);
    });
  });
});
