import findWinners from "../../src/domain/findWinners";

describe("domain/findWinners", () => {
  test("최종 결과에 대해 우승자를 올바르게 가려내야 한다", () => {
    // given
    const cars = [
      { name: "A", count: 2 },
      { name: "B", count: 1 },
      { name: "C", count: 3 }
    ];

    // when
    const result = findWinners(cars);

    // then
    expect(result).toEqual(["C"]);
  });
});
