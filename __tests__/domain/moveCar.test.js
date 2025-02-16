import moveCar from "../../src/domain/moveCar";

describe("domain/moveCar", () => {
  const car = { name: "가", count: 0 };

  test.each([
    [3, { name: "가", count: 0 }],
    [4, { name: "가", count: 1 }]
  ])(
    "자동차는 제공받은 랜덤 숫자 %s에 따라 움직이거나 멈춰야 한다.",
    (randomNumber, expectedReturnValue) => {
      // when
      const result = moveCar(car, randomNumber);

      // then
      expect(result).toEqual(expectedReturnValue);
    }
  );
});
