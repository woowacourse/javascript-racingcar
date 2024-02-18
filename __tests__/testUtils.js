import { Console, gameUtils } from "../src/utils";

export const mockRandoms = (numbers) => {
  gameUtils.pickRandomNumber = jest.spyOn(gameUtils, 'pickRandomNumber');
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, gameUtils.pickRandomNumber);
};

export const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.spyOn(Console, 'readLineAsync');

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
