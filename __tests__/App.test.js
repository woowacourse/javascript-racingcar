import Car from '../src/Car';
import CONFIG from '../src/constants/config';
//   - [ ] 현재 위치값이 가장 큰 최종 우승자를 출력한다.

const mockRandom = (multiply) => {
  jest.spyOn(Math, 'random').mockImplementation(() => 0.1 * multiply);
};

describe('무작위 값이 4 이상인 경우 자동차를 1만큼 전진시킨다.', () => {
  test('무작위 값이 4 이상이면 자동차를 1 전진시킨다.', () => {
    // Arrange
    mockRandom(CONFIG.CAR_MOVING_CONDITION);
    const car = new Car('아르');

    // Act
    car.move();

    // Assert
    expect(car.getData().position).toBe(1);
  });

  test('무작위 값이 4 미만이면 자동차를 전진시키지 않는다.', () => {
    // Arrange
    mockRandom(CONFIG.CAR_MOVING_CONDITION - 1);
    const car = new Car('마루');

    // Act
    car.move();

    // Assert
    expect(car.getData().position).toBe(0);
  });
});

describe('각 자동차 별로 현재 위치를 출력한다.', () => {
  test('각 자동차 별로 현재 위치를 출력한다.', () => {
    // Arrange
    console.log = jest.fn();

    const car1 = new Car('마루');
    const car2 = new Car('아르');
    const carList = [car1, car2];
    const randomMoveNumbers = [4, 3];
    const logs = ['마루 : -', '아르 : '];

    // Act
    randomMoveNumbers.forEach((moveNumber, index) => {
      mockRandom(moveNumber);
      carList[index].move();
      carList[index].printPosition();
    });

    // Assert
    logs.forEach((log) => {
      expect(console.log).toHaveBeenCalledWith(log);
    });
  });
});
