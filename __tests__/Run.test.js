const Run = require("../src/Run");
const Car = require("../src/Car");

describe("전진하는 함수 테스트", () => {
    test("인수(랜덤값)가 전진 기준값 이상인지 확인하여 논리갑 return_이상인 경우", () => {
        expect(Run.goStop(4)).toEqual(true);
    });

    test("인수(랜덤값)가 전진 기준값 이상인지 확인하여 논리갑 return_이하인 경우", () => {
        expect(Run.goStop(3)).toEqual(false);
    });

    test("전진 기준값 이상이면 자동차 객체의 score+1 처리", () => {
        const car = new Car("sua");
        const fakeRandomFunction = (valOne, valTwo) => {
            //valOne = 0, valTwo = 9
            return valTwo;
        };
        Run.isCarGo(car, fakeRandomFunction);
        const score = car.exportNameScore()[1];

        expect(score).toEqual(1);
    });

    test("전진 기준값 미만이면 자동차 객체의 score+1 처리하지 않기", () => {
        const car = new Car("sua");
        const fakeRandomFunction = (valOne, valTwo) => {
            //valOne = 0, valTwo = 9
            return valOne;
        };
        Run.isCarGo(car, fakeRandomFunction);
        const score = car.exportNameScore()[1];

        expect(score).toEqual(0);
    });
});
