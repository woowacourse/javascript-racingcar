import { validationInputLength } from "../src/validation.js";

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
});
