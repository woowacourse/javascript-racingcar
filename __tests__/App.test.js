const App = require('../src/App');
const Console = require('../src/utils/Console');
const Random = require('../src/utils/Random');

function mockQuestions(answers) {
  Console.readline = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce(() => {
        return input;
      }),
    Console.readline
  );
}

function mockRandom(numbers) {
  Random.generateNumber = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.generateNumber);
}

const getOutput = logSpy => [...logSpy.mock.calls].join('');

const expectLogContains = (received, logs) => {
  logs.forEach(log => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};
describe('App test', () => {
  beforeEach(() => {
    mockRandom([3, 4, 3, 4]);
    mockQuestions(['a,b', '2']);
  });

  test('동작 테스트', async () => {
    const logSpy = jest.spyOn(Console, 'print');
    const app = new App();
    await app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '실행 결과',
      'a :',
      'b : -',
      'a :',
      'b : --',
      'b가 최종 우승했습니다.',
    ]);
  });
});
