import { ERROR_MESSAGE } from '../src/constants/message';
import { carValidator, raceCountValidator } from '../src/domain/validator';

describe('자동차 입력값 검증', () => {
  test('자동차 목록 중 자동차 이름이 모두 5자 이내인 경우 정상적으로 동작한다.', () => {
    // Arrange
    const input = ['아르', '마루'];

    // Act
    const mockFn = () => {
      carValidator.validateCarNameList(input);
    };

    /// Assert
    expect(mockFn).not.toThrow();
  });

  test.each(['아르르르르르', 'abcdef', '123456'])('자동차 이름이 5자를 초과하는 경우 예외 처리한다.', (input) => {
    // Act
    const mockFn = () => {
      carValidator.validateCarNameLength(input.length);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH);
  });

  test('자동차 배열 내의 5자를 초과하는 자동차 이름이 있는 경우 예외 처리한다.', () => {
    // Arrange
    const input = ['아르', '마루루루루루'];

    // Act
    const mockFn = () => {
      carValidator.validateCarNameList(input);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH);
  });
});

describe('경주 횟수 입력값 검증', () => {
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
      raceCountValidator.validateNaturalNumber(input);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.RACE_COUNT_IS_NOT_NATURAL_NUMBER);
  });

  test('이동 횟수가 문자인 경우 예외 처리한다.', () => {
    // Arrange
    const input = 'string';
    const raceCount = parseFloat(input);

    // Act
    const mockFn = () => {
      raceCountValidator.validateNumber(raceCount);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.RACE_COUNT_IS_NOT_NUMBER);
  });

  test('이동 횟수가 실수로 들어온 경우 예외 처리한다.', () => {
    // Arrange
    const input = 1.234;

    // Act
    const mockFn = () => {
      raceCountValidator.validateFloatNumber(input);
    };

    /// Assert
    expect(mockFn).toThrow(ERROR_MESSAGE.RACE_COUNT_IS_FLOAT_NUMBER);
  });
});
