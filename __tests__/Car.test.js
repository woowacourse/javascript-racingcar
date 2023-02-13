const Car = require("../src/domain/Car");

describe("자동차 객체 테스트", () => {
    const car = new Car("sua");

    test("자동차 전진 가능 시, 자동차 객체 전진( score변수 +1처리 )", () => {
        car.move();
        car.move();
        car.move();
        expect(car.exportNameScore()[1]).toEqual(3);
    });

    test("결과 프린트를 위해 자동차 객체의 이름과 스코어를 Array 형태로 반환", () => {
        expect(car.exportNameScore()).toEqual(["sua", 3]);
    });
});
