const { MESSAGE } = require("../src/util/Constant.js");
const Validator = require("../src/domain/Validator.js");

describe("자동차 이름 입력값에 대한 유효성 검사", () => {
  test.each([
    [" ", MESSAGE.error.blank],
    ["aaa,b b,ccc", MESSAGE.error.blank],
    ["aaa, ,ccc", MESSAGE.error.blank],
    ["aaa,bbbbbb,ccc", MESSAGE.error.nameLength],
    ["aaa,bbb,Ccc", MESSAGE.error.lowerCase],
    ["aaa,aaa,ccc", MESSAGE.error.duplicatedName],
    ["", MESSAGE.error.null],
    ["aaa,,ccc", MESSAGE.error.null],
  ])("자동차 이름에 대한 유효성 검사 테스트", (carNames, errorMessage) => {
    expect(() => {
      Validator.carName(carNames);
    }).toThrow(errorMessage);
  });
});

//수정필요할듯?
describe("시도 횟수에 대한 유효성 검사", () => {
  test.each(["-2", "3.142592", "0"])(
    "양의 정수가 아닌 숫자가 입력되면 예외를 발생시킨다.",
    (number) => {
      expect(() => {
        Validator.tryCount(number);
      }).toThrow(MESSAGE.error.numeric);
    }
  );
});
