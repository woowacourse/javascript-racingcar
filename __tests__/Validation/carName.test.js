import {
  validateCarsNameLength,
  validateCarsNameForm,
  validateDuplicatedCarName,
} from "../../src/Validation/carName.js";

describe("자동차 이름 유효성 검사", () => {
  test("자동차 이름 길이 5자 이하", () => {
    const carName = "hakuu";
    expect(() => {
      validateCarsNameLength(carName);
    }).not.toThrow("[Error]");
  });

  test("자동차 이름 길이 5자 초과", () => {
    const carName = "hakuuu";
    expect(() => {
      validateCarsNameLength(carName);
    }).toThrow("[Error]");
  });

  test("자동차 이름 올바른 형식", () => {
    const carList = "haku,logun";
    expect(() => {
      validateCarsNameForm(carList);
    }).not.toThrow("[Error]");
  });

  test.each([
    ["haku,", "[Error]"],
    [" ", "[Error]"],
    ["", "[Error]"],
    [",", "[Error]"],
  ])("자동차 이름 틀린 형식", (input, errorMessage) => {
    expect(() => {
      validateCarsNameForm(input);
    }).toThrow(errorMessage);
  });

  test("자동차 이름 중복", () => {
    const carList = "haku,haku";
    expect(() => {
      validateDuplicatedCarName(carList);
    }).toThrow("[Error]");
  });
});
