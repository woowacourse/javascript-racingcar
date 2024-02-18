import WinnerService from '../src/domain/services/WinnerService.js';
import CarList from '../src/domain/entities/CarList.js';

describe('승자 판단', () => {
  test('승자가 한 명일 때', () => {
    // Arrange
    const carsStr = 'car1, car2, car3, car4';
    const moves = [
      // expected positions: 0, 1, 3, 1
      [3, 4, 4, 4],
      [3, 3, 4, 3],
      [3, 3, 4, 3],
    ];
    const carList = new CarList(carsStr);
    moves.forEach(move => {
      carList.progress(move);
    });
    // Act
    const winners = new WinnerService(carList.getCarList()).findWinner();
    // Assert
    expect(winners).toEqual(['car3']);
  });

  test('승자가 여러 명일 때', () => {
    // Arrange
    const carsStr = 'car1, car2, car3, car4';
    const moves = [
      // expected positions: 0, 3, 3, 2
      [3, 4, 4, 4],
      [3, 4, 4, 3],
      [3, 4, 4, 4],
    ];
    const carList = new CarList(carsStr);
    moves.forEach(move => {
      carList.progress(move);
    });
    // Act
    const winners = new WinnerService(carList.getCarList()).findWinner();
    // Assert
    expect(winners).toEqual(['car2', 'car3']);
  });
});
