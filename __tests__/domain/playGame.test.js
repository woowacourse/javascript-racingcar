import playRound from "../../src/domain/playRound.js";
import playGame from "../../src/domain/playGame.js";
import { printResultHeader, printRoundScore } from "../../src/view/output.js";

jest.mock("../../src/domain/playRound");
jest.mock("../../src/view/output.js", () => ({
  printResultHeader: jest.fn(),
  printRoundScore: jest.fn()
}));

describe("domain/playGame", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("", () => {
    // given
    const carNames = ["A", "B", "C"];
    const rounds = 3;

    playRound
      .mockReturnValueOnce([
        { name: "A", count: 1 },
        { name: "B", count: 0 },
        { name: "C", count: 1 }
      ])
      .mockReturnValueOnce([
        { name: "A", count: 2 },
        { name: "B", count: 0 },
        { name: "C", count: 1 }
      ])
      .mockReturnValueOnce([
        { name: "A", count: 3 },
        { name: "B", count: 1 },
        { name: "C", count: 1 }
      ]);

    // when
    const result = playGame(carNames, rounds);

    // then

    // cars를 잘 리턴하는지
    expect(result).toEqual([
      { name: "A", count: 3 },
      { name: "B", count: 1 },
      { name: "C", count: 1 }
    ]);

    // printResultHeader는 1번 실행 되는지
    expect(printResultHeader).toHaveBeenCalledTimes(1);

    // playRound가 rounds번 실행 되는지
    expect(playRound).toHaveBeenCalledTimes(3);

    // printRoundScore가 rounds번 실행 되는지
    expect(printRoundScore).toHaveBeenCalledTimes(3);
  });
});
