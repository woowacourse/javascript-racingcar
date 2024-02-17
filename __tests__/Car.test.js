import Car from "../src/Model/Car";

describe("Car 객체 테스트", () => {
  test("랜덤 숫자가 4이상이면 1칸 전진해야한다.", () => {
    // arrange
    const num = 4;
    const car = new Car("러기");

    // action
    car.move(num);

    // assert
    expect(car.getDistance()).toBe(1);
  });

  describe("", () => {
    test("최대 거리 이동 차량이 우승자로 판별되어야 한다.", () => {
      // arrange
      const car1 = new Car("해린");
      const car2 = new Car("다니엘");

      // action
      car1.move(4);
      car2.move(5);

      // assert
      expect(car2.isWinner()).toBeTruthy();
    });
  });
});
