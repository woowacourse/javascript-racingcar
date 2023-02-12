const splitAndTrimString = require("../src/util/SplitAndTrimString");

test("입력받은 자동차 이름 콤마(,)로 분리 후 앞뒤 공백 제거 테스트", () => {
  const names = "야미,클린 ,레고, 타미";
  const splitAndTrimmedString = ["야미", "클린", "레고", "타미"];

  expect(splitAndTrimString(names)).toEqual(splitAndTrimmedString);
});
