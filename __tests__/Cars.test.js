const Car = require("../src/domain/Car");
const Cars = require("../src/domain/Cars")

describe("Cars객체 단위 테스트", () => {
    const cars = new Cars(["nave","sua","scent"]);    

    test("cars 배열을 얻는 함수 테스트", () => {
        expect(cars.getCars()).toEqual(["nave", "sua", "scent"]);
    });

    test("winnerCar을 결정하는 함수 테스트", () => {
        const sua = new Car("sua");
        const nave = new Car("nave");
        const scent = new Car("scent");
        const woowaCars = new Cars([sua, nave, scent]);
        sua.go()
        woowaCars.decideWinnerCar()
        expect(woowaCars.getWinnerCar()).toEqual(["sua"]);
    });

})