/* eslint-disable no-undef */
const {
  validateCarNames,
  validateTryCount,
} = require('../src/utils/InputValidator.js');
const { ERROR_MESSAGE } = require('../src/data/constants.js');

describe('Input Test', () => {
  test('Car name length validation test', () => {
    expect(() => {
      validateCarNames(['pobisss', 'crongsss', 'honuxss']);
    }).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH_ERROR);
  });

  test('Car name blank validation test', () => {
    expect(() => {
      validateCarNames(['']);
    }).toThrow(ERROR_MESSAGE.BLANK_ERROR);
  });

  test('Try count validation test', () => {
    expect(() => {
      validateTryCount('가');
    }).toThrow(ERROR_MESSAGE.TRY_COUNT_TYPE_ERROR);
  });

  test('Try count blank validation test', () => {
    expect(() => {
      validateTryCount('');
    }).toThrow(ERROR_MESSAGE.BLANK_ERROR);
  });
});
