const Run = require("../src/Run");
const Car = require("../src/Car");

describe("전진하는 함수 테스트", () => {
    test("인수가 전진 기준값 이상이면 true", () => {
        expect(Run.goStop(4)).toEqual(true);
    });

    test("인수가 전진 기준값 미만이면 false", () => {
        expect(Run.goStop(3)).toEqual(false);
    });

    test("전진 기준값 이상이면 전진", () => {
        const car = new Car("sua");
        const fakeRandomFunction = (valOne, valTwo) => {
            //valOne = 0, valTwo = 9
            return valTwo;
        };
        Run.isCarGo(car, fakeRandomFunction);
        const score = car.exportNameScore()[1];

        expect(score).toEqual(1);
    });

    test("전진 기준값 미만이면 정지", () => {
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
