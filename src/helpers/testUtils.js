import readline from 'readline';

export function mockRandom(value) {
  jest.spyOn(Math, 'random').mockReturnValue(value / 10);
}

export function mockRandoms(values) {
  values.forEach(value =>
    jest.spyOn(Math, 'random').mockReturnValueOnce(value / 10),
  );
}

export const mockQuestions = inputs => {
  readline.createInterface = jest.fn().mockImplementation(() => ({
    question: (query, callback) => {
      callback(inputs.shift());
    },
    close: () => {},
  }));
};
