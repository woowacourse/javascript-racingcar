import WinnerService from '../src/services/WinnerService.js';

describe('승자 판단', () => {
  test('승자가 한 명일 때', () => {
    // Arrange
    const CAR_NAMES = ['car1', 'car2', 'car3', 'car4'];
    const POSITIONS = [0, 1, 4, 1];
    // Act
    const winners = new WinnerService(CAR_NAMES, POSITIONS).findWinner();
    // Assert
    expect(winners).toEqual(['car3']);
  });

  test('승자가 여러 명일 때', () => {
    // Arrange
    const CAR_NAMES = ['car1', 'car2', 'car3', 'car4'];
    const POSITIONS = [0, 4, 4, 2];
    // Act
    const winners = new WinnerService([CAR_NAMES, POSITIONS]).findWinner();
    // Assert
    expect(winners).toEqual(['car2', 'car3']);
  });
});
