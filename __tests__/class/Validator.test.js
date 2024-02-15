import Validator from '../../src/class/Validator';

describe('Validator 클래스 테스트', () => {
  const carsCases = [
    ['pobi', 'sofa', 'suya', true],
    ['pobi', 'sofa', 'soyaho', false],
    ['pobi', 'sofa', 'sofa', false],
  ];
  test.each(carsCases)(
    'validateCars 메서드는 자동차 이름 배열을 받아, 이름의 길이와 중복 여부를 검증한다.',
    // Arrange
    (name1, name2, name3, expectedResult) => {
      // Act
      const result = Validator.validateCars([name1, name2, name3]);

      // Assert
      expect(result).toBe(expectedResult);
    }
  );

  const tryCountCases = [
    ['1', true],
    ['10', true],
    ['0', true],
    ['-1', false],
    ['1.1', false],
    ['3회', false],
  ];
  test.each(carsCases)(
    'validateTryCount 메서드는 시도 횟수를 받아, 십진수로 이루어진 자연수 값인지 검증한다.',
    // Arrange
    (tryCount, expectedResult) => {
      // Act
      const result = Validator.validateTryCount(tryCount);

      // Assert
      expect(result).toBe(expectedResult);
    }
  );
});
