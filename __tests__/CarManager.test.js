import Car from '../src/Car.js';
import CarManager from '../src/CarManager.js';

let carManager;
beforeEach(() => {
  carManager = new CarManager();
});
test('콤마를 기준으로 자동차 이름을 분리한다', () => {
  // given
  // when
  const cars = carManager.splitCarName('except, hailey, jun');

  // then
  expect(cars).toEqual(['except', 'hailey', 'jun']);
});

test('한 대의 자동차를 생성한다.', () => {
  // given
  // when
  carManager.createCars('except');
  // then
  expect(carManager.cars).toHaveLength(1);
});

test('4 이상 9 이하의 값이 나오면 1칸을 전진한다.', () => {
  // given
  const car = new Car();

  // when
  carManager.moveForwardCar(car, 5);

  // then
  expect(car.position).toBe(1);
});
