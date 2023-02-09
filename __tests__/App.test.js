const { describe, expect, test } = require("@jest/globals");
const App = require("../src/App.js");

describe("readCarNameCallback 메서드에 대한 테스트 코드", () => {
  test("자동차 객체 생성 테스트", () => {
    const app = new App();
    app.readCarNameCallback("pobi,jun,noah");
  });
});
