/* eslint-disable max-lines-per-function */
import CarGame from '../src/domain/CarGame.js';

describe('자동차 게임 기능 테스트', () => {
  let carGame;

  beforeEach(() => {
    carGame = new CarGame();
  });

  test('시도 횟수 반환 확인 테스트', () => {
    // Arrange
    const carNames = ['가', '나', '다'];
    const tryCount = 5;

    // Act
    carGame.setCars(carNames);
    carGame.setTryCount(tryCount);

    // Assert
    expect(carGame.getTryCount()).toBe(tryCount);
  });

  test('자동차 전진 or 멈춤 확인 테스트', () => {
    // Arrange
    const carNames = ['가'];
    const tryCount = 1;

    // Act
    carGame.setCars(carNames);
    carGame.setTryCount(tryCount);
    carGame.moveCars();
    const currentLocations = carGame.getCurrentLocation();

    // Assert
    currentLocations.forEach((location) => {
      expect(location.name).toBe('가');
      expect([0, 1].includes(location.location)).toBeTruthy();
    });
  });

  test('자동차 게임 우승자 판별 테스트', () => {
    // Arrange
    const carNames = ['가'];
    const tryCount = 1;

    // Act
    carGame.setCars(carNames);
    carGame.setTryCount(tryCount);
    carGame.moveCars();
    const winner = carGame.findWinners();

    // Assert
    expect(winner).toEqual(['가']);
  });
});
