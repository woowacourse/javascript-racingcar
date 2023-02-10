const readLine = require("../src/util/readlineInterface");
const InputView = require("../src/view/InputView");
const MESSAGES = require("../src/constant/Constant");
const mockQuestions = (answers) => {
  readLine.question = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, readLine.question);
};

describe("자동차 입력 예외 처리 테스트", () => {
  test("자동차 이름 입력은 비어 있어서는 안 된다.", async () => {
    mockQuestions([""]);
    return expect(InputView.readCarNames(MESSAGES.carText)).rejects.toThrow();
  });

  test("자동차 이름은 다섯 글자를 넘어서는 안 된다.", async () => {
    mockQuestions(["this,data,is,tooooo,long"]);
    return expect(InputView.readCarNames(MESSAGES.carText)).rejects.toThrow();
  });

  test("자동차 이름은 다섯 글자를 넘어서는 안 된다.", async () => {
    mockQuestions(["zHXv0,XeJqX,ViMXa,e,Fj,Xwz,Pk0Ve,Hax0VR,Xi,VwJzX,QuPoL,BoWxI,vLMo"]);
    return expect(InputView.readCarNames(MESSAGES.carText)).rejects.toThrow();
  });

  test("자동차 이름 목록에는 콤마가 연속으로 올 수 없다.", async () => {
    mockQuestions(["carA,carB,carC,,carD"]);
    return expect(InputView.readCarNames(MESSAGES.carText)).rejects.toThrow();
  });

  test("자동차 이름 목록은 콤마로 시작해서는 안 된다.", async () => {
    mockQuestions([",carA,carB,carC,carD"]);
    return expect(InputView.readCarNames(MESSAGES.carText)).rejects.toThrow();
  });

  test("자동차 이름 목록은 콤마로 끝나서는 안 된다.", async () => {
    mockQuestions(["carA,carB,carC,carD,"]);
    return expect(InputView.readCarNames(MESSAGES.carText)).rejects.toThrow();
  });
});

describe("자동차 이름이 올바르다면, 콤마 단위로 쪼갠 배열이 정상적으로 반환되어야 한다.", () => {
  test("입력이 a,b,c 로 주어지는 경우", async () => {
    const answer = ["a", "b", "c"];
    mockQuestions(["a,b,c"]);
    return expect(InputView.readCarNames(MESSAGES.carText)).resolves.toEqual(answer);
  });

  test("입력에 다양한 종류의 알파벳이 사용된 문자열이 주어지는 경우", async () => {
    const answer = ["aBC", "DeF1", "G0X", "MxVd", "3K", "9PwQZ", "xIl", "VheiJ", "V"];
    mockQuestions(["aBC,DeF1,G0X,MxVd,3K,9PwQZ,xIl,VheiJ"]);
    return expect(InputView.readCarNames(MESSAGES.carText)).resolves.toEqual(answer);
  });

  test("입력에 하나의 차 이름만 주어지는 경우", async () => {
    const answer = ["Solo"];
    mockQuestions(["Solo"]);
    return expect(InputView.readCarNames(MESSAGES.carText)).resolves.toEqual(answer);
  });
});
