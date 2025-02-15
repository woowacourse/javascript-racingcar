import Car from '../src/domain/Car';
test('Car.js의 객체가 잘 생성되는가?', () => {
  //given

  //when
  const car = new Car();
  //then
  expect(car).not.toBeUndefined();
});

test('랜덤 값이 4 이상일때 자동차가 전진을 하는가?', () => {
  //given
  const car = new Car();
  const randomValue = 4;

  //when
  car.moveForward(randomValue);

  //then
  expect(car.position).toBe(1);
});

test('랜덤 값이 4이하일 때 멈추는가?', () => {
  //given
  const car = new Car();
  const randomValue = 3;
  //when
  car.moveForward(randomValue);
  //then
  expect(car.position).toBe(0);
});
