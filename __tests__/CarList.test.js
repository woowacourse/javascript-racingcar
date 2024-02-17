import CONDITIONS from '../src/constants/Conditions.js';
import CarList from './../src/entities/CarList';

describe('Car 테스트', () => {
  test('랜덤값에 따른 전진 여부', () => {
    // Arrange
    const RANDOM_NUMBERS = [0, 1, 3, 4, 5, 9];
    const POSITIONS = RANDOM_NUMBERS.map(number => (number >= CONDITIONS.progressRandomThreshold ? 1 : 0));
    const carsStr = 'pen,apple,car3,car4,car5,car6';
    const cars = new CarList(carsStr);
    // Act
    cars.progress(RANDOM_NUMBERS);
    const carList = cars.getCarList();
    // Assert
    carList.forEach((car, index) => {
      expect(car.getPosition()).toEqual(POSITIONS[index]);
    });
  });
});
