import Car from "../src/domain/Car.js";
import * as Util from "../src/Util.js";

jest.mock("../src/Util.js");

test("랜덤값이 4이상이면 앞으로 한칸 전진한다", () => {
  //givin
  Util.getRandomNumber
    .mockReturnValueOnce(4)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(9);

  //when
  const car = new Car();
  car.tryMove();
  expect(car.position).toBe(1);

  car.tryMove();
  expect(car.position).toBe(1);

  car.tryMove();
  expect(car.position).toBe(2);
});

test("자동차에 이름을 부여할 수 있다", () => {
  //given,when
  const car = new Car("캉골");
  //then
  expect(car.name).toEqual("캉골");
});
