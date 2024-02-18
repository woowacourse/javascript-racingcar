import Car from '../src/domain/Car';
import { CAR_TEST_MESSAGE } from '../src/constants/testMessage';

describe(CAR_TEST_MESSAGE.TITLE, () => {
  test(CAR_TEST_MESSAGE.MOVE_FORWARD, () => {
    // Arrange
    const car = new Car('아르');

    // Act
    car.move();

    // Assert
    expect(car.name).toBe('아르');
    expect(car.position).toBe(1);
  });
});
