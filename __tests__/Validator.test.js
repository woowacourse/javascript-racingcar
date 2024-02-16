import Validator from '../src/Validator';
import { ERROR_MESSAGE } from '../src/constants/message';
import { VALIDATOR_TEST_MESSAGE } from '../src/constants/testMessage';

describe(VALIDATOR_TEST_MESSAGE.TITLE, () => {
  test(VALIDATOR_TEST_MESSAGE.MAX_CAR_NAME_LENGTH, () => {
    // Arrange
    const input = ['마루', '아르르르르르'];

    // Act
    const mockFn = () => {
      Validator.validateCarNameList(input);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH);
  });

  test(VALIDATOR_TEST_MESSAGE.MIN_CAR_NAME_LENGTH, () => {
    // Arrange
    const input = ['아르', ''];

    // Act
    const mockFn = () => {
      Validator.validateCarNameList(input);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH);
  });

  test(VALIDATOR_TEST_MESSAGE.MIN_CAR_NAME_LIST_LENGTH, () => {
    // Arrange
    const input = ['마루'];

    // Act
    const mockFn = () => {
      Validator.validateCarNameList(input);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.CAR_NAME_LIST_LENGTH);
  });

  test(VALIDATOR_TEST_MESSAGE.MIN_TURN_COUNT, () => {
    // Arrange
    const input = 0;

    // Act
    const mockFn = () => {
      Validator.validateTurnCount(input);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.TURN_COUNT_IS_NOT_NATURAL_NUMBER);
  });

  test(VALIDATOR_TEST_MESSAGE.TURN_COUNT_SHOULD_BE_NUMBER, () => {
    // Arrange
    const input = 'string';

    // Act
    const mockFn = () => {
      Validator.validateTurnCount(input);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.TURN_COUNT_IS_NOT_NUMBER);
  });

  test(VALIDATOR_TEST_MESSAGE.TURN_COUNT_SHOULD_BE_INTEGER, () => {
    // Arrange
    const input = 1.234;

    // Act
    const mockFn = () => {
      Validator.validateTurnCount(input);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.TURN_COUNT_IS_NOT_INTEGER);
  });
});
