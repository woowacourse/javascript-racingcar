import validateAttemptCount from "../src/validation/validateAttemptCount.js";

test("빈 값을 입력할 경우 에러 발생", () => {
  expect(() => validateAttemptCount("")).toThrow("[ERROR] 입력이 비어 있습니다.");
});

test.each([-1.3, 342.3, "도레미도레미도", "마이턴"])("시도 횟수가 정수가 아닌 경우 에러 발생", (input) => {
  expect(() => validateAttemptCount(input)).toThrow("[ERROR] 정수를 입력해주세요.");
});

test.each([-3, -5, 0])("시도 횟수가 정수가 아닌 경우 에러 발생", (input) => {
  expect(() => validateAttemptCount(input)).toThrow("[ERROR] 0보다 큰 수를 입력해주세요.");
});
