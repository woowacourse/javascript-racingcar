import InvalidInputException from "../src/exceptions/InvalidInputException";
import carNamesValidator from "../src/validators/carNamesValidator";
import tryCountValidator from "../src/validators/tryCountValidator";

describe("자동차 이름 입력값들에 대한 유효성 검증 테스트", () => {
  const VALID_NAMES = [
    "h",
    "ha",
    "har",
    "hary",
    "harry",
    "harry, bong",
    "harry, hong, pome",
  ];

  test.each(VALID_NAMES)(
    "유효한 자동차 이름들의 입력에 대해서는 예외를 발생시키지 않는다",
    (names) => {
      // when, then

      expect(() => {
        carNamesValidator.validate(names);
      }).not.toThrow(InvalidInputException);
    }
  );

  const INVALID_NAMES = ["", "haarrry", "harry, harry"];

  test.each(INVALID_NAMES)(
    "유효하지 않은 자동차 이름들의 입력에 대해서는 예외를 발생시켜야한다.",
    (names) => {
      // when, then
      expect(() => {
        carNamesValidator.validate(names);
      }).toThrow(InvalidInputException);
    }
  );
});

describe("자동차 경주 시도 횟수 입력에 대한 유효성 검증 테스트", () => {
  const VALID_TRY_COUNT = ["1", "3", "100"];

  test.each(VALID_TRY_COUNT)(
    "유효한 자동차 경주 시도 횟수 입력에 대해서는 예외를 발생시키지 않는다",
    (names) => {
      // when, then

      expect(() => {
        tryCountValidator.validate(names);
      }).not.toThrow(InvalidInputException);
    }
  );

  const INVALID_TRY_COUNT = ["-1", "0", "a"];

  test.each(INVALID_TRY_COUNT)(
    "유효한 자동차 경주 시도 횟수 입력에 대해서는 예외를 발생시키지 않는다",
    (names) => {
      // when, then

      expect(() => {
        tryCountValidator.validate(names);
      }).toThrow(InvalidInputException);
    }
  );
});
