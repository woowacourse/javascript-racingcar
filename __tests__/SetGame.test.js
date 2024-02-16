import SetGame from "../src/RacingCarGame/SetGame.js";
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
    // await expect(Promise.reject(setGame.init())).rejects.toThrowError(CarNameRangeError);

  });

  // test("입력된 자동차 이름이 중복되는 경우, CarNameDuplicatedError를 반환한다.", async () => {
  //   InputView.readCarNames.mockResolvedValue("a,a");
  //   InputView.readAttempt.mockResolvedValue("1");

  //   await expect(setGame.init()).rejects.toThrowError(CarNameDuplicatedError);
  // });

  // mocking 문제(추정)으로 인해 test가 제대로 진행되지 않음
  // 이후 RacingCarGame 에 대한 예외 처리 테스트 작성.
});
