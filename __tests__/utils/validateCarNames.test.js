import {
  validateEmptyString,
  validateCarNameLength,
  validateDuplicate
} from "../../src/utils/validateCarNames.js";

describe("utils/valideCarNames", () => {
  test.each([[["일이삼사오", "일이삼"]], [["aaa", "aaa"]]]);

  test("이름 입력에 빈 값이 들어온 경우", () => {
    // given
    const names = ["A", "B", "C", ""];

    // when & then
    expect(() => validateEmptyString(names)).toThrow("이름이 비어있습니다.");
  });

  test.each([
    [["일이삼사오", "일이삼"], null],
    [["일이삼사오육", "일이삼"], "5자 이하로 설정해주세요."]
  ])("%s가 5자 이하인지 확인", (input, expectedError) => {
    if (expectedError) {
      expect(() => validateCarNameLength(input)).toThrow(expectedError);
    } else {
      expect(() => validateCarNameLength(input)).not.toThrow();
    }
  });

  test("차 이름이 중복인 경우", () => {
    // given
    const names = ["aa", "aa", "b", "c"];

    // when & then
    expect(() => validateDuplicate(names)).toThrow(
      "중복된 이름은 사용할 수 없습니다."
    );
  });
});
