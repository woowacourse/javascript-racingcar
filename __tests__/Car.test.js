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
