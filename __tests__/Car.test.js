const RaceController = require('../src/RaceController');
const Console = require('../src/utils/Console');
const Random = require('../src/utils/Random');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const mockRandoms = (numbers) => {
  Random.generateRandomNumbers = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.generateRandomNumbers
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  return logSpy;
};

describe('자동차 경주 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('전체 기능 테스트', () => {
    test('우승자 1명인 경우', () => {
      const logSpy = getLogSpy();
      const raceResult = [
        [0, 1, 2],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const carNames = 'aa,bb,cc';
      const tryCount = '3';

      mockRandoms(raceResult);
      mockQuestions([carNames, tryCount]);
      const logs = [
        'aa : ',
        'bb : -',
        'cc : -',
        'aa : ',
        'bb : --',
        'cc : --',
        'aa : ',
        'bb : ---',
        'cc : ---',
        'bb,cc 우승!',
      ];

      const raceController = new RaceController();
      //app.play();

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    test('우승자 1명인 경우', () => {
      const logSpy = getLogSpy();
      const raceResult = [
        [0, 1, 2],
        [4, 5, 6],
      ];
      const carNames = 'aa,bb';
      const tryCount = '3';

      mockRandoms(raceResult);
      mockQuestions([carNames, tryCount]);
      const logs = [
        'aa : ',
        'bb : -',
        'aa : ',
        'bb : --',
        'aa : ',
        'bb : ---',
        'bb 우승!',
      ];

      const raceController = new RaceController();

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });
});
