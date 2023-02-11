const Constants = require("../src/Constants");
const Validations = require("../src/Validations");

describe("input의 유효성검사에 대한 단위 테스트", () => {
    
    test("차 이름의 길이가 5이상이면 에러를 던지는 함수 테스트", () => {
        const carNames = ['naveowo', 'nave']
        expect(() => Validations.checkCarMaxName(carNames)).toThrow(Constants.ERROR_CAR_LENGTH)
    });

    test("차 이름이 1자 미만이면 에러를 던지는 함수 테스트", () => {
        const carNames = ['naveowo', 'nave', '']
        expect(() => Validations.checkCarMinName(carNames)).toThrow(Constants.ERROR_CAR_NONAME)
    });

    test("라운드가 0이면 에러를 던지는 함수 테스트", () => {
        const roundNum = 0
        expect(() => Validations.checkRound(roundNum)).toThrow(Constants.ERROR_ROUND)
    });

    test("라운드가 음수이면 에러를 던지는 함수 테스트", () => {
        const roundNum = -1
        expect(() => Validations.checkRound(roundNum)).toThrow(Constants.ERROR_ROUND)
    });
 
})