import playRound from "../../src/domain/playRound";
import generateRandomNumber from "../../src/utils/generateRandomNumber";

jest.mock("../../src/utils/generateRandomNumber");

describe("domain/playRound", () => {
  let cars;

  beforeEach(() => {
    cars = [
      { name: "A", count: 1 },
      { name: "B", count: 1 },
      { name: "C", count: 0 }
    ];
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("각 자동차의 랜덤 숫자에 따라 이동 여부가 결정된다", () => {
    generateRandomNumber
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(1);

    const updatedCars = playRound(cars);

    expect(generateRandomNumber).toHaveBeenCalledTimes(3);

    expect(updatedCars).toEqual([
      { name: "A", count: 1 },
      { name: "B", count: 2 },
      { name: "C", count: 0 }
    ]);
  });
});
