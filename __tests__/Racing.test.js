const Racing = require("../src/Racing");
const Car = require("../src/Car");
const Random = require("../src/Random");

describe("racing_test", () => {
    const car = new Car("val");
    const racing = new Racing(car);
    

    test("랜덤값이 4 이상인지 아닌지 확인하는 함수_checkRandomNumberOverFour()", () => {
        Random.getRandomNumber = jest.fn();
        Random.getRandomNumber.mockReturnValue(4);
        expect(racing.checkRandomNumberOverFour()).toEqual(true);
    })

    test("자동차 한개를 전진시키는 함수_raceEachCar()", () => {
        racing.checkRandomNumberOverFour = jest.fn(() => true) 
        racing.raceEachCar();
        expect(car.getScore()).toEqual(1);
    })
 

})