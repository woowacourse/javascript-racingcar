import Car from "../src/domain/Car.js";
import Cars from "../src/domain/Cars.js";

describe("유효성 검증 관련 테스트", () => {
  describe("자동차 이름 관련 테스트", () => {
    test("자동차 이름이 여섯 자 이상일 경우 에러가 발생한다.", () => {
      const NAME = "banana";

      const generateCar = () => new Car(NAME);

      expect(generateCar).toThrow("[ERROR]");
    });

    test("자동차 이름이 중복될 경우 에러가 발생한다.", () => {
      const NAME = "Ryan";

      const car1 = new Car(NAME);
      const car2 = new Car(NAME);

      const generateCars = () => new Cars([car1, car2]);

      expect(generateCars).toThrow("[ERROR]");
    });

    describe("자동차 이름의 개수가 1 이하 혹은 100 초과일 경우 에러가 발생한다.", () => {
      const SINGLE_NAME = ["Ryan"];
      const TOO_MANY_NAMES = new Array(101).fill().map((_, i) => `na${i}`);

      test.each([[SINGLE_NAME], [TOO_MANY_NAMES]])("", (names) => {
        const cars = names.map((name) => new Car(name));

        const generateCars = () => new Cars(cars);

        expect(generateCars).toThrow("[ERROR]");
      });
    });
  });

  describe("시도 횟수 관련 테스트", () => {
    test("정수가 아닐 경우 에러가 발생한다.", () => {});

    test("시도 횟수가 0 혹은 100 초과일 경우 에러가 발생한다.", () => {});
  });
});
