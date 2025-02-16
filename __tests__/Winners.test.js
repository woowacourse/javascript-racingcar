import Winners from "../src/domain/Winners.js";
import Car from "../src/domain/Car.js";

describe("최종 우승자 선별 테스트", () => {
  test("최종 우승자를 뽑는다.(우승자가 1명인 경우)", () => {
    const CARS = [new Car("데이지", 3), new Car("머핀", 1)];

    const winners = new Winners(CARS);

    expect(winners.getWinners()).toEqual(["데이지"]);
  });

  test("최종 우승자를 뽑는다.(우승자가 2명 이상인 경우", () => {
    const CARS = [new Car("데이지", 5), new Car("머핀", 5), new Car("메리", 1)];

    const winners = new Winners(CARS);
    expect(winners.getWinners()).toEqual(["데이지", "머핀"]);
  });
});
