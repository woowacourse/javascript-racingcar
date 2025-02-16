import Car from "../src/model/Car.js";
import { MIN } from "../src/constant/range.js";

describe("Car", () => {
  let car;

  beforeEach(() => {
    car = new Car("seo");
  });

  test("자동차에 이름을 부여할 수 있다.", () => {
    expect(car.getName()).toBe("seo");
  });

  test("자동차의 최초 위치는 0으로 시작한다.", () => {
    expect(car.getPosition()).toBe(0);
  });

  test(`${MIN.MOVE_CONDITION}이상의 숫자가 나오면 자동차는 전진할 수 있다.`, () => {
    car.move(MIN.MOVE_CONDITION);

    expect(car.getPosition()).toBe(1);
  });

  test(`${MIN.MOVE_CONDITION}미만의 숫자가 나오면 자동차는 전진하지 않는다.`, () => {
    car.move(MIN.MOVE_CONDITION - 1);

    expect(car.getPosition()).toBe(0);
  });
});
