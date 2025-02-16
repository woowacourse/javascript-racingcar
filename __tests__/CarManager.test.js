import Car from '../src/domain/model/Car.js';
import Race from '../src/domain/model/Race.js';

let race;
beforeEach(() => {
  race = new Race();
});

test('한 대의 자동차를 생성한다.', () => {
  race.createCars(['except']);

  expect(race.cars).toHaveLength(1);
});

test('4 이상 9 이하의 값이 나오면 1칸을 전진한다.', () => {
  const car = new Car();
  race.moveForwardCar(car, 5);

  expect(car.getPosition()).toBe(1);
});

test('4 이상 9 이하의 값이 나오지 않으면 1칸을 전진하지 않는다.', () => {
  const car = new Car();
  race.moveForwardCar(car, 3);

  expect(car.getPosition()).toBe(0);
});
