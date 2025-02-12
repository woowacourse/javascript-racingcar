import {
  validationInputLength,
  validationCarNameForm,
  validationDuplicatedCarName,
  validationGameCountType,
  validationGameCountRange,
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

  test.each([
    ["haku,", "[Error]"],
    [" ", "[Error]"],
    ["", "[Error]"],
    [",", "[Error]"],
  ])("자동차 이름 틀린 형식", (input, errorMessage) => {
    expect(() => {
      validationCarNameForm(input);
    }).toThrow(errorMessage);
  });

  test("자동차 이름 중복", () => {
    const carList = "haku,haku";
    expect(() => {
      validationDuplicatedCarName(carList);
    }).toThrow("[Error]");
  });
});

describe("시도 횟수 유효성 검사", () => {
  test.each([
    [0.1, "[Error]"],
    ["abc", "[Error]"],
    [NaN, "[Error]"],
    [Infinity, "[Error]"],
  ])("시도 횟수 타입", (input, errorMessage) => {
    expect(() => {
      validationGameCountType(input);
    }).toThrow(errorMessage);
  });

  test.each([
    [0, "[Error]"],
    [100, "[Error]"],
  ])("시도 횟수 범위", (input, errorMessage) => {
    expect(() => {
      validationGameCountRange(input);
    }).toThrow(errorMessage);
  });
});
