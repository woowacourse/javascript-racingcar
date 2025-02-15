import Car from "../src/domain/Car.js";
describe("Car 클래스 테스트", () => {
  test("랜덤값이 4이상이면 앞으로 한칸 전진한다", () => {
    const car = new Car();

    car.tryMove(4);

    expect(car.position).toBe(1);
  });

  test("랜덤값이 4미만이면 전진하지 않는다", () => {
    const car = new Car();

    car.tryMove(3);

    expect(car.position).toBe(0);
  });

  test("자동차에 이름을 부여할 수 있다", () => {
    //given,when
    const car = new Car("캉골");
    //then
    expect(car.raceCarName).toEqual("캉골");
  });
});
