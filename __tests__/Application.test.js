import App from '../src/App';
import { RULES } from '../src/statics/constants';
import Console from '../src/utils/Console';
import Random from '../src/utils/Random';

const mockRandoms = numbers => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const mockQuestions = inputs => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('기능테스트', () => {
  test('최종 결과 테스트', async () => {
    //given
    const randomCase = [
      RULES.movingForward,
      RULES.stop,
      RULES.movingForward,
      RULES.movingForward,
      RULES.movingForward,
      RULES.stop,
    ];
    const inputs = ['pobi,jay', '3'];
    const output = '최종 우승자: pobi';
    const logSpy = getLogSpy();

    //when
    mockQuestions(inputs);
    mockRandoms([...randomCase]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});

describe('예외테스트', () => {
  test.each([
    { invalidInput: 'pobi,masteryi' },
    { invalidInput: 'pobi/jay' },
    { invalidInput: 'pobi, jay' },
    { invalidInput: 'pobi,pobi' },
    { invalidInput: 'pobi' },
  ])('유효하지 않은 자동차 이름 입력', async ({ invalidInput }) => {
    const logSpy = getLogSpy();

    const INPUT_TO_END = ['pobi,jay', '1'];
    mockQuestions([invalidInput, ...INPUT_TO_END]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('ERROR'));
  });

  test.each([
    { invalidInput: ['pobi,eryi', '0'] },
    { invalidInput: ['pobi,eryi', '-1'] },
    { invalidInput: ['pobi,eryi', '1.2'] },
    { invalidInput: ['pobi,eryi', 'm'] },
  ])('유효하지 않은 시도 횟수 입력', async ({ invalidInput }) => {
    const logSpy = getLogSpy();

    const INPUT_TO_END = ['1'];
    mockQuestions([...invalidInput, ...INPUT_TO_END]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('ERROR'));
  });
});
