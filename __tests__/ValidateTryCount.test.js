/* eslint-disable max-lines-per-function */
import { ERROR_MESSAGE } from '../src/constants/System.js';
import CarGame from '../src/domain/CarGame.js';

describe('시도 횟수 인풋값에 대한 유효성 검사 테스트', () => {
  let carGame;

  beforeEach(() => {
    carGame = new CarGame();
  });

  test.each([1, 5, 10])('유효한 인풋값 입력 시 정상 작동', (tryCount) => {
    // Assert
    expect(() =>
      // Act
      carGame.setTryCount(tryCount),
    ).not.toThrow();
  });

  test('시도 횟수 정수 아닐 시 에러발생', () => {
    // Arrange
    const tryCount = 'a';

    // Assert
    expect(() =>
      // Act
      carGame.setTryCount(tryCount),
    ).toThrow(ERROR_MESSAGE.TRY_COUNT_NUMBER);
  });

  test('시도 횟수 양수 아닐 시 에러발생', () => {
    // Arrange
    const tryCount = -1;

    // Assert
    expect(() =>
      // Act
      carGame.setTryCount(tryCount),
    ).toThrow(ERROR_MESSAGE.TRY_COUNT_MIN);
  });
});
