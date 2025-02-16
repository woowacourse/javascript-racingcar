import RaceController from "../src/controllers/RaceController.js";
import getRandomNumber from "../src/utils/getRandomNumber.js";

jest.mock("../src/utils/getRandomNumber.js");

const mockRandoms = (numbers) => {
  getRandomNumber.mockImplementation(() => numbers.shift());
};

describe("RaceController 클래스 테스트", () => {
  const MOVING_FORWARD = 4;
  const STOP = 3;

  test.each([
    [
      "Niya만 우승하는 경우",
      [MOVING_FORWARD, STOP, MOVING_FORWARD, STOP, MOVING_FORWARD, STOP],
      ["Niya"],
    ],
    [
      "Niya와 Hoyy가 공동 우승하는 경우",
      [
        MOVING_FORWARD,
        MOVING_FORWARD,
        MOVING_FORWARD,
        MOVING_FORWARD,
        MOVING_FORWARD,
        MOVING_FORWARD,
      ],
      ["Niya", "Hoyy"],
    ],
  ])("%s", (_, randomNumbers, expectedWinners) => {
    // given
    const names = ["Niya", "Hoyy"];
    const tryCount = 3;
    mockRandoms(randomNumbers);
    // when
    const raceController = new RaceController(names, tryCount);
    raceController.race();
    // then
    expect(raceController.getWinners()).toEqual(expectedWinners);
  });
});
