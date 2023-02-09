const Console = require('../src/UI/Console');
const Car = require('../src/Car');
const Validator = require('../src/Validator');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) => acc.mockImplementationOnce((_, callback) => { callback(input); }),
    Console.readLine,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

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
