const { MESSAGE } = require("../src/util/Constant.js");
const Validator = require("../src/domain/Validator.js");

describe("자동차 이름 입력값에 대한 유효성 검사", () => {
  test.each([[" "], ["aaa,b b,ccc"], ["aaa, ,ccc"]])(
    "자동차 이름에 공백이 포함될 경우 예외가 발생한다.",
    (carNames) => {
      expect(() => {
        Validator.carName(carNames);
      }).toThrow(MESSAGE.error.blank);
    }
  );

  test.each([["aaa,bbbbbb,ccc"], ["aaaaaa,bbb,ccc"]])(
    "자동차 이름의 길이가 4이하가 아닌경우 예외가 발생한다.",
    (carNames) => {
      expect(() => {
        Validator.carName(carNames);
      }).toThrow(MESSAGE.error.nameLength);
    }
  );

  test.each([["aaa,bbb,Ccc"], ["aaa,bBb,ccc"]])(
    "자동차 이름이 소문자로만 이루어지지 않은 경우 예외가 발생한다",
    (carNames) => {
      expect(() => {
        Validator.carName(carNames);
      }).toThrow(MESSAGE.error.lowerCase);
    }
  );

  test.each([["aaa,aaa,ccc"], ["aaa,bbb,aaa"]])(
    "자동차 이름이 중복된 경우 예외가 발생한다",
    (carNames) => {
      expect(() => {
        Validator.carName(carNames);
      }).toThrow(MESSAGE.error.duplicatedName);
    }
  );

  test.each([[""], ["aaa,,ccc"]])(
    "자동차 이름이 빈값인 경우 예외가 발생한다",
    (carNames) => {
      expect(() => {
        Validator.carName(carNames);
      }).toThrow(MESSAGE.error.null);
    }
  );
});

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
