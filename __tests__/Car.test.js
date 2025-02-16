import Car from "../src/domain/Car.js";

describe("자동차 모델 테스트", () => {
  test("자동차는 이름이랑 현재위치 정도를 가질 수 있다.", () => {
    const NAME = "데이지";
    const car = new Car(NAME);

    expect(car.getName()).toBe(NAME);
  });

  test("잘못된 자동차 이름으로 자동차 객체를 생성할 경우 오류가 발생한다.", () => {
    const NAME = "가나다라마바사";

    expect(() => new Car(NAME)).toThrow("[ERROR]");
  });

  test("자동차는 전진할 수 있다.", () => {
    const NAME = "머핀";
    const car = new Car(NAME);

    car.move();

    expect(car.getPosition()).toBe(1);
  });
});
