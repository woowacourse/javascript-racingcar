const Racing = require("../src/Racing");
const Car = require("../src/Car");
const Random = require("../src/Random");

describe("Racing 객체에 대한 단위테스트", () => {
    const car = new Car("nave");
    const racing = new Racing(car);

    test("랜덤값이 4 이상이면 true를 반환하는 함수 테스트", () => {
        const randomNumber = 4;
        expect(racing.checkRandomNumber(randomNumber)).toEqual(true);
    })

    test("랜덤값이 4 이하면 false를 반환하는 함수 테스트", () => {
        const randomNumber = 3;
        expect(racing.checkRandomNumber(randomNumber)).toEqual(false);
    })

    test("랜덤값이 4 이상이면 각각의 car객체를 전진시키는 함수 테스트", () => {
        const randomNumber = 4;
        racing.raceEachCar(randomNumber);
        expect(car.getScore()).toEqual(1);
    })
 
    test("랜덤값이 4 이하면 각각의 car객체를 정지시키는 함수 테스트", () => {
        const randomNumber = 3;
        racing.raceEachCar(randomNumber);
        expect(car.getScore()).toEqual(1);
    })

})