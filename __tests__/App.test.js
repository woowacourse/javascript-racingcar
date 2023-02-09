const { describe, expect, test } = require("@jest/globals");
const App = require("../src/App.js");

describe("readCarNameCallback 메서드에 대한 테스트 코드", () => {
  test("자동차 객체 생성 메서드 호출 테스트", () => {
    // given
    const app = new App();
    const spy = jest.spyOn(app, "createCarObject");

    // when
    app.readCarNameCallback("pobi,jun,noah");

    // then
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
