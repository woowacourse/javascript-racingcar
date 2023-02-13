const Car = require("../src/domain/Car");

describe("자동차 객체 테스트", () => {
    const car = new Car("sua");

    test("자동차 전진 시, 자동차 객체의 score변수 +1처리", () => {
        car.move();
        car.move();
        car.move();
        expect(car.exportNameScore()[1]).toEqual(3);
    });

    test("호출 시 자동차 객체의 이름과 스코어를 Array 형태로 return", () => {
        expect(car.exportNameScore()).toEqual(["sua", 3]);
    });
});
