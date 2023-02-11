const ErrorHandler = require("../src/domain/ErrorHandler");

describe("자동차 경주 예외 처리 테스트", () => {
  test("자동차 이름 입력이 없으면 예외가 발생한다.", () => {
    expect(ErrorHandler.checkCarNames("")).toEqual(0);
  });

  test("자동차 이름이 다섯 글자를 넘어서면 예외가 발생한다.", () => {
    -expect(ErrorHandler.checkCarNames("Rulu,want,gooooo,home")).toEqual(0);
  });

  test("자동차가 한 대만 입력되면 예외가 발생한다.", () => {
    -expect(ErrorHandler.checkCarNames("Rulu")).toEqual(0);
  });

  test("자동차 이름 목록에 콤마가 연속으로 입력되면 예외가 발생한다.", () => {
    -expect(ErrorHandler.checkCarNames("Rulu,,want,go,home")).toEqual(0);
  });

  test("자동차 이름 목록은 콤마로 시작해서는 안 된다.", () => {
    -expect(ErrorHandler.checkCarNames(",Rulu")).toEqual(0);
  });

  test("자동차 이름 목록은 콤마로 끝나서는 안 된다.", () => {
    -expect(ErrorHandler.checkCarNames("Rulu,")).toEqual(0);
  });
});
