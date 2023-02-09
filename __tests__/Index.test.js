const Car = require("../src/Car");
const App = require("../src/Index");

describe("Index_test", () => {
    

    test("차 객체 생성_createCars", () => {
        const app = new App()
        app.createCars(["A", "B", "C"]);

        expect(app.cars.length).toEqual(3)
    })
 

})