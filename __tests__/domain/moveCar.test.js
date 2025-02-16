import moveCar from "../../src/domain/moveCar";

describe("domain/moveCar", () => {
  const car = { name: "가", count: 0 };

  test.each([
    [0, { name: "가", count: 0 }],
    [1, { name: "가", count: 0 }],
    [4, { name: "가", count: 1 }],
    [5, { name: "가", count: 1 }]
  ])("", (randomNumber, expectedReturnValue) => {
    // when
    const result = moveCar(car, randomNumber);

    // then
    expect(result).toEqual(expectedReturnValue);
  });
});
