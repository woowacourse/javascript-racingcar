import { RandomNumber } from '../src/domain';
import { Console } from '../src/view';

export const mockRandoms = (numbers) => {
  const mockPickNumberInRange = jest.spyOn(RandomNumber, 'pickNumberInRange');
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    mockPickNumberInRange,
  );
};

export const mockQuestions = (inputs) => {
  const mockReadLineAsync = jest.spyOn(Console, 'readLineAsync');

  mockReadLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

export const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();

  return logSpy;
};
