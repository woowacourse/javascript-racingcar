import App from "../src/App";
import pickNumberInRange from "../src/utils/pickNumberInRange";
import Console from "../src/utils/Console";
import { ERROR_MESSAGES } from "../src/constants/car-race";

jest.mock("../src/utils/pickNumberInRange", () => {
  return jest.fn();
});

const mockRandoms = (numbers) => {
  numbers.forEach((number) => {
    pickNumberInRange.mockReturnValueOnce(number);
  });
};

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();

  return logSpy;
};

describe("자동차 경주 애플리케이션 테스트", () => {
  it("정상적인 전진-정지의 경우 올바르게 출력 되는지 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP];

    const inputs = ["harry,bong", "1"];
    const harryOutput = ["harry : -"];
    const bongOutput = ["bong :"];

    const logSpy = getLogSpy();
    // when
    mockQuestions(inputs);
    mockRandoms(randoms);

    const app = new App();
    await app.run();

    // then
    [...harryOutput, ...bongOutput].forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe("자동차 경주 입력에 대한 예외 테스트", () => {
  const TEST_CASES = [
    {
      inputs: ["harry,harry", "harry,bong", "5"],
      expectedErrorMessage: ERROR_MESSAGES.carNameUniqueness,
    },
    {
      inputs: ["harrrrrry,harry", "harry,bong", "5"],
      expectedErrorMessage: ERROR_MESSAGES.carNameLength,
    },
    {
      inputs: ["harry,bong", "a", "10"],
      expectedErrorMessage: ERROR_MESSAGES.invalidNumberType,
    },
    {
      inputs: ["harry,bong", "-1", "10"],
      expectedErrorMessage: ERROR_MESSAGES.negativeTryCount,
    },
  ];

  let logSpy;

  beforeEach(() => {
    logSpy = getLogSpy();
  });

  test.each(TEST_CASES)(
    "각 예외 상황에 맞는 에러 메시지를 콘솔에 출력하는지 테스트",
    async ({ inputs, expectedErrorMessage }) => {
      console.log(inputs, expectedErrorMessage);
      mockQuestions(inputs);

      const app = new App();
      await app.run();

      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining(expectedErrorMessage)
      );
    }
  );
});
