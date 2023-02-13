const Move = require("../src/domain/Move");
const Car = require("../src/domain/Car");

describe("전진하는 함수 테스트", () => {
    test("인수(랜덤값)가 전진 기준값 이상이면 true를 반환", () => {
        expect(Move.isMove(4)).toEqual(true);
    });

    test("인수(랜덤값)가 전진 기준값 미만이면 false를 반환", () => {
        expect(Move.isMove(3)).toEqual(false);
    });

    test("인수(랜덤값)가 전진 기준값 이상이면 자동차 객체 전진 (score+1 처리)", () => {
        const car = new Car("sua");
        const fakeRandomFunction = (valOne, valTwo) => {
            //valOne = 0, valTwo = 9
            return valTwo;
        };
        Move.moveCar(car, fakeRandomFunction);
        const score = car.exportNameScore()[1];

        expect(score).toEqual(1);
    });

    test("인수(랜덤값)가 전진 기준값 미만이면 자동차 객체 정지 (score+1 처리하지 않기)", () => {
        const car = new Car("sua");
        const fakeRandomFunction = (valOne, valTwo) => {
            //valOne = 0, valTwo = 9
            return valOne;
        };
        Move.moveCar(car, fakeRandomFunction);
        const score = car.exportNameScore()[1];

        expect(score).toEqual(0);
    });
});
