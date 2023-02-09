import Car from '../src/models/Car';
import Console from '../src/utils/Console';
import OutputView from '../src/views/OutputView';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getLogSpyOutputs = (logSpy) => {
  return [...logSpy.mock.calls].join('');
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('OutputView 테스트 입니다.', () => {
  test('우승 자동차들 출력이 잘 되는지', () => {
    // given
    const logSpy = getLogSpy();
    const cars = ['pobi', 'conan'].map((carName) => new Car(carName));

    // when
    OutputView.printWinners(cars);
    const outputs = getLogSpyOutputs(logSpy);

    // then
    expectLogContains(outputs, ['pobi, conan가 최종 우승했습니다.']);
  });

  test('', () => {
    // given
    const logSpy = getLogSpy();
    const cars = ['pobi', 'conan'].map((carName) => new Car(carName));

    // when
    OutputView.printRaceState(cars);
    const outputs = getLogSpyOutputs(logSpy);

    // then
    expectLogContains(outputs, ['pobi :', 'conan : ']);
  });
});
