const Validator = require("../src/model/Validator.js");

describe("자동차 이름 입력값에 대한 유효성 검사", () => {
  test("자동차 이름에 공백이 있는 경우 예외를 발생시킨다.", () => {
    expect(() => {
      Validator.carName("aaa,b b,ccc");
    }).toThrow("[ERROR] 자동차 이름에 공백이 포함되어서는 안됩니다.");
  });

  test("자동차 이름 길이가 잘못된 경우 예외를 발생시킨다.", () => {
    expect(() => {
      Validator.carName("aaa,bbbbbb,ccc");
    }).toThrow("[ERROR] 자동차 이름은 5자 이하이어야 합니다.");
  });

  test("자동차 이름이 영소문자로만 이루어지지 않은 경우 예외를 발생시킨다.", () => {
    expect(() => {
      Validator.carName("aaa,bbb,Ccc");
    }).toThrow("[ERROR] 자동차 이름은 영소문자로 이루어져야 합니다.");
  });
});

describe("시도 횟수에 대한 유효성 검사", () => {
  test.each([["-2"], ["3.142592"], ["0"]])(
    "%s가 입력되면 예외를 발생시킨다.",
    (number) => {
      expect(() => {
        Validator.tryCount(number);
      }).toThrow("[ERROR] 시도 횟수는 양의 정수이어야 합니다.");
    }
  );
});
