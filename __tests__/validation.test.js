import {
  validationInputLength,
  validationCarNameForm,
} from "../src/validation.js";

describe("자동차 이름 유효성 검사", () => {
  test("자동차 이름 길이 5자 이하", () => {
    const carName = "hakuu";
    expect(() => {
      validationInputLength(carName);
    }).not.toThrow("[Error]");
  });

  test("자동차 이름 길이 5자 초과", () => {
    const carName = "hakuuu";
    expect(() => {
      validationInputLength(carName);
    }).toThrow("[Error]");
  });

  test("자동차 이름 올바른 형식", () => {
    const carList = "haku,logun";
    expect(() => {
      validationCarNameForm(carList);
    }).not.toThrow("[Error]");
  });

  test("자동차 이름 틀린 형식", () => {
    const carList = "haku,";
    expect(() => {
      validationCarNameForm(carList);
    }).toThrow("[Error]");
  });
});
