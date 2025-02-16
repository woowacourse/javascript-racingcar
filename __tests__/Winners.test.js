import Winners from "../src/domain/Winners.js";

describe("최종 우승자 선별 테스트", () => {
  test("최종 우승자를 뽑는다.(우승자가 1명인 경우)", () => {
    const CARS = [
      { name: "데이지", position: 3 },
      { name: "머핀", position: 1 },
    ];

    const winners = new Winners(CARS);

    expect(winners.getWinners()).toEqual(["데이지"]);
  });

  test("최종 우승자를 뽑는다.(우승자가 2명 이상인 경우", () => {
    const CARS = [
      { name: "데이지", position: 5 },
      { name: "머핀", position: 5 },
      { name: "메리", position: 2 },
    ];

    const winners = new Winners(CARS);

    expect(winners.getWinners()).toEqual(["데이지", "머핀"]);
  });
});
