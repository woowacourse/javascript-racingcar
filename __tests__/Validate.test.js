import Validate from '../src/Validate.js'

test("공백 입력 시 에러 발생", () => {
  const validate = new Validate();
  expect(() => {
    validate.isEmpty('');
  }).toThrow("[ERROR] 공백이 입력되었습니다.");
})

test("자동차 이름 글자수 5자 초과시 에러 발생", () =>{
    const validate = new Validate();
    expect(() => {
        validate.carNameLength('ABCDEF');
    }).toThrow("[ERROR] 이름 글자수가 5자를 초과하였습니다.");
})

test("숫자가 아닌 입력 시 에러 발생", () =>{
  const validate = new Validate();
  expect(() => {
      validate.isNumber(Number("ABCDEF"));
  }).toThrow("[ERROR] 숫자가 아닙니다.");
})

test("0 이하의 숫자 입력 시 에러 발생", () =>{
  const validate = new Validate();
  expect(() => {
      validate.isPositiveNumber(0);
  }).toThrow("[ERROR] 0 이하의 숫자 입니다.");
})

test("정수가 아닌 입력 시 에러 발생", () =>{
  const validate = new Validate();
  expect(() => {
      validate.isInteger(3.1);
  }).toThrow("[ERROR] 정수가 아닙니다.");
})