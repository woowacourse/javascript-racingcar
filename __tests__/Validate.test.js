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