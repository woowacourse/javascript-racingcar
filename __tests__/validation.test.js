import ERROR from "../src/constant/error.js";
import { validateCarNames, validateRaceCount } from "../src/util/validation.js";

describe("validation", () => {
  describe("자동차 이름", () => {
    describe("에러 케이스", () => {
      test("자동차는 최소 2대 이상 참가해야 한다.", () => {
        const carNames = "seo";

        expect(() => validateCarNames(carNames)).toThrow(ERROR.MIN_CAR_COUNT);
      });

      test("자동차의 이름은 5자 이하여야 한다.", () => {
        const carNames = "microsoft,seo";

        expect(() => validateCarNames(carNames)).toThrow(ERROR.NAME_LENGTH);
      });

      test("중복된 이름이 있으면 에러가 발생한다.", () => {
        const carNames = "ohgus,ohgus";

        expect(() => validateCarNames(carNames)).toThrow(
          ERROR.DUPLICATE_CAR_NAME
        );
      });
    });
    describe("정상 케이스", () => {
      test("자동차는 최소 2대 이상 각 자동차의 이름은 1자 이상 혹은 5자 이하여야 한다.", () => {
        const carNames = "seo,ohgus";

        expect(() => validateCarNames(carNames)).not.toThrow();
      });

      test("중복된 이름이 없으면 통과한다.", () => {
        const carNames = "seo,ohgus";

        expect(() => validateCarNames(carNames)).not.toThrow();
      });
    });
  });

  describe("경주 횟수", () => {
    describe("에러 케이스", () => {
      test("경주 시도 횟수 숫자여야 한다.", () => {
        expect(() => validateRaceCount("w")).toThrow(ERROR.RACE_COUNT_NUMBER);
      });
      test("경주 시도 횟수 정수여야 한다.", () => {
        expect(() => validateRaceCount("1.1")).toThrow(
          ERROR.RACE_COUNT_INTEGER
        );
      });
      test("경주 시도 횟수 양수여야 한다.", () => {
        expect(() => validateRaceCount("-1")).toThrow(ERROR.RACE_COUNT);
      });
    });
    describe("정상 케이스", () => {
      test("경주 시도 횟수는 1이상의 정수여야 한다.", () => {
        expect(() => validateRaceCount("1")).not.toThrow();
      });
    });
  });
});
