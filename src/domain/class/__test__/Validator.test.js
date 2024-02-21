import Validator from '../Validator';
import CONSTANTS from '../../../CONSTANTS';

const { numeric } = CONSTANTS;
const validMaxTryCount = ['1', '2', '10'];
const notNumberMaxTryCount = ['한번', '1회'];
const notDigitMaxTryCount = ['0x10', '0b101', '0o123'];
const decimalMaxTryCount = ['0.1', '0.2', '0.123'];

describe('Validator 클래스 테스트', () => {
  //toThrow의 경우 로컬에서 시간이 오래 걸리기 때문에
  //setTimeOut을 이용해 테스트 시간을 늘림
  jest.setTimeout(7000);

  describe('validateCars', () => {
    test('carNames에 5 이상의 문자열이 없는 경우 예외 처리하지 않음', () => {
      // Arrange
      const names = ['pobi', 'sofa', 'suya'];

      // Assert
      expect(
        //Act
        () => Validator.validateCarNames(names)
      ).not.toThrow();
    });

    test('carNames의 값에 5 이상의 문자열이 있는 경우 예외처리 함', () => {
      // Arrange
      const names = ['pobi', 'sofa', 'soyaho'];
      // Assert
      expect(
        //Act
        () => Validator.validateCarNames(names)
      ).toThrow();
    });

    test('carNames의 값에 중복 값이 있는 경우 예외처리 함', () => {
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
    'maxTryCount에 숫자이고 범위 내의 값이 들어오는 경우 예외처리하지 않음.',
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
    'maxTryCount에 숫자가 아닌 값이 들어오는 경우 예외처리 함.',
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
    'maxTryCount에 십진수가 아닌 값이 들어오는 경우 예외처리 함.',
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
    'maxTryCount에 소수 들어오는 경우 예외처리 함.',
    // Arrange
    maxTryCountString => {
      // Assert
      expect(
        //Act
        () => Validator.validateMaxTryCountString(maxTryCountString)
      ).toThrow();
    }
  );

  test(`maxTryCount에 최소값(${numeric.MIN_MAX_TRY_COUNT}) 미만의 값이 들어오는 경우 예외처리 함.`, () => {
    // Arrange
    // Assert
    expect(
      //Act
      () =>
        Validator.validateMaxTryCountString(`${numeric.MIN_MAX_TRY_COUNT - 1}`)
    ).toThrow();
  });

  test(`maxTryCountt에 최대값(${numeric.MAX_MAX_TRY_COUNT}) 초과의 값이 들어오는 경우 예외처리 함.`, () => {
    // Arrange
    // Assert
    expect(
      //Act
      () =>
        Validator.validateMaxTryCountString(`${numeric.MAX_MAX_TRY_COUNT + 1}`)
    ).toThrow();
  });

  test(`maxTryCount에 최소값(${numeric.MIN_MAX_TRY_COUNT})이 들어오는 경우 예외처리 하지 않음.`, () => {
    // Arrange
    // Assert
    expect(
      //Act
      () => Validator.validateMaxTryCountString(`${numeric.MIN_MAX_TRY_COUNT}`)
    ).not.toThrow();
  });

  test(`maxTryCountt에 최대값(${numeric.MAX_MAX_TRY_COUNT})이 들어오는 경우 예외처리 하지 않음.`, () => {
    // Arrange
    // Assert
    expect(
      //Act
      () => Validator.validateMaxTryCountString(`${numeric.MAX_MAX_TRY_COUNT}`)
    ).not.toThrow();
  });
});
