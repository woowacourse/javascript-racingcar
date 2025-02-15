import validateCarNameList from "../src/validation/validateCarNameList.js";
import { CAR_NAME_LENGTH_MAX } from "../src/constants/Constants.js";
import validateRandomNumberArrange from "../src/validation/validateRandomNumberArrange.js";

describe("자동차 이름 목록 유효성 검사", () => {
  test(`빈 값을 입력할 경우 에러 발생`, () => {
    expect(() => validateCarNameList([])).toThrow("[ERROR] 입력이 비어 있습니다.");
  });

  test.each([[["수이", "", "메타"]], [["수이", "\n", "메타"],[" ","수이","메타"]]])("차 이름에 빈 값이 존재하는 경우 에러 발생", (input) => {
    expect(() => validateCarNameList(input)).toThrow("[ERROR] 자동차 이름에 빈 값이 포함되어 있습니다.");
  });

  test(`차 이름이 하나인 경우 에러 발생`, () => {
    expect(() => validateCarNameList(["수이"])).toThrow("[ERROR] 두 대 이상의 자동차 이름을 입력해 주세요.");
  });

  test.each([[["수이", "수이", "메타"]], [["메타", "메타", "메타"]]])("차 이름 중복이 존재하는 경우 에러 발생", (input) => {
    expect(() => validateCarNameList(input)).toThrow("[ERROR] 자동차 이름이 중복되었습니다");
  });

  test.each([[["수이이이이이이이이", "수이", "메타"]], [["메롱로올오롱로ㅗㄹㅇ타타타타타타타타", "수이바보멍청이"]]])(
    `이름이 ${CAR_NAME_LENGTH_MAX}글자 이상인 경우 에러 발생`,
    (input) => {
      expect(() => validateCarNameList(input)).toThrow(`자동차 이름은 ${CAR_NAME_LENGTH_MAX}자를 넘을 수 없습니다.`);
    })

  test(`중복없는 ${CAR_NAME_LENGTH_MAX}글자 이하 이름인 경우 에러 발생x`, () => {
     expect(() => validateCarNameList(["수이","메타","동키콩콩콩"])).not.toThrow();
  });
  
})
describe("랜덤 숫자 생성 범위 유효성 검사", () => {
  test.each([[{min:"hi", max:0}, {min:0, max:"hi"}]])("문자열인 경우 에러 발생", (value) => {
    expect(() => validateRandomNumberArrange(value)).toThrow("[ERROR] 정수를 입력해주세요.");
  });

  test.each([[{min:-1.5,max:3},{min:2,max:2.5},{min:1.2,max:12.2}]])("정수가 아닌 경우 에러 발생", (value) => {
    expect(() => validateRandomNumberArrange(value)).toThrow("[ERROR] 정수를 입력해주세요.");
  });

  test.each([
    {min:3,max:2},
    {min:11,max:2},
    {min:-1,max:-3}
  ])("최솟값이 최댓값보다 큰 경우 에러 발생", (value) => {
    expect(() => validateRandomNumberArrange(value)).toThrow("[ERROR] 최솟값은 최댓값보다 클 수 없습니다.");
  });

  test.each([
    {min:1,max:5},
    {min:0,max:100},
    {min:-10,max:-5}
  ])("유효한 범위인 경우 에러 미발생", (value) => {
    expect(() => validateRandomNumberArrange(value)).not.toThrow();
  });
});
