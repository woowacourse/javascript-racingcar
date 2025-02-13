import validateCarNameList from "../src/validation/validateCarNameList.js";
import { CAR_NAME_LENGTH_MAX } from "../src/constants/Constants.js";

test(`빈 값을 입력할 경우 에러 발생`, () => {
  expect(() => validateCarNameList([])).toThrow("[ERROR] 입력이 비어 있습니다.");
});

test.each([[["수이", "", "메타"]], [["수이", "", "", "메타"]]])("차 이름에 빈 값이 존재하는 경우 에러 발생", (input) => {
  expect(() => validateCarNameList(input)).toThrow("[ERROR] 자동차 이름에 빈 값이 포함되어 있습니다.");
});

test(`차 이름이 하나인 경우 에러 발생`, () => {
  expect(() => validateCarNameList(["수이"])).toThrow("[ERROR] 두 대 이상의 자동차 이름을 입력해 주세요.");
});

test.each([[["수이", "수이", "메타"]], [["메타", "메타", "메타"]]])("차 이름 중복이 존재하는 경우 에러 발생", (input) => {
  expect(() => validateCarNameList(input)).toThrow("[ERROR] 자동차 이름이 중복되었습니다");
});

test.each([[["수이이이이이이이이", "수이", "메타"]], [["메롱로올오롱로ㅗㄹㅇ타타타타타타타타", "수이바보멍청이"]]])(
  "이름이 다섯글자 이상인 경우 에러 발생",
  (input) => {
    expect(() => validateCarNameList(input)).toThrow(`자동차 이름은 ${CAR_NAME_LENGTH_MAX}자를 넘을 수 없습니다.`);
  }
);
