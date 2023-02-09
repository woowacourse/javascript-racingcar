const Validator = require("../src/model/Validator.js");

describe("자동차 이름 입력값에 대한 유효성 검사", () => {
  test("자동차 이름에 공백이 있는 경우 예외를 발생시킨다.", () => {
    expect(() => {
      Validator.carName("aaa,b b,ccc");
    }).toThrow("[ERROR] 자동차 이름에 공백이 포함되어서는 안됩니다.");
  });
});
