/* eslint-disable comma-dangle */
import Car from '../src/domain/Car.js';
import CarManager from '../src/domain/CarManager.js';

test.each([
  [5, 1],
  [3, 0],
])(
  'moveForwardCar 함수는 4 이상 9이하의 값이 나와야 한 칸 전진시킨다.',
  (attempts, result) => {
    const carManager = new CarManager([]);
    const car = new Car();

    expect(carManager.moveForwardCar(car, attempts)).toBe(result);
  }
);
