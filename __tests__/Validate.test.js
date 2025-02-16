import NameValidate from "../src/validate/NameValidate.js";
import NumberValidate from "../src/validate/NumberValidate.js";

describe("Validate  테스트", () => {
  let nameValidate;
  let numberValidate;

  describe("차 이름 테스트", () => {
    beforeAll(() => {
      nameValidate = new NameValidate();
    });

    test.each([["aaaa"], ["aaaaa"]])(
      "차 이름의 길이가 5자 이하이면 예외가 발생하지 않는다. (%s)",
      (raceCarName) => {
        expect(() => nameValidate.isLimitLength(raceCarName)).not.toThrow();
      }
    );

    test.each([["aaaaaa"], ["aaaaaaaaaa"]])(
      "차 이름의 길이가 6자 이상이면 예외가 발생한다. (%s)",
      (raceCarName) => {
        expect(() => nameValidate.isLimitLength(raceCarName)).toThrow();
      }
    );
    
    test("차 이름이 빈값이 아닌지 확인한다", () => {
      expect(() => nameValidate.isPositiveLength("")).toThrow();
      expect(() => nameValidate.isPositiveLength("aa")).not.toThrow();
    });
  });

  describe("실행 횟수 테스트", () => {
    beforeAll(() => {
      numberValidate = new NumberValidate();
    });

    test("실행횟수가 양수인지 확인한다", () => {
      expect(() => numberValidate.isPositiveNumber(-1)).toThrow();
      expect(() => numberValidate.isPositiveNumber(1)).not.toThrow();
    });

    test("실행횟수가 숫자인지 확인한다", () => {
      expect(() => numberValidate.isNumeric(2)).not.toThrow();
      expect(() => numberValidate.isNumeric(NaN)).toThrow();
    });

    test("실행횟수가 정수인지 확인한다", () => {
      expect(() => numberValidate.isInteger(1.1)).toThrow();
      expect(() => numberValidate.isInteger(2)).not.toThrow();
    });
  });
});
