const Console = require('../src/utils/Console');
const RacingGame = require('../src/domain/controller/RacingGame');
const { Random } = require('../src/utils');
const { GAME_NUMBER } = require('../src/constants');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const mockRandoms = (moves) => {
  Random.getCarGameNumber = jest.fn();
  moves.reduce((acc, move) => {
    return acc.mockReturnValueOnce(move);
  }, Random.getCarGameNumber);
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

const GO = GAME_NUMBER.moveStandard;
const STAY = GAME_NUMBER.moveStandard - 1;

describe('자동차 경주 게임 테스트', () => {
  test('3개의 자동차를 3번의 시도 횟수를 했을 경우 원하는 출력과 결과가 나오는 지 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([GO, GO, GO, GO, GO, STAY, GO, GO, GO]);
    mockQuestions(['eus,zero,pobi', '3']);

    new RacingGame().play();

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

  test('프로그래밍 요구 사항 예시와 동일한 상황으로 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([GO, GO, GO, GO, STAY, GO, GO, GO, GO, GO, GO, GO, GO, GO, GO]);
    mockQuestions(['pobi,crong,honux', '5']);

    new RacingGame().play();

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
