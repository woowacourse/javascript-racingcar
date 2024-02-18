import { Console, RandomNumber } from '../src/utils';

export const mockRandoms = (numbers) => {
  RandomNumber.pickNumber = jest.fn();
  numbers.forEach((number) => {
    RandomNumber.pickNumber.mockReturnValueOnce(number);
  });
};

export const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

export const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();

  return logSpy;
};
