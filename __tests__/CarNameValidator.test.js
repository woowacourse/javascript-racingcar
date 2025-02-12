import CarNameValidator from "../src/validators/CarNameValidator.js";

describe('자동차 이름 유효성 클래스 테스트', () => {
    const carNameValidator = new CarNameValidator();

    describe('자동차 이름 유효성 클래스 정상 케이스',  () => {
        test('자동차 이름은 1이상 5이하이다.', () => {
            const carNames = ["일", "화성", "토성이", "목성목성", "금성금성금"]
            expect(() => carNameValidator.valiateCarNameLength(carNames)).not.toThrow();
        });
    });

    describe('자동차 이름 유효성 클래스 예외 케이스',  () => {
        test('1글자 미만의 자동차 이름이 포함되어 있으면 에러가 발생한다.', () => {
            const carNames = ["", "화성", "토성이", "목성목성"]
            expect(() => carNameValidator.valiateCarNameLength(carNames)).toThrow();
        });

        test('5글자를 초과하는 자동차 이름이 포함되어 있으면 에러가 발생한다.', () => {
            const carNames = ["화성", "토성이", "목성목성", "금성금성금성"]
            expect(() => carNameValidator.valiateCarNameLength(carNames)).toThrow();
        });
    });
});