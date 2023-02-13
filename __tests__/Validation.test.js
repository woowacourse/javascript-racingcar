const ValidateCarName = require("../src/utils/ValidateCarName");
const ValidateCountOfTrial = require("../src/utils/ValidateCountOfTrial");

describe("자동차 이름 유효성 검사", () => {
  test.each([[["", "a"]], [["abcdef", "a"]]])(
    "자동차 이름 길이 케이스 %#",
    (testCase) => {
      expect(() => {
        console.log(testCase);
        ValidateCarName.validateCarNameLength(testCase);
      }).toThrow();
    }
  );
  test.each([[["a", "a"]]])("자동차 이름 중복 케이스 %#", (testCase) => {
    expect(() => {
      ValidateCarName.validateCarNameDuplicated(testCase);
    }).toThrow();
  });
});

describe("자동차 경주 유효성 검사", () => {
  test("자동차 경주는 1대 이상 참여해야 한다.", () => {
    const carNames = ["a"];
    expect(() => {
      ValidateCarName.validateIsRace(carNames);
    }).toThrow();
  });
});

describe("시도 횟수 유효성 검사", () => {
  test.each([" ", "."])("시도 횟수는 정수여야 합니다.", (testCase) => {
    expect(() => {
      ValidateCountOfTrial.validateIsNotANumber(testCase);
    }).toThrow();
  });
  test("시도 횟수는 1이상 이어야 합니다.", () => {
    expect(() => {
      ValidateCountOfTrial.validateRaceCount(0);
    }).toThrow();
  });
});
