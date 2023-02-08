/* eslint-disable no-undef */
const App = require('../src/index.js');
const IO = require('../src/utils/IO.js');
const {
  validateCarNames,
  validateTryCount,
} = require('../src/utils/Validator.js');
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
  const app = new App();

  test('Input test', () => {
    expect(() => {
      app.init();
      mockQuestions(['pobi', '5']);
    }).not.toThrow();
  });

  test('Car name length validation test', () => {
    expect(() => {
      validateCarNames(['pobisss', 'crongsss', 'honuxss']);
    }).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH_ERROR);
  });

  test('Try count validation test', () => {
    expect(() => {
      validateTryCount('가');
    }).toThrow(ERROR_MESSAGE.TRY_COUNT_TYPE_ERROR);
  });
});
