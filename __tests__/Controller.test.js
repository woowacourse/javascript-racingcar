import Controller from '../src/controller/Controller.js';
import Console from '../src/utils/Console.js';
import { mockRandoms } from './Car.test.js';

const mockQuestions = (inputs) => {
  Console.read = jest.fn();

  Console.read.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 게임 테스트', () => {
  test('전체 프로세스가 정상적으로 동작하는지 테스트', async () => {
    // given
    const FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni,jun', '1'];
    const outputs = ['pobi : -', 'woni : -', 'jun :', '최종 우승자: pobi, woni'];
    const logSpy = getLogSpy();
    mockRandoms([FORWARD, FORWARD, STOP]);

    mockQuestions(inputs);

    // when
    const controller = await new Controller().start();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
