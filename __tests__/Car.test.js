import Car from "../src/model/Car.js";
import { OutputView } from "../src/view/OutputView.js";
import { getCarStatus } from "../src/util/carUtil.js";
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
  test("차를 2번 움직이면 차가 2번 움직여아함", () => {
    //given
    const car = new Car("마빈");
    const EXPECTED_RESULT = 2;
    //when
    car.goForward();
    car.goForward();

    expect(car.position).toBe(EXPECTED_RESULT);
  });

  test("차를 움직인 만큼 차가 움직인 위치가 그려져야 함", () => {
    //given
    const car = new Car("마빈");
    const EXPECTED_RESULT = "-".repeat(100);

    for (let i = 0; i < 100; i++) {
      car.goForward();
    }

    expect(car.getPosition()).toBe(EXPECTED_RESULT);
  });
  test("printCar 함수가 정확히 이름과 위치를 표기해야함.", () => {
    //given
    const NAME = "제로콜라";

    const car = new Car(NAME);
    const EXPECTED_RESULT = `${NAME} : ----------`;

    for (let i = 0; i < 10; i++) {
      car.goForward();
    }

    expect(getCarStatus(car)).toBe(EXPECTED_RESULT);
  });
});
