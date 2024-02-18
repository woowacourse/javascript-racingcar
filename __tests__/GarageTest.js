import Garage from "../src/domain/Garage.js";

describe("Garage", () => {
  let garage;
  const carNames = ["firstCar", "secondCar", "thirdCar"];

  beforeEach(() => {
    garage = new Garage(carNames);
  });

  test("getCarStatus가 존재하는 모든 car에 대해 호출되는지 테스트", () => {
    garage.runAttempt();
    const carStatusList = garage.getCarStatus();
    expect(carStatusList).toHaveLength(carNames.length);
  });

  test("findWinners가 존재하는 car 이름을 대상으로 집계하는지 테스트", () => {
    garage.runAttempt();
    const winners = garage.findWinners();

    winners.forEach((winner) => {
      expect(carNames.includes(winner)).toBe(true);
    });
  });
});
