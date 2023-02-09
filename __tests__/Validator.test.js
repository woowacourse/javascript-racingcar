const { MESSAGE } = require("../src/lib/Constant.js");
const Validator = require("../src/model/Validator.js");

describe("자동차 이름 입력값에 대한 유효성 검사", () => {
  test("자동차 이름에 공백이 있는 경우 예외를 발생시킨다.", () => {
    expect(() => {
      Validator.carName("aaa,b b,ccc");
    }).toThrow(MESSAGE.error.blank);
  });

  test("자동차 이름 길이가 잘못된 경우 예외를 발생시킨다.", () => {
    expect(() => {
      Validator.carName("aaa,bbbbbb,ccc");
    }).toThrow(MESSAGE.error.nameLength);
  });

  test("자동차 이름이 영소문자로만 이루어지지 않은 경우 예외를 발생시킨다.", () => {
    expect(() => {
      Validator.carName("aaa,bbb,Ccc");
    }).toThrow(MESSAGE.error.lowerCase);
  });
});

describe("시도 횟수에 대한 유효성 검사", () => {
  test.each([["-2"], ["3.142592"], ["0"]])(
    "%s가 입력되면 예외를 발생시킨다.",
    (number) => {
      expect(() => {
        Validator.tryCount(number);
      }).toThrow(MESSAGE.error.numeric);
    }
  );
});
