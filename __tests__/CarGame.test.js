/* eslint-disable max-lines-per-function */
// domain
import CarGame from '../src/domain/CarGame.js';
// constants
import { ERROR_MESSAGE } from '../src/constants/System.js';

describe('Car Game Test', () => {
  let carGame;

  beforeEach(() => {
    carGame = new CarGame();
  });

  test('5글자 이상 자동차 이름 예외처리', () => {
    // Arrange
    const carNames = ['a', 'b', 'cdefghi'];

    // Assert
    expect(() =>
      // Act
      carGame.setCars(carNames),
    ).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH);
  });

  test('자동차 이름 중복 예외처리', () => {
    // Arrange
    const carNames = ['a', 'b', 'a'];

    // Assert
    expect(() =>
      // Act
      carGame.setCars(carNames),
    ).toThrow(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
  });

  test('시도 횟수 정수 예외처리', () => {
    // Arrange
    const tryCount = 'a';

    // Assert
    expect(() =>
      // Act
      carGame.setTryCount(tryCount),
    ).toThrow(ERROR_MESSAGE.TRY_COUNT_NUMBER);
  });

  test('시도 횟수 양수 예외처리', () => {
    // Arrange
    const tryCount = -1;

    // Assert
    expect(() =>
      // Act
      carGame.setTryCount(tryCount),
    ).toThrow(ERROR_MESSAGE.TRY_COUNT_MIN);
  });
});
