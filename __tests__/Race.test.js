import Car from "../src/domains/Car";
import Race from "../src/domains/Race";

describe("Race 클래스 테스트", () => {
  let race;
  beforeEach(() => {
    race = new Race();
  });

  test("createCars 메소드 테스트", () => {
    const carNames = ["pobi", "crong", "honux"];

    const carModels = race.createCars(carNames);

    carModels.forEach((car) => {
      expect(car).toBeInstanceOf(Car);
    });
  });

  test("getWinner 메소드 테스트", () => {
    const carModels = [new Car("pobi"), new Car("woni")];
    const expectedResult = ["pobi", "woni"];

    expect(race.getWinner(carModels)).toEqual(expectedResult);
  });
});
