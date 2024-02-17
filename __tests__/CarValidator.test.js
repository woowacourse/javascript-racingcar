import CarValidator from "../src/Validator/CarValidator";

describe("CarValidator 객체 테스트", () => {
  describe("Car 이름은 1~5자여야 한다.", () => {
    test("엣지) 이름이 1자일 때", () => {
      const minLengthName = ["가"];
      expect(() => CarValidator.checkCarName(minLengthName)).not.toThrow();
    });

    test("엣지) 이름이 5자일 때", () => {
      const maxLengthName = ["가나다라마"];
      expect(() => CarValidator.checkCarName(maxLengthName)).not.toThrow();
    });

    test("예외) 이름이 5자가 넘을 때", () => {
      const overMaxLengthName = ["가나다라마사"];
      expect(() => CarValidator.checkCarName(overMaxLengthName)).toThrow();
    });
  });

  test("Car 이름은 중복되면 안된다.", () => {
    const duplicatedName = ["다니엘", "다니엘", "리버"];
    expect(() => CarValidator.checkCarName(duplicatedName)).toThrow();
  });

  test("Car 이름 중간에 공백이 있으면 안된다.", () => {
    const includesSpaceName = ["나 바보"];
    expect(() => CarValidator.checkCarName(includesSpaceName)).toThrow();
  });
});
