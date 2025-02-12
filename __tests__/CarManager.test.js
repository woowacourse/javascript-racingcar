import CarManager from '../src/CarManager.js';

test('콤마를 기준으로 자동차 이름을 분리한다', () => {
  // given
  const carManager = new CarManager();
  // when
  const cars = carManager.splitCarName('except, hailey, jun');

  // then
  expect(cars).toEqual(['except', 'hailey', 'jun']);
});
