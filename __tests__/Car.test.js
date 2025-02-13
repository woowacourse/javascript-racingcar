import Car from '../src/models/Car.js';

test('Car.js의 객체가 잘 생성되는가?', () => {
  //given

  //when
  const car = new Car();
  //then
  expect(car).not.toBeUndefined();
});

test('Car.js가 4이상일 때 전진을 하는가?', () => {
  //given
  const randomValue = 4;

  //when
  const car = new Car();
  car.moveForward(randomValue);

  //then
  expect(car.position).toBe(1);
});

test('Car.js가 4이하일 때 멈추는가?', () => {
  //given
  const randomValue = 3;
  //when
  const car = new Car();
  car.moveForward(randomValue);
  //then
  expect(car.position).toBe(0);
});
