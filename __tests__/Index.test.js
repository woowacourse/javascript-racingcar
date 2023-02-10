const App = require("../src/Index");

describe("Index_test", () => {
    test("차 객체 생성 성공 확인", () => {
        const app = new App();
        expect(app.createCars(["A", "B", "C"])).toEqual(3);
    });

    test("승리자가 없으면 false", () => {
        const app = new App();
        expect(app.checkWinnerNone([])).toEqual(false);
    });
});
