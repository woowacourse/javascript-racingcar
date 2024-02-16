import Car from '../src/Car';

describe('Car 클래스 테스트', () => {
  test('자동차는 이름을 가지며 move 메서드 실행 시 전진할 수 있어야 한다.', () => {
    // Arrange
    const car = new Car('아르');

    // Act
    car.move();

    // Assert
    expect(car.name).toBe('아르');
    expect(car.position).toBe(1);
  });
});
