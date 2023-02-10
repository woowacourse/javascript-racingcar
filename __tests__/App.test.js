const App = require("../src/App.js");
const OutputView = require("../src/view/OutputView.js");

describe("readCarNameCallback 메서드에 대한 테스트 코드", () => {
  // given
  const app = new App();
  test("자동차 이름 유효성 검사 성공 후 메서드 호출 테스트", () => {
    // given
    const createCarObjectSpy = jest.spyOn(app, "createCarObject");
    const readTryCountSpy = jest.spyOn(app, "readTryCount");

    // when
    app.readCarNameCallback("pobi,jun,noah");

    // then
    expect(createCarObjectSpy).toHaveBeenCalledTimes(1);
    expect(readTryCountSpy).toHaveBeenCalledTimes(1);
  });

  test("자동차 이름 유효성 검사 실패 후 메서드 호출 테스트", () => {
    // given
    const printErrorMessageSpy = jest.spyOn(OutputView, "printErrorMessage");
    const readCarNameSpy = jest.spyOn(app, "readCarName");

    // when
    app.readCarNameCallback("pobi,jun,noahhhh");

    // then
    expect(printErrorMessageSpy).toHaveBeenCalledTimes(1);
    expect(readCarNameSpy).toHaveBeenCalledTimes(1);
  });
});

describe("readTryCountCallback 메서드 전체 호출 테스트", () => {
  //given
  const app = new App();
  test("올바른 값 입력시 moveCar 메서드 호출 테스트", () => {
    // given
    const moveCarSpy = jest.spyOn(app, "moveCar");

    // when
    app.readTryCountCallback("12");

    // then
    expect(moveCarSpy).toHaveBeenCalledTimes(1);
  });

  test("잘못된 값 입력시 메서드 호출 테스트", () => {
    // given
    const printErrorMessageSpy = jest.spyOn(OutputView, "printErrorMessage");
    printErrorMessageSpy.mockClear();
    const readTryCountSpy = jest.spyOn(app, "readTryCount");

    // when
    app.readTryCountCallback("1a");

    // then
    expect(printErrorMessageSpy).toHaveBeenCalledTimes(1);
    expect(readTryCountSpy).toHaveBeenCalledTimes(1);
  });
});
