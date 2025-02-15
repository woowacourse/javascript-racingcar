import Car from "../src/domain/Car.js";
describe("차 객체 유닛 테스트", () => {
  test("차 객체를 만들면 차가 생성되어야 함", () => {
    //given
    //when
    const car = new Car();
    expect(car).toBeDefined();
  });
  test("차 객체의 이름을 생성하면 이름이 동일해야함", () => {
    //given
    //when
    const car = new Car("블루");
    expect(car.name).toBe("블루");
  });
  test("차를 2번 움직이면 차의 위치가 2 증가해야함", () => {
    //given
    const car = new Car("마빈");
    const initialPosition = 0;
    const EXPECTED_RESULT = initialPosition + 2;

    //when
    car.goForward();
    car.goForward();

    expect(car.position).toBe(EXPECTED_RESULT);
  });
});
