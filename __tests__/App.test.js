const App = require("../src/App");
const CarGame = require("../src/CarGame");
// const { randomNumberMaker } = require("../src/MovementIndicator");
const Utils = require("../src/Utils/Utils");

const mockQuestions = (answers) => {
  Utils.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, Utils.readLine);
};

const mockRandoms = (numbers) => {
  let randomNumberMaker = () => {
    return Math.floor(Math.random() * 10);
  };
  randomNumberMaker = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, randomNumberMaker);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Utils, "print");
  logSpy.mockClear();
  return logSpy;
};
test("입력받은 자동차 이름 콤마(,)로 분리 후 앞뒤 공백 제거 테스트", () => {
  const app = new App(new CarGame());

  const names = "야미,클린 ,레고, 타미";
  const splitName = app.splitCarNames(names);

  expect(splitName).toEqual(["야미", "클린", "레고", "타미"]);
});

// -- 테스트 실패(수정중) --
describe("로또 테스트", () => {
  test("기능 테스트", () => {
    const messages = [
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).",
      "야미,클린,타미",
      "시도할 횟수는 몇회인가요?",
      "3",
      "실행 결과",
      "야미 : -",
      "클린 : ",
      "타미: ",
      "야미 : --",
      "클린 : ",
      "타미 : -",
      "야미 : --",
      "클린 : ",
      "타미 : -",
      "야미(이)가 최종 우승했습니다.",
    ];
    mockRandoms([8, 5, 1, 1, 2, 3, 2, 3, 4]);
    mockQuestions(["야미,클린,타미", "3"]);

    const logSpy = getLogSpy();

    const game = new CarGame();
    const app = new App(game);

    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
