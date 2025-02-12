import Car from "../src/Car";

test("자동차는 앞으로 한칸 움직일 수 있다", () => {
  //when
  const car = new Car();
  car.moveOneStep();

  //then
  expect(car.position).toBe(1);
});

test("자동차는 앞으로 여러 칸 움직일 수 있다.", () => {
  //when
  const car = new Car();
  car.moveOneStep();
  car.moveOneStep();
  car.moveOneStep();

  //then
  expect(car.position).toBe(3);
});

test("자동차에 이름을 부여할 수 있다", () => {
  //given,when
  const car = new Car("캉골");
  //then
  expect(car.name).toEqual("캉골");
});
