import App from "../src/index.js";
import ReadLine from "../src/util/readLineAsync.js";
import Random from "../src/util/random.js";

const mockQuestions = (inputs) => {
  ReadLine.readLineAsync = jest.fn();
  ReadLine.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.randomNum = jest.fn();
  numbers.map((num) => {
    Random.randomNum.mockReturnValueOnce(num);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(console, "log");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 게임 실행", () => {
  test("테스트 성공", async () => {
    // given
    const inputs = ["a,b,c", "2"];
    const outputs = [
      "실행 결과",
      "a : ",
      "b : ",
      "c : ",
      "a : -",
      "b : -",
      "c : -",
      "최종 우승자 : a, b, c",
    ];
    const randoms = [1, 2, 3, 4, 5, 6];
    const logSpy = getLogSpy();

    mockQuestions([...inputs]);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();
    await new Promise((resolve) => setImmediate(resolve));

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
