import WinnerService from '../src/services/WinnerService.js';

describe('승자 판단 테스트', () => {
  const makeCars = (carNames, positions) =>
    [...Array(carNames.length)].map((_, i) => ({ name: carNames[i], position: positions[i] }));

  test('승자가 한 명일 때, 승자를 잘 반환한다.', () => {
    // Arrange
    const CAR_NAMES = ['car1', 'car2', 'car3', 'car4'];
    const POSITIONS = [0, 1, 4, 1];
    const cars = makeCars(CAR_NAMES, POSITIONS);

    // Act
    const winners = new WinnerService(cars).findWinners();

    // Assert
    expect(winners).toEqual(['car3']);
  });

  test('승자가 여러 명일 때, 승자를 잘 반환한다.', () => {
    // Arrange
    const CAR_NAMES = ['car1', 'car2', 'car3', 'car4'];
    const POSITIONS = [0, 4, 4, 2];
    const cars = makeCars(CAR_NAMES, POSITIONS);

    // Act
    const winners = new WinnerService(cars).findWinners();

    // Assert
    expect(winners).toEqual(['car2', 'car3']);
  });
});
