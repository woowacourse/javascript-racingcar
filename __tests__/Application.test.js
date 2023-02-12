const App = require('../src/App');
const { Console, Random } = require('../src/utils');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();

  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join('');
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('자동차 경주 테스트', () => {
  test('기능 통합 테스트', () => {
    jest.useFakeTimers();

    const logSpy = getLogSpy();
    const randomNumbers = [5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1];

    mockRandoms(randomNumbers);
    mockQuestions(['pobi,crong,honux', '5']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);

    expectLogContains(log, [
      '실행 결과',
      'pobi: -',
      'crong: -',
      'honux: -',
      'pobi: --',
      'crong: -',
      'honux: --',
      'pobi: ---',
      'crong: --',
      'honux: ---',
      'pobi: ----',
      'crong: ---',
      'honux: ----',
      'pobi: -----',
      'crong: ----',
      'honux: -----',
      'pobi: -----',
      'crong: ----',
      'honux: -----',
      'pobi, honux가 최종 우승했습니다.',
    ]);
  });
});
