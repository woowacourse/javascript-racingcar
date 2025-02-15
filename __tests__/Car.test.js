import Car from "../src/domain/Car.js";

describe("자동차 클래스 테스트", () => {
  describe("자동차 클래스 정상 케이스", () => {
    const name = "행성이";
    const car = new Car(name);

    test("자동차를 생성할 수 있다.", () => {
      expect(car).not.toBeUndefined();
    });

    test("자동차가 이동하면 위치가 1만큼 증가한다.", () => {
      car.move();

      expect(car.position).toBe(1);
    });
  });
});
