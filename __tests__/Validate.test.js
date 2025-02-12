import Validate from "../src/Validate";

test("차 이름의 길이가 5자 이하인지 확인한다.", () => {
  //when
  const validate = new Validate();

  //then
  expect(validate.carNameLength("aaaaa", 5)).toBeTruthy();
  expect(validate.carNameLength("aaaaaaa", 5)).toBeFalsy();
  expect(validate.carNameLength("", 5)).toBeFalsy();
});
