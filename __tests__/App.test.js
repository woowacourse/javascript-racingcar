const Console = require('../src/UI/Console');
const App = require('../src/App');
const Random = require('../src/util/Random');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) => acc.mockResolvedValueOnce(input),
    Console.readLine,
  );
};

const mockRandoms = (numbers) => {
  Random.generateRandomInteger = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.generateRandomInteger,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('최종 동작 테스트', () => {
  test.each([
    [
      ['pobi,crong,honux', '-10', '5'],
      [4, 3, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 1, 1, 1],
      [
        'pobi, honux가 최종 우승했습니다.',
        '[ERROR]',
      ],
    ],
  ])('정상', async (questions, randoms, result) => {
    mockQuestions(questions);
    mockRandoms(randoms);
    const logSpy = getLogSpy();

    const app = new App();
    await app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, result);
  });
});
