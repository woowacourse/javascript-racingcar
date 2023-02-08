/* eslint-disable no-undef */
const App = require('../src/index.js');
const IO = require('../src/utils/IO.js');
const { validateCarNames } = require('../src/utils/Validator.js');
const { ERROR_MESSAGE } = require('../src/data/constants.js');

const mockQuestions = (answers) => {
  IO.read = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, IO.read);
};

describe('Input Test', () => {
  test('Car name input test', () => {
    expect(() => {
      const app = new App();
      app.init();
      mockQuestions(['pobi']);
    }).not.toThrow();
  });

  test('Car name length validation test', () => {
    expect(() => {
      validateCarNames(['pobisss', 'crongsss', 'honuxss']);
    }).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH_ERROR);
  });
});
