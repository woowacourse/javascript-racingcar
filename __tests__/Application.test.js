const App = require('../src/App');
const Console = require('../src/utils/Console');
const { Random } = require('../src/utils');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const mockRandoms = (moves) => {
  Random.calculateRandomNumber = jest.fn();
  moves.reduce((acc, move) => {
    return acc.mockReturnValueOnce(move);
  }, Random.calculateRandomNumber);
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

describe('자동차 경주 게임 테스트', () => {
  test('주어진 자동차 이름들과 시도 횟수(첫 번째 예시)로 자동차 전진 및 싷행 결과를 보여주는 기능 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([4, 4, 4, 4, 4, 2, 4, 4, 4]);
    mockQuestions(['eus,zero,pobi', '3']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '실행 결과',
      'eus : -',
      'zero : -',
      'pobi : -',

      'eus : --',
      'zero : --',
      'pobi : -',

      'eus : ---',
      'zero : ---',
      'pobi : --',

      'eus : ---',
      'zero : ---',
      'pobi : --',

      'eus, zero가 최종 우승했습니다.',
    ]);
  });

  test('주어진 자동차 이름들과 시도 횟수(두 번째 예시)로 자동차 전진 및 싷행 결과를 보여주는 기능 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
    mockQuestions(['pobi,crong,honux', '5']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '실행 결과',
      'pobi : -',
      'crong : -',
      'honux : -',

      'pobi : --',
      'crong : -',
      'honux : --',

      'pobi : ---',
      'crong : --',
      'honux : ---',

      'pobi : ----',
      'crong : ---',
      'honux : ----',

      'pobi : -----',
      'crong : ----',
      'honux : -----',

      'pobi : -----',
      'crong : ----',
      'honux : -----',

      'pobi, honux가 최종 우승했습니다.',
    ]);
  });
});
