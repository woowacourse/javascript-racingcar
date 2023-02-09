const CONSTANT = require("../src/Constant");
const Validations = require("../src/Validations");

describe("validation_test", () => {
    // const validations = new Validations()
    test("차 이름 길이 유효성 검사_validateCarNameLength()", () => {
        const carNames = ['naveowo', 'nave']

        expect(() => Validations.validateCarNameLength(carNames)).toThrow(CONSTANT.ERROR_CAR_LENGTH)
    });

    test("차 이름 여부 유효성 검사_validateIsCarName()", () => {
        const carNames = ['naveowo', 'nave', '']

        expect(() => Validations.validateIsCarName(carNames)).toThrow(CONSTANT.ERROR_CAR_NONAME)
    });

    test("경기 라운드 유효성 검사_validateRound()", () => {
        const roundNum = 0

        expect(() => Validations.validateRound(roundNum)).toThrow(CONSTANT.ERROR_ROUND)
    });

    test("경기 라운드 유효성 검사_validateRound()", () => {
        const roundNum = -1

        expect(() => Validations.validateRound(roundNum)).toThrow(CONSTANT.ERROR_ROUND)
    });
 

})