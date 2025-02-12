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
