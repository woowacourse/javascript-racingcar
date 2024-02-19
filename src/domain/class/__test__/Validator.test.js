import Validator from '../Validator';

const validMaxTryCount = ['1', '2', '10'];
const notNumberMaxTryCount = ['한번', '1회'];
const notDigitMaxTryCount = ['0x10', '0b101', '0o123'];
const decimalMaxTryCount = ['0.1', '0.2', '0.123'];

describe('Validator 클래스 테스트', () => {
  describe('validateCars', () => {
    test('validateCars 예외 아닌 경우', () => {
      // Arrange
      const names = ['pobi', 'sofa', 'suya'];

      // Assert
      expect(
        //Act
        () => Validator.validateCarNames(names)
      ).not.toThrow();
    });

    test('validateCars의 값에 5 이상의 문자열이 있는 경우', () => {
      // Arrange
      const names = ['pobi', 'sofa', 'soyaho'];
      // Assert
      expect(
        //Act
        () => Validator.validateCarNames(names)
      ).toThrow();
    });

    test('validateCars의 값에 중복 값이 있는 경우', () => {
      // Arrange
      const names = ['pobi', 'suya', 'suya'];
      // Assert
      expect(
        //Act
        () => Validator.validateCarNames(names)
      ).toThrow();
    });
  });

  test.each(validMaxTryCount)(
    'validateTryCount에 맞는 값이 들어오는 경우.',
    // Arrange
    maxTryCountString => {
      // Assert
      expect(
        //Act
        () => Validator.validateMaxTryCountString(maxTryCountString)
      ).not.toThrow();
    }
  );

  test.each(notNumberMaxTryCount)(
    'validateTryCount에 숫자가 아닌 값이 들어오는 경우 예외',
    // Arrange
    maxTryCountString => {
      // Assert
      expect(
        //Act
        () => Validator.validateMaxTryCountString(maxTryCountString)
      ).toThrow();
    }
  );

  test.each(notDigitMaxTryCount)(
    'validateTryCount에 십진수가 아닌 값이 들어오는 경우 예외',
    // Arrange
    maxTryCountString => {
      // Assert
      expect(
        //Act
        () => Validator.validateMaxTryCountString(maxTryCountString)
      ).toThrow();
    }
  );

  test.each(decimalMaxTryCount)(
    'validateTryCount에 소수 들어오는 경우 예외',
    // Arrange
    maxTryCountString => {
      // Assert
      expect(
        //Act
        () => Validator.validateMaxTryCountString(maxTryCountString)
      ).toThrow();
    }
  );
});
