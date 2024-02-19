import SetGame from "../src/domain/SetGame.js";
import { CarNameDuplicatedError, CarNameLengthError, CarNameRangeError } from "../src/error/CustomError.js";
import { readCarNames, readAttempt } from "../src/view/InputView.js";
import{ printError } from "../src/view/OutputView.js";

jest.mock("../src/view/InputView.js");

const getLogSpy = () => {
  const outputView = require("../src/view/OutputView.js");
  const logSpy = jest.spyOn(outputView, "printError");
  logSpy.mockClear();
  return logSpy;
};

describe("SetGame unit test", () => {
  let setGame;

  beforeEach(() => {
    jest.restoreAllMocks();
    setGame = new SetGame();
  });

  test.each([
    ["a,b,c"],
    ["a,b,c,d,e"],
    ["a"],
  ])("입력된 자동차 이름의 갯수가 1개 이상 50개 이하여야 한다. ", async (input) => {
    readCarNames.mockResolvedValue(input);
    readAttempt.mockResolvedValue("1");

    await expect(setGame.init()).resolves.not.toThrow();
  });

  test("입력된 자동차 이름의 갯수가 1개 이상 50개가 아니면 CarNameRangeError를 반환한다.", async () => {
    readCarNames.mockResolvedValue("a,b,c");
    readCarNames.mockResolvedValueOnce("");
    readAttempt.mockResolvedValue("1");
    const logSpy = getLogSpy();
    await setGame.init();

    expect(logSpy).toHaveBeenCalledWith(new CarNameRangeError());

  });
});
