import Car from "../src/domains/Car";
import Race from "../src/domains/Race";

describe("Race 클래스 테스트", () => {
  let race;
  beforeEach(() => {
    race = new Race();
  });

  test("입력한 사용자 이름을 통해 Car 객체를 만들 수 있다.", () => {
    const carNames = ["pobi", "crong", "honux"];

    const carModels = race.createCars(carNames);

    carModels.forEach((car) => {
      expect(car).toBeInstanceOf(Car);
    });
  });

  test("레이스 결과를 구할 수 있다.", () => {
    const carModels = [new Car("pobi"), new Car("woni")];
    const expectedResult = ["pobi", "woni"];

    expect(race.getWinner(carModels)).toEqual(expectedResult);
  });
});
