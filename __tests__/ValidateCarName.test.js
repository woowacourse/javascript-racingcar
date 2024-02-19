/* eslint-disable max-lines-per-function */
import { ERROR_MESSAGE } from '../src/constants/System.js';
import CarGame from '../src/domain/CarGame.js';

describe('자동차 이름 인풋값에 대한 유효성 검사 테스트', () => {
  let carGame;

  beforeEach(() => {
    carGame = new CarGame();
  });

  test.each([
    [['가나', '다라', '마바']],
    [['가나다라마', '가나', '다라']],
    [['가']],
  ])('유효한 인풋값 (5글자 이하 && 중복X) 입력 시 정상 작동', (carNames) => {
    // Assert
    expect(() =>
      // Act
      carGame.setCars(carNames),
    ).not.toThrow();
  });

  test('자동차 이름 5글자 초과시 에러발생', () => {
    // Arrange
    const LONGER_THAN_RANGE_CARNAME = ['가나다라마바'];

    // Assert
    expect(() =>
      // Act
      carGame.setCars(LONGER_THAN_RANGE_CARNAME),
    ).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH);
  });

  test('자동차 이름 중복시 에러발생', () => {
    // Arrange
    const DUPLICATE_CARNAMES = ['가나', '가나'];

    // Assert
    expect(() =>
      // Act
      carGame.setCars(DUPLICATE_CARNAMES),
    ).toThrow(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
  });
});
