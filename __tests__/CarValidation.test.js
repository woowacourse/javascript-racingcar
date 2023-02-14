 const ErrorHandler = require("../src/domain/ErrorHandler");

describe("자동차 경주 유효성 검사 테스트", () => {
  test("자동차 이름 입력이 없으면 유효한 값이 아니다.", () => {
    expect(ErrorHandler.checkCarNames("")).toBeFalsy();
  });

  test("자동차 이름이 다섯 글자를 넘어서면 유효한 값이 아니다.", () => {
    expect(ErrorHandler.checkCarNames("Rulu,want,gooooo,home")).toBeFalsy();
  });

  test("자동차가 한 대만 입력되면 유효한 값이 아니다.", () => {
    expect(ErrorHandler.checkIsOneCar(["Rulu"])).toBeTruthy();
  });

  test("자동차 이름 목록에 콤마가 연속으로 입력되면 유효한 값이 아니다.", () => {
    expect(ErrorHandler.checkCarNames("Rulu,,want,go,home")).toBeFalsy();
  });

  test("자동차 이름 목록은 콤마로 시작해서는 안 된다.", () => {
    expect(ErrorHandler.checkCarNames(",Rulu")).toBeFalsy();
  });

  test("자동차 이름 목록은 콤마로 끝나서는 안 된다.", () => {
    expect(ErrorHandler.checkCarNames("Rulu,")).toBeFalsy();
  });

  test("자동차 이름이 중복되면 안된다", () => {
    expect(ErrorHandler.checkIsSameCarName(["Rulu","Rulu"])).toBeTruthy();
  });
});
