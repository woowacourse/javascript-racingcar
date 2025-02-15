import Car from "../src/domain/Car.js";

test("랜덤값이 4이상이면 앞으로 한칸 전진한다", () => {
  //when
  const car = new Car();
  car.tryMove(4);
  expect(car.position).toBe(1);

  car.tryMove(1);
  expect(car.position).toBe(1);

  car.tryMove(5);
  expect(car.position).toBe(2);
});

test("자동차에 이름을 부여할 수 있다", () => {
  //given,when
  const car = new Car("캉골");
  //then
  expect(car.raceCarName).toEqual("캉골");
});
