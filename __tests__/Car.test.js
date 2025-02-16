import DEFINITION from '../src/constants/Definition';
import Car from '../src/domain/Car';
test('Car.js의 객체가 잘 생성되는가?', () => {
  //given

  //when
  const car = new Car();
  //then
  expect(car).not.toBeUndefined();
});

test(`자동차가 ${DEFINITION.MOVE_CONDITION}을 만족하면 1만큼 전진 해야한다.`, () => {
  //given
  const car = new Car();

  //when
  car.moveForward(DEFINITION.MOVE_CONDITION);

  //then
  expect(car.position).toBe(1);
});

test('자동차가 전진 조건을 만족하지 못하면 멈춰야한다.', () => {
  //given
  const car = new Car();
  //when
  car.moveForward(3);
  //then
  expect(car.position).toBe(0);
});

test('자동차는 이름을 가져야 한다.', () => {
  // given
  const name = 'Tae';
  // when
  const car = new Car(name);
  // then
  expect(car.name).toBe(name);
});
