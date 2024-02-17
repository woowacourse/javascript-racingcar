import { ERROR_MESSAGE } from '../src/constants/message';
import { carValidator, turnCountValidator } from '../src/validator';

describe('입력값 검증', () => {
  test('자동차 이름이 5자를 초과하는 경우 예외 처리한다.', () => {
    // Arrange
    const input = '아르르르르르';

    // Act
    const mockFn = () => {
      carValidator.validateCarNameLength(input.length);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH);
  });

  test('입력값이 공백일 경우 예외 처리한다.', () => {
    // Arrange
    const input = '';

    // Act
    const mockFn = () => {
      carValidator.validateCarNameLength(input.length);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH);
  });

  test('자동차가 1대일 경우 예외 처리한다.', () => {
    // Arrange
    const input = ['마루'];

    // Act
    const mockFn = () => {
      carValidator.validateCarNameListLength(input.length);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.CAR_NAME_LIST_LENGTH);
  });

  test('이동 횟수가 0 이하일 경우 예외 처리한다.', () => {
    // Arrange
    const input = 0;

    // Act
    const mockFn = () => {
      turnCountValidator.validateNaturalNumber(input);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.TURN_COUNT_IS_NOT_NATURAL_NUMBER);
  });

  test('이동 횟수가 문자인 경우 예외 처리한다.', () => {
    // Arrange
    const input = 'string';
    const turnCount = parseFloat(input);

    // Act
    const mockFn = () => {
      turnCountValidator.validateNumber(turnCount);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.TURN_COUNT_IS_NOT_NUMBER);
  });

  test('이동 횟수가 실수로 들어온 경우 예외 처리한다.', () => {
    // Arrange
    const input = 1.234;

    // Act
    const mockFn = () => {
      turnCountValidator.validateFloatNumber(input);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.TURN_COUNT_IS_FLOAT_NUMBER);
  });
});
