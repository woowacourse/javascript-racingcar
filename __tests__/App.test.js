import Car from '../src/domain/Car';
import CarList from '../src/domain/CarList';
import { CONFIG } from '../src/constants';
import { OutputView } from '../src/view';

beforeAll(() => {
  console.log = jest.fn();
});

describe('자동차 전진 로직 검증', () => {
  test('무작위 값이 4 이상이면 자동차를 1 전진시킨다.', () => {
    // Arrange
    const car = new Car('아르');
    const RANDOM_NUMBER = 4;

    // Act
    if (RANDOM_NUMBER >= CONFIG.CAR_MOVING_CONDITION) car.move();

    // Assert
    expect(car.position).toBe(1);
  });

  test('무작위 값이 4 미만이면 자동차를 전진시키지 않는다.', () => {
    // Arrange
    const car = new Car('마루');
    const RANDOM_NUMBER = 3;

    // Act
    if (RANDOM_NUMBER >= CONFIG.CAR_MOVING_CONDITION) car.move();

    // Assert
    expect(car.position).toBe(0);
  });
});

describe('자동차 경주 출력 로직 검증', () => {
  test('각 자동차 별로 현재 위치를 출력한다.', () => {
    // Arrange
    const car1 = new Car('마루');
    const car2 = new Car('아르');
    const carList = [car1, car2];
    const RANDOM_NUMBERS = [4, 3];
    const logs = ['마루 : -', '아르 : '];

    // Act
    RANDOM_NUMBERS.forEach((randomNumber, index) => {
      if (randomNumber >= CONFIG.CAR_MOVING_CONDITION) carList[index].move();
      OutputView.printCarPosition(carList[index].name, carList[index].position);
    });
    OutputView.print();

    // Assert
    logs.forEach((log) => {
      expect(console.log).toHaveBeenCalledWith(log);
    });
  });

  test('자동차 경주 우승자를 판별하여 출력한다.', () => {
    // Arrange
    const carList = new CarList(['마루', '아르']);
    const logs = ['최종 우승자: 마루, 아르'];
    const RANDOM_NUMBER = 4;

    // Act
    carList.cars.forEach((car) => {
      if (RANDOM_NUMBER >= CONFIG.CAR_MOVING_CONDITION) car.move();
    });
    const winners = carList.getWinner();
    OutputView.printWinners(winners);

    // Assert
    logs.forEach((log) => {
      expect(console.log).toHaveBeenCalledWith(log);
    });
  });
});
