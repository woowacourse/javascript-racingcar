const Car = require("../src/Car");

describe("자동차 객체 테스트", () => {
    const car = new Car("sua");

    test("자동차 score가 오르는면 통과", () => {
        car.go();
        car.go();
        car.go();
        expect(car.exportNameScore()[1]).toEqual(3);
    });

    test("자동차 객체의 이름과 스코어가 return되면 통과", () => {
        expect(car.exportNameScore()).toEqual(["sua", 3]);
    });
});
