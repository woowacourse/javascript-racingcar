const Car = require("../src/Car")

describe("car_test", () => {
    const car = new Car("val");    

    test("차 이름 얻는 함수_getCarName()", () => {
        expect(car.getCarName()).toEqual("val") ;
    })

    test("차 전진횟수 얻는 함수_getScore()", () => {
        expect(car.getScore()).toEqual(0);
    })

    test("차 전진횟수 얻는 함수_getScore()", () => {
        car.go()
        expect(car.getScore()).toEqual(1);
    })    

})