import Car from "../src/domain/Car.js";

test("자동차는 앞으로 전진할 수 있다.", () => {
  //when
  const car = new Car();
  car.moveOneStep();
  expect(car.position).toBe(1);

  car.moveOneStep();
  expect(car.position).toBe(2);

  car.moveOneStep();
  expect(car.position).toBe(3);
});

test("자동차에 이름을 부여할 수 있다", () => {
  //given,when
  const car = new Car("캉골");
  //then
  expect(car.raceCarName).toEqual("캉골");
});
