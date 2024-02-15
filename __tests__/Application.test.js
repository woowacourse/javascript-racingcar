import App from '../src/App';
import pickNumberInRange from '../src/utils/pickNumberInRange';
import Console from '../src/utils/Console';
import { ERROR_MESSAGES } from '../src/constants/car-race';

jest.mock('../src/utils/pickNumberInRange', () => {
  return jest.fn();
});

const mockRandoms = (numbers) => {
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, pickNumberInRange);
};

const mockQuestions = (inputs) => {
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

describe('자동차 경주 애플리케이션 테스트', () => {
  it('전진-정지 출력 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP];

    const inputs = ['harry,bong', '1'];
    const harryOutput = ['harry : -'];
    const bongOutput = ['bong :'];
    const logSpy = getLogSpy();

    // when
    mockQuestions(inputs);
    mockRandoms(randoms);

    const app = new App();
    await app.run();

    // then
    [...harryOutput, ...bongOutput].forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  it('자동차 이름 중복에 대한 예외 테스트', async () => {
    // given
    const inputs = ['harry,harry', 'harry,bong', '5'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGES.carNameUniqueness),
    );
  });

  it('자동차 이름 길이에 대한 예외 테스트', async () => {
    // given
    const inputs = ['harrrrrry,harry', 'harry,bong', '5'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGES.carNameLength),
    );
  });

  it('자동차 경주 시도 횟수에 대한 예외 테스트', async () => {
    // given
    const inputs = ['harry,bong', 'a', '10'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ERROR_MESSAGES.tryCount),
    );
  });
});

/* 
harry, harry -> ERROR
undefined -> split method net exists
harry, bong -> tryCount -> undefined ->  [ERROR] 시도할 횟수는 1이상의 숫자만 가능합니다.
*/
