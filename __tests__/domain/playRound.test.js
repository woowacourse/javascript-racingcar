import playRound from "../../src/domain/playRound";

describe("domain/playRound", () => {
  let cars;

  beforeEach(() => {
    cars = [
      { name: "A", count: 1 },
      { name: "B", count: 1 },
      { name: "C", count: 0 }
    ];
  });

  test("자동차의 count 값은 증가하거나 그대로여야 한다.", () => {
    const result = playRound(cars);

    result.forEach((car, index) => {
      expect(car.count).toBeGreaterThanOrEqual(cars[index].count);
    });
  });

  test("입력된 자동차 배열과 출력 배열의 길이는 동일해야 한다.", () => {
    const result = playRound(cars);

    expect(result.length).toBe(cars.length);
  });
});
