import Garage from "../src/domain/Garage.js";
import randomNumber from "../src/utils/randomNumber.js";

jest.mock("../src/utils/randomNumber");

describe("Garage", () => {
  let garage;
  const carNames = ["car1", "car2", "car3"];

  beforeEach(() => {
    randomNumber.mockClear();
    garage = new Garage(carNames);
  });

  test("주어진 이름대로 car 생성자가 호출되는지 테스트", () => {
    garage.runAttempt();
    const carStatus = garage.getCarStatus();
    const carNamesFromGarage = carStatus.map((car) => car.name);

    expect(carNamesFromGarage).toEqual(carNames);
  });

  test("getCarStatus가 존재하는 모든 car에 대해 호출되는지 테스트", () => {
    garage.runAttempt();

    const carStatusList = garage.getCarStatus();
    expect(carStatusList).toHaveLength(carNames.length);
  });

  test("car가 이동할 수 있을 때, 모든 car에 대해서 전진 명령을 내리는지 테스트", () => {
    randomNumber.mockReturnValue(4);
    garage.runAttempt();

    const carStatus = garage.getCarStatus();
    const carPositions = carStatus.map((car) => car.position);

    expect(carPositions).toEqual([1, 1, 1]);
  });

  test("우승자가 1명 이상인 경우에 누락 없이 우승자를 집계하는지 테스트", () => {
    randomNumber.mockReturnValue(4);
    garage.runAttempt();

    const winners = garage.findWinners();
    expect(winners).toEqual(carNames);
  });

  test("우승자가 1명인 경우에 정확하게 우승자를 집계하는지 테스트", () => {
    randomNumber
      .mockReturnValueOnce(4) // 첫 번째 차량만 움직임
      .mockReturnValue(3);

    garage.runAttempt();
    const winners = garage.findWinners();
    expect(winners).toEqual([carNames[0]]);
  });
});
