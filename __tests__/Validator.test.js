const { Validator } = require("../src/Validator");

describe("자동차 이름 유효성 검사", () => {
  test("자동차 이름이 5글자 이하인 경우", () => {
    expect(() => Validator.validateName(["a", "b", "c"]).toThrow());
  });

  test("자동차 이름이 5글자 초과인 경우", () => {
    expect(() => Validator.validateName(["a", "b", "cccccc"])).toThrow();
  });

  test("자동차 이름이 5글자 이하 영어,한글,숫자 조합인 경우", () => {
    expect(() =>
      Validator.validateName(["aㄱ1", "22", "bbbb", "ㄷㄷㄷ"]).not.toThrow()
    );
  });

  test("자동차 이름에 영어,한글,숫자 이외의 문자가 포함된 경우", () => {
    expect(() => Validator.validateName("a1,22,bbbb,ㄷㄷㄷ,!")).toThrow();
  });
});

describe("시도 횟수 유효성 검사", () => {
  test("시도 횟수가 1 이상인 양의 정수인 경우", () => {
    expect(() => Validator.validateTryCnt(10)).not.toThrow();
  });

  test("시도 횟수가 0 미만인 경우", () => {
    expect(() => Validator.validateTryCnt(-1)).toThrow();
  });

  test("시도 횟수가 정수가 아닌 경우", () => {
    expect(() => Validator.validateTryCnt(1.23)).toThrow();
  });
});
