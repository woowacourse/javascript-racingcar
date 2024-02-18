/* eslint-disable max-lines-per-function */
// domain
import CarGame from '../src/domain/CarGame.js';
// constants
import { ERROR_MESSAGE } from '../src/constants/System.js';

describe('자동차 이름 인풋값에 대한 유효성 검사 테스트', () => {
  let carGame;

  beforeEach(() => {
    carGame = new CarGame();
  });

  test.each([[['가나', '다라', '마바']], [['가나다라마', '가나', '다라']]])(
    '유효한 인풋값 입력 시 정상 작동',
    (carNames) => {
      // Assert
      expect(() =>
        // Act
        carGame.setCars(carNames),
      ).not.toThrow();
    },
  );

  test('자동차 이름 5글자 이상 시 에러발생', () => {
    // Arrange
    const carNames = ['가', '나', '다라마바사아'];

    // Assert
    expect(() =>
      // Act
      carGame.setCars(carNames),
    ).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH);
  });

  test('자동차 이름 중복 시 에러발생', () => {
    // Arrange
    const carNames = ['가나', '다라', '가나'];

    // Assert
    expect(() =>
      // Act
      carGame.setCars(carNames),
    ).toThrow(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
  });
});
