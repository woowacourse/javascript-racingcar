import StringParser from "../src/utils/StringParser";

describe("StringParser method 테스트", () => {
  test("구분자(,)를 통해 입력된 자동차 이름들이 올바르게 분리되어야 한다.", () => {
    const input = "pobi, woni, jun";
    const expected = ["pobi", "woni", "jun"];

    const result = StringParser.splitCarNames(input);

    expect(result).toEqual(expected);
  });

  test("자동차 이름들에 공백이 포함된 경우 공백을 올바르게 제거해야 한다.", () => {
    const input = "  pobi , woni  ,   jun ";
    const expected = ["pobi", "woni", "jun"];

    const result = StringParser.splitCarNames(input);

    expect(result).toEqual(expected);
  });
});
