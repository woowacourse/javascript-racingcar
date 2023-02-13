const CONSTANT = require("../src/view/Constant_view");
const Validations = require("../src/validations");

describe("유효성 검사", () => {
    // const validations = new Validations()
    test("기준보다 긴 차 이름이 입력되면 오류 발생", () => {
        const carNames = ["naveowo", "nave"];

        expect(() => Validations.validateCarNameLength(carNames)).toThrow(
            CONSTANT.ERROR_CAR_LENGTH
        );
    });

    test("차 이름으로 공백이 입력되면 오류 발생", () => {
        const carNames = ["nave", "nave", ""];

        expect(() => Validations.validateIsCarName(carNames)).toThrow(
            CONSTANT.ERROR_CAR_NONAME
        );
    });

    test("경기 라운드 입력에 0이 들어가면 오류", () => {
        const roundNum = 0;

        expect(() => Validations.validateRound(roundNum)).toThrow(
            CONSTANT.ERROR_ROUND
        );
    });

    test("경기 라운드 입력에 음수가 들어가면 오류", () => {
        const roundNum = -1;

        expect(() => Validations.validateRound(roundNum)).toThrow(
            CONSTANT.ERROR_ROUND
        );
    });

    test("경기 라운드 입력에 문자가 들어가면 오류", () => {
        const roundNum = "a";

        expect(() => Validations.validateRound(roundNum)).toThrow(
            CONSTANT.ERROR_ROUND
        );
    });
});
